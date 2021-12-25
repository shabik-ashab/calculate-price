
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import Page1 from './components/Page1';
import Page2 from './components/Page2';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Routes>
      <Route path="/" element={<Page1 />}>
        <Route path="page2" element={<Page2 />} />
        {/* <Route path="dashboard" element={<Dashboard />} /> */}
      </Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
