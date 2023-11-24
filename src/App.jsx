import './App.css'

function App() {
  const condition = false;
  if(condition) {
    console.log("HW");
  } else {
    console.log("CN")
  }

  return (
    <div>  
    {
      condition ?  <h1>Verdadero</h1> : <h1>Falso</h1>
    }
    <h1>Hello world</h1>
    <p>My first react app</p>

  </div>
  )
  ;
}

export default App;
