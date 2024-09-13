import "./App.css";
import { useEffect, useState } from "react";

function LifeCycle() {

  const [increase, setIncrease] = useState(0);
  const [decrease, setDecrease] = useState(0);

  // Her zaman çalışır.
  useEffect(()=>{

    console.log("Her zaman çalışır")
     
  })

  //Component ilk render edildiğinde çalışır.
  useEffect(()=>{

    console.log("İlk render edildiğinde çalışşır.")

  }, [])

  //Component ilk kez çağrıldığında çalışır ve state değerleri değiştiğinde çalışır.
  useEffect(()=>{

    console.log("İlk render edildiğinde ve increase değeri değiştiğinde")

  }, [increase])

  useEffect(()=>{


    console.log("İlk render edildiğinde ve decrease değeri değiştiğinde")

  }, [decrease])

  useEffect(()=>{


    console.log("İlk render edildiğinde, increase veya decrease değeri değiştiğinde")

  }, [increase, decrease])

  // Component render'dan çıktığında çalışır.

  useEffect(()=>{
    return () =>{
      console.log("Component unmount oldu render'dan çıktı")
    }
  }, [])


  return (
    <div className="App">
      <div className="firstDiv">
        <button onClick={() => setIncrease(increase + 1)}>Increase</button>
        <div> Increase : {increase}</div>
      </div>
      <div className="secondDiv">
        <button onClick={() => setDecrease(decrease - 1)}>Decrease</button>
        <div>Decrease : {decrease} </div>
      </div>
    </div>
  );
}

function App(){

  const [showLifeCycle, setShowLifeCycle] = useState(true);

  return(
    <>
      <h1>Component Lifecycle</h1>
      {showLifeCycle && <LifeCycle/>}

      <button onClick={()=>setShowLifeCycle((old)=>!old)}> LifeCycle'ı Göster / Gizle</button>
      
    </>
  )
}
export default App;
