import logo from './logo.svg';
import './App.css';
import Create from './pages/create';
import Users from './pages/users';
import EditUser from './pages/EditUser';


function App() {
  return (
    <div className="App">
      <Create/>
      <hr />
      <Users/>
    </div>
  );
}

export default App;
