import CustomBtn from "./components/CustomBtn"
import {useState} from "react"
import calculate from "./store/Calculate"

const operators = ["+", "-", "x", "/"]

export default function App(){
  const [currentValue, setCurrentValue] = useState("0");
  const [previousValue, setPreviousValue] = useState("0");
  const [operator, setOperator] = useState("");

function handleButtonClick(label: string){
    if(!isNaN(Number(label)) || label === "."){

      if(label === "." && currentValue.includes(".")) return;

      setCurrentValue(prev => (
        prev === "0" ?
        label === "." ? prev + label : label
        : prev + label
      ))

    }else if(label === "AC"){

      setCurrentValue("0");
      setPreviousValue("0");
      setOperator("");
      return;

    }else if(operators.includes(label)){
      if(operator && previousValue !== "0"){
        const prev = parseFloat(previousValue);
        const curr = parseFloat(currentValue)
        setPreviousValue(() => String(calculate(prev, curr, operator)))
        setCurrentValue("0")
      }else{
        setPreviousValue(currentValue);
        setCurrentValue("0");
      }
      setOperator(label);
      return;

    }else if(label === "="){
      const prev = parseFloat(previousValue);
      const curr = parseFloat(currentValue);

      setCurrentValue(() => String(calculate(prev, curr, operator)))
      setOperator("")
      setPreviousValue("0")
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

        <div className="col-span-4 p-3 text-white text-2xl font-bold text-right h-15">{currentValue}</div>
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