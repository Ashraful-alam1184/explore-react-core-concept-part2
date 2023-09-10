
import './App.css'
import Counter from './counter';
import Team from './team';
import Friends from './friends';


function App() {
  function handleClick(){
    alert('Please fill up your login details');
  }
  const handleClick2 = ()=>{
    alert('Please fil up your details')
  }

  return (
    <>
      <h1>React core concept part 2</h1>
      <Friends></Friends>
      <Counter></Counter>
      <Team></Team>
      <button className='margin' onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button className='margin2' onClick={()=>{alert('please give your details')}}>Click Me 3</button>
    </>
  )
}

export default App
