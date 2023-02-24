import './App.css'
import Number from './Number';


const numarray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]

function isPrime(numarray) {
  if (numarray===0 || numarray===1) {
    return false;
  }
  for (let i =2; i <numarray; i++) {
    if (numarray % i === 0) {
      return false;
    }
  }
  return true;
}

const Numbers = ({ array }) => {
  const list = array.map((ele,i) => {
    if (isPrime(ele)) {
      return <Number  num={ele} i={i} color="red"/>;
    } else {
      if (ele % 2 === 0) {
        return <Number  num={ele} i={i}  color="green"/>;
      } else {
        return <Number  num={ele} i={i}  color="yellow"/>;
      }
    }
  });
  return list;
};


function App() {
  
  return (
    <div className="App">
        <div className='container'>
        <Numbers array={numarray} />
        </div>
     
    </div>
  );
}

export default App;
