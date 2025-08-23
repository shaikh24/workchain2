import { Router } from 'express';
import fetch from 'node-fetch';
const r = Router();

r.post('/approve', async (req, res) => {
  const { paymentId } = req.body;
  try {
    const resp = await fetch(`https://api.minepi.com/v2/payments/${paymentId}/approve`, {
      method: 'POST',
      headers: { Authorization: `Key ${process.env.PI_API_KEY}`, 'Content-Type': 'application/json' }
    });
    const data = await resp.json();
    res.json({ ok: true, data });
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message });
  }
});

r.post('/complete', async (req, res) => {
  const { paymentId, txid } = req.body;
  try {
    const resp = await fetch(`https://api.minepi.com/v2/payments/${paymentId}/complete`, {
      method: 'POST',
      headers: { Authorization: `Key ${process.env.PI_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ txid })
    });
    const data = await resp.json();
    res.json({ ok: true, data });
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message });
  }
});

export default r;
