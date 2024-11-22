const fetch = require('node-fetch');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const response = await fetch('https://script.google.com/macros/s/AKfycbwvgs_SieNai-PqvtBFpO4DwOQaDaJVYBtPX0ouLGgGr6kTB4ZAXtqZdh2tCrIjwu6SaQ/exec', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(req.body),
        });

        const data = await response.json();
        res.status(200).json(data);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
