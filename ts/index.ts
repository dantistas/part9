
import express from 'express';
import {bmiCalculator} from './bmiCalculator';
import {exerciseCalculator} from './exerciseCalculator';

const app = express();
app.use(express.json())

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get(`/bmi`,(req, res)=>{

    const height = Number(req.query.height);
    const weight = Number(req.query.weight);
    const bmi = bmiCalculator(height, weight);

    if(isNaN(height) || !height || isNaN(weight) || !weight){
        return  res.status(400).json({error: "malformatted parameters"});
    }else{
        return res.json({height, weight, bmi});
    }
});

app.post('/exercises', (req,res)=>{
  
  const exercises  = req.body.daily_exercises
  const target = req.body.target
  let validExercises = true
  let validTarget  = !(isNaN(target))
  console.log(exercises)
  console.log(target)
  
if(exercises && target){
  for(let i=0; i<exercises.length; i++ ){
    if(isNaN(exercises[i])){                  
      validExercises = false                  
    }
  }
}
  


  if(!exercises || !target){
    return res.json({error: "missing parameters "})
  }else if(!validTarget || !validExercises){
    return res.json({error: "malformed parameters "})
  }else{
    const result = exerciseCalculator(exercises,target)
    return res.json(result)
  }

})


const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});