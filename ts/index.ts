import express from 'express';
import {bmiCalculator} from './bmiCalculator';

const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get(`/bmi`,(req, res)=>{

    const height = Number(req.query.height)
    const weight = Number(req.query.weight)
    const bmi = bmiCalculator(height, weight)

    if(isNaN(height) || !height || isNaN(weight) || !weight){
        return  res.status(400).json({error: "malformatted parameters"})
    }else{
        return res.json({height, weight, bmi})
    }
})

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});