import { Router } from 'express';
const r = Router();

r.post('/create', (req, res) => {
  const { uid, amount, memo } = req.body;
  return res.json({ ok: true, payment: { identifier: 'demo-payment-' + Date.now(), uid, amount, memo } });
});

r.post('/submit', (req, res) => {
  const { paymentId } = req.body;
  return res.json({ ok: true, txid: 'demo-txid-' + Date.now(), paymentId });
});

r.post('/complete', (req, res) => {
  const { paymentId, txid } = req.body;
  return res.json({ ok: true, paymentId, txid, status: 'completed' });
});

export default r;
