import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import {Login} from "./Pages/Login/"
import {SignUp} from "./Pages/SignUp"

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/cadastro" element={<SignUp/>}/>
      </Routes>
    </Router>
  );

}
