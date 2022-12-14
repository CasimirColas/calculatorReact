import { useState } from 'react';
import './App.css';
import Keys from './components/key';
import Operator from './components/operator';
import Equals from './components/equals';

function App() {
  const [input, setInput] = useState();
  const [memory, setMemory] = useState()
  const [op, setOp] = useState('')
  const [m2, setM2] = useState()

  function selfInput(value){
    console.log(value)
    setInput(parseInt(value))

  }

  function numberInput(value){
    if(isNaN(input)){
      setInput(value)
    }else{
      setInput(input*10+value)
    }
  }

  function opAction(op){
    setMemory(input)
    setOp(op)
    setInput(NaN)
  }

  function eqAction(){
    if(input===memory){
      switch(op){
        case '+':
          let resultAdd = memory+m2
          setInput(resultAdd)
          setMemory(resultAdd)
          break;
        case '-':
          let resultSub = memory-m2
          setInput(resultSub)
          setMemory(resultSub)
          break;
        default:
          setMemory(0)
      }
    }else
    if(!isNaN(input)){
      setM2(input)
      switch(op){
        case '+':
          let resultAdd = input+memory
          setInput(resultAdd)
          setMemory(resultAdd)
          break;
        case '-':
          let resultSub = memory-input
          setInput(resultSub)
          setMemory(resultSub)
          break;
        default:
          setMemory(0)
      }
    }
  }

  function reset(){
    setM2(NaN)
    setMemory(NaN)
    setOp('')
    setInput(NaN)
  }
  let numPad = []
  for(let i=0;i<10;i++){
    numPad.push(<Keys key={i} name={i} onClick={()=>numberInput(i)}/>)
  }
  return (
    <div className='board'>
      <input className='input' type='number' defaultValue='' value={input} onChange={(event)=>selfInput(event.target.value)}/>
      {numPad}
      <Operator name={"+"} onClick={(event)=>opAction(event.target.id)}/>
      <Operator name={"-"} onClick={(event)=>opAction(event.target.id)}/>
      <Equals onClick={()=>eqAction()}/>
      <button onClick={()=>setInput(NaN)}>Erase current</button>
      <button onClick={()=>reset()}>Reset</button>
    </div>
  );
}

export default App;
