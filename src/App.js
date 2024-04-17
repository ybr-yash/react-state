import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; 
import StateComponent from './components/StateComponent';
import ParentComponent from './components/props-demo/ParentComponent';
import ChildComponent from './components/props-demo/ChildComponent';
import DrillGrandparentComponent from './components/props-drilling-demo/DrillGrandparentComponent';


function App() {
  return (
    <div className='App'>
      
    <Router>
      <nav>
        <Link to="state"> State </Link>
        <Link to="parent"> Props Demo </Link>
        <Link to="child"> Props Child Demo </Link>
        <Link to="grandparent"> Prop Drilling Demo </Link>
      </nav>
      <Routes>
        <Route path="state" element={<StateComponent />} />
        <Route path="parent" element={<ParentComponent />} />
        <Route path="child" element={<ChildComponent />} />
        <Route path="grandparent" element={<DrillGrandparentComponent />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
