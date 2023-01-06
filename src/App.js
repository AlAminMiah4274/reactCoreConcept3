import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <LoadComments></LoadComments>
    </div>
  );
}

function LoadComments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(data => setComments(data))
  }, []);

  return (
    <div>
      <h1>Comments: {comments.length}</h1>
      {
        comments.map(comment => <Users name={comment.name} body={comment.body}></Users>)
      }
    </div>
  );
}

function Users(props) {
  return (
    <div>
      <h3>Name: {props.name}</h3>
      <p>{props.body}</p>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}

export default App;
