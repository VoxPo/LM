const fetch = require('node-fetch');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            // Reencaminha a requisição para o Google Apps Script
            const response = await fetch(
                'https://script.google.com/macros/s/AKfycbwvgs_SieNai-PqvtBFpO4DwOQaDaJVYBtPX0ouLGgGr6kTB4ZAXtqZdh2tCrIjwu6SaQ/exec',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(req.body),
                }
            );

            // Verifica se a resposta do Apps Script foi bem-sucedida
            if (!response.ok) {
                return res.status(response.status).json({
                    status: 'error',
                    message: `Erro ao comunicar com o Google Apps Script: ${response.statusText}`,
                });
            }

            const data = await response.json();

            // Retorna os dados recebidos do Apps Script para o cliente
            res.status(200).json(data);
        } catch (error) {
            console.error('Erro ao enviar para o Google Apps Script:', error);
            res.status(500).json({
                status: 'error',
                message: 'Erro interno no servidor. Verifique os logs.',
            });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ message: 'Method not allowed' });
    }
}
