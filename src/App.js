import { useState } from 'react';
import './App.css';
import Keys from './components/key';
import Operator from './components/operator';
import Equals from './components/equals';

function App() {
  const [input, setInput] = useState();
  const [memory, setMemory] = useState()
  const [op, setOp] = useState('')

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
    if(!isNaN(input)){
      switch(op){
        case '+':
          setInput(input+memory)
          break;
        case '-':
          setInput(memory-input)
          break;
        default:
      }
    }
  }
  let numPad = []
  for(let i=0;i<10;i++){
    numPad.push(<Keys key={i} name={i} onClick={()=>numberInput(i)}/>)
  }
  return (
    <div className='board'>
      <input className='input' type='number' defaultValue={0} value={input} onChange={(event)=>selfInput(event.target.value)}/>
      {numPad}
      <Operator name={"+"} onClick={(event)=>opAction(event.target.id)}/>
      <Operator name={"-"} onClick={(event)=>opAction(event.target.id)}/>
      <Equals onClick={()=>eqAction()}/>
    </div>
  );
}

export default App;
