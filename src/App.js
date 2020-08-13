import React from 'react';
import { getData } from './data/data';

function App() {
  const [state, setState] = React.useState([]);

  React.useEffect(() => {
    getData().then((res) => setState(Object.entries(res.rates)));
  }, []);

  return (
    <div className="list-items">
      <ul className="list-item">
        <h1>List items</h1>
        {state.map((item, index) => {
          return (
            <li key={item + index}>
              <span>{item[0]}: </span>
              {item[1]}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
