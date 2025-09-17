import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  return (

    <div>

      <b>
        Hii There
      </b>
      <Counter></Counter>
    </div>

  );

}

function Counter() {

  const [count, setCount] = useState(0);

  useEffect(function () {

    const timer = setInterval(function () {

      setCount(function (count) {
        return count + 1;
      })

    }, 1000);

    return () => clearInterval(timer);

  }, []);

  // function increaseCount() {
  //   setCount(count + 1);
  // }

  return (
    <div>
      <h1> {count} </h1>
    </div>
  );

}

export default App
