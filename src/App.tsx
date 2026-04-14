import CustomBtn from "./components/CustomBtn"
import {useState} from "react"
import calculate from "./store/Calculate"

const operators = ["+", "-", "x", "/"]

export default function App(){
  const [currentValue, setCurrentValue] = useState("0");
  const [previousValue, setPreviousValue] = useState("0");
  const [operator, setOperator] = useState("");
  const [expression, setExpression] = useState("");
  const [shouldOverwrite, setShouldOverwrite] = useState(false);

function handleButtonClick(label: string){
    if(!isNaN(Number(label)) || label === "."){

      if(label === "." && currentValue.includes(".")) return;

      setCurrentValue(prev => {
        if(prev === "0"){
        if(label === "."){
          return prev + label
        }else{
          return label
        }
      }else if(shouldOverwrite){
        if(label === "."){
          return `0${label}`
        }else{
          return label
        }
      }else{
        return prev + label;
      }
      })

      setShouldOverwrite(false)

    }else if(label === "AC"){

      setCurrentValue("0");
      setPreviousValue("0");
      setOperator("");
      setExpression("")
      return;

    }else if(operators.includes(label)){
      if(operator && previousValue !== "0"){
        const prev = parseFloat(previousValue);
        const curr = parseFloat(currentValue)
        const result = String(calculate(prev, curr, operator))
        setPreviousValue(result)
        setExpression(`${result} ${label}`)
        setCurrentValue("0")
      }else{
        setExpression(`${currentValue} ${label}`)
        setPreviousValue(currentValue);
        setCurrentValue("0");
      }
      setOperator(label);
      return;

    }else if(label === "="){
      if(operator === "") return;
      const prev = parseFloat(previousValue);
      const curr = parseFloat(currentValue);

      setExpression(`${previousValue} ${operator} ${currentValue} =`)

      setCurrentValue(() => String(calculate(prev, curr, operator)))
      setOperator("")
      setPreviousValue("0")
      setShouldOverwrite(true)
    }else if(label === "+/-"){
      setCurrentValue(value => String(parseFloat(value) * -1))
      return;
    }else if(label === "%"){
      setCurrentValue(value => String(parseFloat(value) / 100))
      return;
    }
    
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="grid grid-cols-4 bg-[#7A7B88] p-px gap-px w-80">

        <div className="col-span-4 p-3 text-white text-2xl font-bold text-right min-h-25 flex flex-col justify-end gap-2">
          <div className="text-md text-gray-300 h-6">{expression}</div>
          <div className="truncate">{currentValue}</div>
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