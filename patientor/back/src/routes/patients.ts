import express from 'express';
import patientServices from '../services/patientServices';
import toNewPatient from '../utils'
const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patientServices.getPatients());
})

router.post('/', (req, res) => {
  try{
    const newPatientEntry = toNewPatient(req.body);

    const addedPatientEntry = patientServices.addPatient(newPatientEntry);
    res.json(addedPatientEntry)
  } catch(e){
    res.status(400).send(e.message);
  }
})

export default router;