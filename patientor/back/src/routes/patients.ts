import express from 'express';
import patientServices from '../services/patientServices';
import toNewPatient , {toNewEntry} from '../utils'
const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patientServices.getPatients());
})

router.get('/:id', (req, res) => {
  res.send(patientServices.getPatientByID(req.params.id))
})


router.post('/:id/entries', (req, res) => {
  const patient = patientServices.getPatientByID(req.params.id)
  console.log("krc ???",req.body)
  const newEntry = toNewEntry(req.body)

  if(patient && newEntry){
    const patientWithAddedEntry = patientServices.addEntry(patient , newEntry)
    res.json(patientWithAddedEntry)
  }
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