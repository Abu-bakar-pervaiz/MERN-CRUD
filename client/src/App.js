import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Navbar from './pages/layout/Navbar'
import Sidebar from './pages/layout/Sidebar'
import AddCourse from "./pages/course/AddCourse";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" exact element={ <Home /> }></Route>
        <Route path="/dashboard" element={ <Dashboard/> }></Route>
        <Route path="/add-course" element={ <AddCourse/> }></Route>
      </Routes>
    </Router>
  );
}

export default App;
