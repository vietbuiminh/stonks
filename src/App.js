import './App.css';
import Stock from './stocks'

function getInputValue(){
  let inputCode = document.getElementById("inputData").value;
  alert(inputCode);
}

function App() {
  return (
    <div className="App">
      <div className="stock-app">
        <Stock></Stock>
      </div>
    </div>
  );
}

export default App;
