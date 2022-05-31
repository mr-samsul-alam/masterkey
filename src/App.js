import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Task1Page from './Pages/Task_1/Task1Page';
import Task2Page from './Pages/Task_2/Task2Page';
import NavigationBar from './Pages/NavigationBar/NavigationBar';
function App() {

  return (
    <div className="App">

      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Task1Page />} />
          <Route path="task1" element={<Task1Page />} />
          <Route path="task2" element={<Task2Page />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
