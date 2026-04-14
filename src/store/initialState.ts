import type{ CalculatorState } from "../types/CalculatorAction";

export const initialState: CalculatorState = {
    currentValue: "0",
    previousValue: "0",
    operator: "",
    overwrite: false

}