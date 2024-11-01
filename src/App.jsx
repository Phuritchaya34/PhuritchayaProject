import react,{ useState } from "react";

const App = () =>{
  let [couter, setCouter] = useState(5);
  const updata = () => {
    setCouter(couter+1);
  }
  const decrease = () => {
    setCouter(couter-1);
  }
  return(
    <div>
      <h1>Ma La Thi Chingchai</h1>
      <p>ราคาไม้ละ: {couter}&nbsp;&nbsp;</p>
      <button onClick={updata}>+</button>
      <button onClick={decrease}>-</button>
      <p>5 ไม้: {couter*5}บาท</p>
      <p>10 ไม้:{couter*10}บาท</p>
      <p>20 ไม้:{couter*20}บาท</p>
      <p>30 ไม้:{couter*30}บาท</p>
    </div>
  )

}
export default App