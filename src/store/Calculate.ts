export default function calculate(num1: number, num2: number, op: string){
    switch(op){
        case '+': return parseFloat((num1 + num2).toPrecision(12))
        case '-': return parseFloat((num1 - num2).toPrecision(12))
        case 'x': return parseFloat((num1 * num2).toPrecision(12))
        case '/': return (
            !isFinite(num1 / num2) ? "Math Error" : num1 / num2
        ) 
        default: return num2
    }
}