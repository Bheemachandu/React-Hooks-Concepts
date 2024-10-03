import useContextHook from './useContextHook';
import './App.css';


import { useState, useEffect } from "react";


const initialState = false
function App() {
  

  const [toggleText, setToggleText] = useState(initialState)
  console.log(toggleText)

  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(false);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    if (count === 5) {
      setShowText(true)
    }
    if (count===10){
      fetchAllProducts()
    }
  }, [count])

  async function fetchAllProducts() {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();

      if (result && result.products) setProductList(result.products)
    } catch (error) {
      console.log(error)
    }

  }

  

  return (
    <div className="App">
      <div>
        <h1>UseState Hook</h1>
        <div>
          {toggleText ? <p>Hello World</p> : null}

          <button onClick={() => setToggleText(!toggleText)}>Toggle Text</button>
        </div>
      </div>
      <div>
        <h1>UseEffect Hook</h1>
        <p>Count is {count}</p>
        {showText ? <h3>Hello World</h3> : null}
        <button onClick={() => setCount(count + 1)}>Increament Count</button>
        <ul>
          {productList && productList.length > 0 ? productList.map(item => <li>{item.title}</li>) : null}
        </ul>
      </div>
      <useContextHook/>
    </div>
  );
}

export default App;
