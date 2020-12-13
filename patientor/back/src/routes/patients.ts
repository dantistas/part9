import express from 'express';
import patientServices from '../services/patientServices'

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patientServices.getPatients());
})

router.post('/', (req, res) => {
  const {name, ssn, dateOfBirth, gender, occupation} =  req.body;
  const newPatient = patientServices.addPatient(
    name,
    ssn,
    dateOfBirth,
    gender,
    occupation
  )
  console.log(newPatient)
  res.json(newPatient);
})

export default router;