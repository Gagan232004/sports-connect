// import React from 'react';
// import Login from './components/login.js';

// function App() {
//   return (
//     <div>
//       <Login />
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login.js";
import SignUp from "./components/Signup.js";
import Home from './components/Homepage.js';  // Import the Home component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />  {/* Login route */}
        <Route path="/signup" element={<SignUp />} /> {/* Sign-up route */}
        <Route path="/home" element={<Home />} />     {/* Home route */}
        <Route path="/" element={<Login />} />        {/* Default route to Login */}
      </Routes>
    </Router>
  );
}

export default App;




