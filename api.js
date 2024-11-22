const fetch = require('node-fetch');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            // Envia os dados para o Google Apps Script
            const response = await fetch('https://script.google.com/macros/s/AKfycbwvgs_SieNai-PqvtBFpO4DwOQaDaJVYBtPX0ouLGgGr6kTB4ZAXtqZdh2tCrIjwu6SaQ/exec', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',  // Permite CORS
                    'Access-Control-Allow-Methods': 'POST',  // Permite o método POST
                },
                body: JSON.stringify(req.body),
            });

            // Recebe a resposta do Google Apps Script
            const data = await response.json();

            // Envia a resposta para o front-end
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao enviar dados para o Google Sheets', error: error.message });
        }
    } else {
        res.status(405).json({ message: 'Método não permitido' });
    }
}
