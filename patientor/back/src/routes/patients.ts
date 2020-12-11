import express from 'express';
import patientServices from '../services/patientServices'

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patientServices.getPatients());
})

router.post('/', (_req, res) => {
  res.send('Saving a patient!');
})

export default router;