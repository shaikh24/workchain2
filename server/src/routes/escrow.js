import { Router } from 'express';
const r = Router();

r.post('/create', (req, res) => {
  const { jobId, clientUid, freelancerUid, amount, paymentId } = req.body;
  return res.json({ ok: true, escrow: { id: 'escrow-' + Date.now(), jobId, clientUid, freelancerUid, amount, paymentId } });
});

r.get('/status/:escrowId', (req, res) => {
  return res.json({ ok: true, escrowId: req.params.escrowId, status: 'funded' });
});

export default r;
