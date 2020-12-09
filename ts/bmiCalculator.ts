
const bmiCalculator = (height: number , weight : number) => {

    const BMI = weight / ((height/100) * (height/100))

    switch(true){
        case (BMI < 15):
            return console.log(`Very severely underweight (${BMI})`)
        case (BMI <=16 ):
            return console.log(`Severely underweight (${BMI})`)
        case (BMI <= 18.5):
            return console.log(`Underweight (${BMI})`)
        case (BMI <= 25):
            return console.log(`Normal (healthy weight) (${BMI})`)
        case (BMI <= 30):
            return console.log(`Overweight (${BMI})`)
        case (BMI <= 35):
            return console.log(`Moderately obese (${BMI})`)
        case (BMI <= 40):
            return console.log(`Severely obese (${BMI})`)
        case (BMI > 40):
            return console.log(`Very severely obese (${BMI})`)

    }
} 


const height: number = Number(process.argv[2])
const weight: number = Number(process.argv[3])

bmiCalculator(height, weight)