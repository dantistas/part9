import express from 'express';
import diagnoseServises from '../services/diagnoseServises'

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(diagnoseServises.getDiagnoses());
})

router.post('/', (_req, res) => {
  res.send('Saving a diagnose!');
})

export default router;