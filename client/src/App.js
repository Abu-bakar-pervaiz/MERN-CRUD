import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Navbar from './pages/layout/Navbar'
import Sidebar from './pages/layout/Sidebar'

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" exact element={ <Home /> }></Route>
        <Route path="/dashboard" element={ <Dashboard/> }></Route>
      </Routes>
    </Router>
  );
}

export default App;
