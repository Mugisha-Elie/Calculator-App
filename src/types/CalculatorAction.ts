export type CalculatorAction = 
| {type: "ADD_DIGIT", payload: string}
| {type: "CHOOSE_OPERATOR", payload: string}
| {type: "CLEAR"}
| {type: "PERCENTAGE"}
| {type: "TOGGLE_SIGN"}
| {type: "CALCULATE"}

export interface CalculatorState{
    currentValue: string;
    previousValue: string;
    operator: string;
    overwrite: boolean
}