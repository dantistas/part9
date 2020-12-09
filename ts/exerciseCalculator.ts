
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
            default: 
                return NaN
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
            default:
                return "something went wrong"
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

const argvs  = process.argv.filter(a=>(a))

const array : Array<number> = []
let target: number = 0

for(let i=2; i<argvs.length; i++ ){
    if(i == 2 ){
        target = parseFloat(argvs[i])
    }else {
        array.push(parseFloat(argvs[i]))
    }  
}

for(let i = 0; i<array.length; i++){
    if(isNaN(array[i])){
        throw new Error('values must be numbers!!')
    }

}
exerciseCalculator(array, target)
