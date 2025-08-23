import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import payouts from './routes/payouts.js';
import u2a from './routes/u2a.js';
import escrow from './routes/escrow.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(process.cwd(), '../client/dist')));

// Basic routes
app.get('/health', (req, res) => res.json({ ok: true }));
app.use('/api/payouts', payouts);
app.use('/api/u2a', u2a);
app.use('/api/escrow', escrow);

const PORT = process.env.PORT || 4000;

if (!process.env.PI_APP_ID || !process.env.PI_API_KEY) {
  console.error('Missing PI_APP_ID or PI_API_KEY in environment. Check .env');
  process.exit(1);
}

app.listen(PORT, () => console.log(`WorkChain server listening on :${PORT}`));
