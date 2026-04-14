import type { CalculatorState } from "../types/CalculatorAction";
import type { CalculatorAction } from "../types/CalculatorAction";
import { initialState } from "./initialState";
import calculate from "./Calculate"

export default function calculatorReducer(
    state: CalculatorState, action: CalculatorAction
): CalculatorState {

    switch(action.type){

        case "CLEAR": return initialState;

        case "ADD_DIGIT":{
            if(action.payload === "." && state.currentValue.includes(".")){
                return state
            }
            if(state.overwrite){
                return {
                   ...state,
                   currentValue: action.payload === "." ? "0." : action.payload,
                   overwrite: false
                }
            }
            return {
                ...state,
                currentValue: state.currentValue === "0" && action.payload !== "." 
                ? action.payload : state.currentValue + action.payload
            }
        }

        case "PERCENTAGE": 
            return {
                ...state, 
                currentValue: String(parseFloat(state.currentValue) / 100),
                overwrite: false
            }

        case "TOGGLE_SIGN":
            return{
                ...state,
                currentValue: String(parseFloat(state.currentValue) * -1),
                overwrite: false
            }

        case "CHOOSE_OPERATOR": {
            if(state.operator === ""){
                return {
                    ...state,
                    operator: action.payload,
                    previousValue: state.currentValue,
                    currentValue: initialState.currentValue,
                    overwrite: false,
                }
            }
            const result = String(
                calculate(
                    parseFloat(state.previousValue),
                    parseFloat(state.currentValue),
                    state.operator
                )
            )

            return {
                ...state,
                previousValue: result,
                currentValue: initialState.currentValue,
                overwrite:false
            }
        }

        case "CALCULATE":{
            if(state.operator === "" || state.previousValue === "0") return state;

            const result = String(
                calculate(
                    parseFloat(state.previousValue),
                    parseFloat(state.currentValue),
                    state.operator
                )
            )

            return {
                ...state,
                overwrite: true,
                previousValue: initialState.currentValue,
                currentValue: result,
                operator: initialState.operator

            }
        }

        default: return state;
    }
}
