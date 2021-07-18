import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, login, fetchUsers } from "./action";
import { useEffect } from "react";

function App() {
  // accedi al valore nello store con selettore in combineReducer
  // lo stato è salvato nel reducer e si modifica dal reducer
  // per accedere al reducer servono le action
  const counter = useSelector((state) => state.counter);
  const loggedIn = useSelector((state) => state.isLogged);
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const handleClick = () => {
    dispatch(login());
  };

  return (
    <div className="App">
      <p>Counter {counter} </p>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <br></br>
      <br></br>
      <br></br>

      <b>Esempio di fetching API con saga</b>
      {loading ? null : users.map((u) => <p>{u.name}</p>)}

      <br></br>
      <br></br>
      <br></br>

      {loggedIn ? (
        <button onClick={handleClick}>Logout</button>
      ) : (
        <button onClick={handleClick}>Login</button>
      )}
      {loggedIn ? <p> Info privata</p> : null}
    </div>
  );
}

export default App;
