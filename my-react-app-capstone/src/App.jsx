import LoginRegister from "./Components/Assets/LoginRegister/LoginRegister";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path = '/login' element={<LoginRegister/>}></Route>
  </Routes>
  <LoginRegister/>
  </BrowserRouter>

  );
};

export default App
