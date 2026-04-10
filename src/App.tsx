import CustomBtn from "./components/CustomBtn"
import {useState} from "react";


export default function App(){
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("0");
  const [isComplete, setIsComplete] = useState(false);

  function handleInput(label: string){
    if(isComplete){
      setExpression(label);
      setResult(label);
      setIsComplete(false);
      return;
    }

    setExpression(prev => {
      if(prev === "0") return label
      return prev + label
    })

    setResult(prev => {
      if(prev === "0") return label;
      return prev + label
    })
  }


  function handleOperator(operator: string){
    if(expression === "") return;

    setExpression((prev) => {
      const lastChar = prev.trim().slice(-1) 
      const operators = ["+", "X", "-", "/"]

      if(operators.includes(lastChar)){
        return prev.slice(0, -3) + ` ${operator} `
      }

      return prev + ` ${operator} `
    })
  }

  function handleReset(){
    setExpression("")
    setResult("0");
    setIsComplete(true)
  }

  function handleButtonClick(label: string){
    const operators = ["+", "X", "-", "/"]

    if(operators.includes(label)){
      handleOperator(label)
    }else if(label === "AC"){
      handleReset()
    }else{
      handleInput(label)
    }
  }

  return (
    <div
    className="min-h-screen flex justify-center items-center bg-black/90"
    >

      <div
      className="grid grid-cols-4 gap-px bg-[#7A7B88] w-80 overflow-hidden"
      >
        <div
        className="p-3 text-2xl font-bold text-white col-span-4 flex flex-col justify-end min-h-25"
        >
          <div
          className="text-sm h-6 text-right overflow-hidden whitespace-nowrap overflow-x-auto [&::-webkit-scrollbar]:hidden"
          >{expression}</div>

          <div
          className="text-2xl font-bold text-right truncate"
          >{result}</div>
        </div>

        <CustomBtn label="AC" onClick={handleButtonClick}/>
        <CustomBtn label="+/-" onClick={handleButtonClick}/>
        <CustomBtn label="%" onClick={handleButtonClick}/>
        <CustomBtn label="/" color="orange" onClick={handleButtonClick}/>
        <CustomBtn label="7"  onClick={handleButtonClick}/>
        <CustomBtn label="8"  onClick={handleButtonClick}/>
        <CustomBtn label="9"  onClick={handleButtonClick}/>
        <CustomBtn label="X" color="orange" onClick={handleButtonClick}/>
        <CustomBtn label="4"  onClick={handleButtonClick}/>
        <CustomBtn label="5"  onClick={handleButtonClick}/>
        <CustomBtn label="6"  onClick={handleButtonClick}/>
        <CustomBtn label="-" color="orange" onClick={handleButtonClick}/>
        <CustomBtn label="1"  onClick={handleButtonClick}/>
        <CustomBtn label="2"  onClick={handleButtonClick}/>
        <CustomBtn label="3"  onClick={handleButtonClick}/>
        <CustomBtn label="+" color="orange" onClick={handleButtonClick}/>
        <CustomBtn label="0" span={2}  onClick={handleButtonClick}/>
        <CustomBtn label="." onClick={handleButtonClick}/>
        <CustomBtn label="=" color="orange" onClick={handleButtonClick}/>
        



      </div>

    </div>
  )
}