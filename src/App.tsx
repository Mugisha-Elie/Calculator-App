import CustomBtn from "./components/CustomBtn"
import { useReducer } from "react"
import calculatorReducer from "./store/calculatorReducer"
import { initialState } from "./store/initialState"



const operators = ["+", "-", "x", "/"]

export default function App(){
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  function handleButtonClick(label: string){
    if(label === "AC"){
      dispatch({type: "CLEAR"})
    }else if(!isNaN(Number(label)) || label === "."){
      dispatch({type: "ADD_DIGIT", payload: label})
    }else if(label === "%"){
      dispatch({type: "PERCENTAGE"})
    }else if(label === "+/-"){
      dispatch({type: "TOGGLE_SIGN"})
    }else if(operators.includes(label)){
      dispatch({type: "CHOOSE_OPERATOR", payload: label})
    }else if(label === "="){
      dispatch({type: "CALCULATE"})
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="grid grid-cols-4 bg-[#7A7B88] p-px gap-px w-80">

        <div className="col-span-4 p-3 text-white text-2xl font-bold text-right min-h-25 flex flex-col justify-end gap-2">
          {/* <div className="text-md text-gray-300 h-6">{expression}</div> */}
          <div className="truncate">{state.currentValue}</div>
        </div>

        <CustomBtn label="AC" onClick={handleButtonClick} />
        <CustomBtn label="+/-" onClick={handleButtonClick} />
        <CustomBtn label="%" onClick={handleButtonClick} />
        <CustomBtn label="/" color="orange" onClick={handleButtonClick} />
        <CustomBtn label="7" onClick={handleButtonClick} />
        <CustomBtn label="8" onClick={handleButtonClick} />
        <CustomBtn label="9" onClick={handleButtonClick} />
        <CustomBtn label="x" color="orange" onClick={handleButtonClick} />
        <CustomBtn label="4" onClick={handleButtonClick} />
        <CustomBtn label="5" onClick={handleButtonClick} />
        <CustomBtn label="6" onClick={handleButtonClick} />
        <CustomBtn label="-" color="orange" onClick={handleButtonClick} />
        <CustomBtn label="1" onClick={handleButtonClick} />
        <CustomBtn label="2" onClick={handleButtonClick} />
        <CustomBtn label="3" onClick={handleButtonClick} />
        <CustomBtn label="+" color="orange" onClick={handleButtonClick} />
        <CustomBtn label="0" span={2} onClick={handleButtonClick} />
        <CustomBtn label="." onClick={handleButtonClick} />
        <CustomBtn label="=" color="orange" onClick={handleButtonClick} />

      </div>
    </div>
  )
}