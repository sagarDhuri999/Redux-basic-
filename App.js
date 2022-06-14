import { useDispatch } from "react-redux";
import "./App.css";
import Redux from "./components/Redux";
import { decreased, increased } from "./features/Increment";
// import UserCard from "./components/UserCard";


function App() {
  const dispatch = useDispatch()


  return (
    <div>
      {/* <UserCard /> */}
      <Redux />
      <div className="App">

        <button onClick={() => {

          dispatch(increased(200))
        }
        } style={{
          fontSize: '41px',
          width: '122px',
          margin: '34px'
        }}>+</button>
        <button onClick={() => {

          dispatch(decreased(100))
        }
        } style={{
          fontSize: '41px',
          width: '122px',

        }}>-</button>
      </div>
    </div>
  );
}

export default App;