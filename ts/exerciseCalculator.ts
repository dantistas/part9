
const exerciseCalculator = (input: Array<number>, target: number) => {

    const trainingDays = input.filter(i => i>0).length
    const totalTrainingHours =  input.reduce(function(a,b){
        return a + b
      }, 0)
    const rating = ()=> {
     
        switch(true){
            case totalTrainingHours <= 14/3:
            return 1
            case totalTrainingHours <= (14/3)*2:
            return 2
            case totalTrainingHours > (14/3)*2:
            return 3
        }   
    }
    const success = target <= rating()
    const averageTrainingHours = totalTrainingHours / input.length
    const ratingDescription = () => {

        switch(true){
            case totalTrainingHours <= 14/3:
            return "not good"
            case totalTrainingHours <= (14/3)*2:
            return "not too bad but could be better"
            case totalTrainingHours > (14/3)*2:
            return "very good"
        }
    }

    const returnObject = {
        periodLength: input.length,
        trainingDays: trainingDays,
        success : success ,
        target: target,
        rating :  rating(),
        averageTrainingHours: averageTrainingHours,
        ratingDescription: ratingDescription()


    }

    return console.log(returnObject)

}

exerciseCalculator([3, 0, 2, 4.5, 0, 3, 1], 2)
