
export const bmiCalculator = (height: number , weight : number) => {

    const BMI = weight / ((height/100) * (height/100))

    switch(true){
        case (BMI < 15):
            return `Very severely underweight (${BMI})`
        case (BMI <=16 ):
            return `Severely underweight (${BMI})`
        case (BMI <= 18.5):
            return `Underweight (${BMI})`
        case (BMI <= 25):
            return `Normal (healthy weight) (${BMI})`
        case (BMI <= 30):
            return `Overweight (${BMI})`
        case (BMI <= 35):
            return `Moderately obese (${BMI})`
        case (BMI <= 40):
            return `Severely obese (${BMI})`
        case (BMI > 40):
            return `Very severely obese (${BMI})`
        default:
            return `something went wrong!`

    }
} 


const height: number = Number(process.argv[2])
const weight: number = Number(process.argv[3])


bmiCalculator(height, weight)
