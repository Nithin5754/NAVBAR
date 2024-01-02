import { useEffect, useRef, useState } from "react"


const Input = () => {
  const [name,setName]=useState('');
  const [isCount,setCount]=useState(0);
  const count=useRef(0)
  const timerId=useRef()
const handlechange=(e)=>{
  setName(e.target.value)
  count.current++;
}
const timer=()=>{
timerId.current=setInterval(()=>{
setCount((prev)=>prev+1)
count.current++
},1000)
}
const StopTimer=()=>{
timerId.current=clearInterval(timerId.current)
timerId.current=0

}
const restTimer=()=>{
  StopTimer()
  if(isCount){
     count.current=0
     setCount(0)
  }

}
  return (
    <div>
<input type="text"  value={name} onChange={handlechange} />
<p> my nam eis {name}</p>
<h3>{count.current} renderd</h3>
<button onClick={timer}>start</button>
<button onClick={StopTimer}>stop</button>

<button onClick={restTimer}>reset</button>
<p>{isCount}</p>


    </div>
  )
}
export default Input