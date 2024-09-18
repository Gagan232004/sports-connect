// import React from "react";
// import BackgroundVideo from 'react-background-video-player';
// import bgImage from './video/background-video.mp4' 
// import "./Login.css"; // For custom CSS (if any)

// const Login = () => {
//   return (
//     <div className="bg-gray-100 flex items-center justify-center min-h-screen relative">
//       {/* Video Background */}
//     <video autoPlay loop muted className="background-video">
//       <source src={bgImage} type="video/mp4"/>
//     </video>

//       {/* Login Card */}
//       <div className="bg-white bg-opacity-80 shadow-md rounded-lg overflow-hidden max-w-sm w-full relative z-10">
//         <div className="bg-green-800 pt-12 pb-8 relative">
//           <div className="w-32 h-32 bg-white rounded-full mx-auto flex items-center justify-center shadow-lg -mt-20">
//             <img
//               src="./3.jpg"
//               alt="Sports-Connect Logo"
//               className="w-20 h-20 pt-5"
//             />
//           </div>
//         </div>

//         <div className="p-8">
//           <h2 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-green-500 to-green-300 mb-6 mt-10 drop-shadow-lg font-custom">
//             Welcome Back
//           </h2>

//           <form action="http://localhost:3000/login" method="post">
//             <div className="mb-4">
//               <label
//                 htmlFor="email"
//                 className="block text-gray-700 text-sm font-bold mb-2"
//               >
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 placeholder="Enter your email"
//               />
//             </div>

//             <div className="mb-6">
//               <label
//                 htmlFor="password"
//                 className="block text-gray-700 text-sm font-bold mb-2"
//               >
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
//                 placeholder="Enter your password"
//               />
//             </div>

//             <div className="flex items-center justify-between">
//               <button
//                 type="submit"
//                 className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//               >
//                 Sign in
//               </button>
//               <a
//                 href="#"
//                 className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
//               >
//                 Forgot Password?
//               </a>
//             </div>
//           </form>

//           <p className="text-center text-gray-600 text-sm mt-6">
//             Don’t have an account?{" "}
//             <a
//               href="./signup.html"
//               className="text-blue-500 hover:text-blue-800"
//             >
//               Sign up
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


// import React from "react";
// import { Link } from "react-router-dom";
// import bgImage from './video/background-video.mp4';
// import "./Login.css"; // For custom CSS (if any)

// const Login = () => {
//   return (
//     <div className="bg-gray-100 flex items-center justify-center min-h-screen relative">
//       {/* Video Background */}
//       <video autoPlay loop muted className="background-video">
//         <source src={bgImage} type="video/mp4"/>
//       </video>

//       {/* Login Card */}
//       <div className="bg-white bg-opacity-80 shadow-md rounded-lg overflow-hidden max-w-sm w-full relative z-10">
//         <div className="bg-green-800 pt-12 pb-8 relative">
//           <div className="w-32 h-32 bg-white rounded-full mx-auto flex items-center justify-center shadow-lg -mt-20">
//             <img
//               src="./3.jpg"
//               alt="Sports-Connect Logo"
//               className="w-20 h-20 pt-5"
//             />
//           </div>
//         </div>

//         <div className="p-8">
//           <h2 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-green-500 to-green-300 mb-6 mt-10 drop-shadow-lg font-custom">
//             Welcome Back
//           </h2>

//           <form action="http://localhost:3000/login" method="post">
//             <div className="mb-4">
//               <label
//                 htmlFor="email"
//                 className="block text-gray-700 text-sm font-bold mb-2"
//               >
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 placeholder="Enter your email"
//               />
//             </div>

//             <div className="mb-6">
//               <label
//                 htmlFor="password"
//                 className="block text-gray-700 text-sm font-bold mb-2"
//               >
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
//                 placeholder="Enter your password"
//               />
//             </div>

//             <div className="flex items-center justify-between">
//               <button
//                 type="submit"
//                 className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//               >
//                 Sign in
//               </button>
//               <a
//                 href="#"
//                 className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
//               >
//                 Forgot Password?
//               </a>
//             </div>
//           </form>

//           <p className="text-center text-gray-600 text-sm mt-6">
//             Don’t have an account?{" "}
//             <Link
//               to="/signup"
//               className="text-blue-500 hover:text-blue-800"
//             >
//               Sign up
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bgImage from './video-image/background-video.mp4';
import "./Login.css"; // For custom CSS (if any)

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRedirectToLogin = () => {
    navigate('/home'); 
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Login successful');
        // Redirect to another page, like a dashboard, after successful login
        navigate('/dashboard'); // Update the path as needed
      } else {
        console.error(data.msg);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen relative">
      {/* Video Background */}
      <video autoPlay loop muted className="background-video">
        <source src={bgImage} type="video/mp4" />
      </video>

      {/* Login Card */}
      <div className="bg-white bg-opacity-80 shadow-md rounded-lg overflow-hidden max-w-sm w-full relative z-10">
        <div className="bg-green-800 pt-12 pb-8 relative">
          <div className="w-32 h-32 bg-white rounded-full mx-auto flex items-center justify-center shadow-lg -mt-20">
            <img
              src="./3.jpg"
              alt="Sports-Connect Logo"
              className="w-20 h-20 pt-5"
            />
          </div>
        </div>

        <div className="p-8">
          <h2 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-green-500 to-green-300 mb-6 mt-10 drop-shadow-lg font-custom">
            Welcome Back
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                onClick={handleRedirectToLogin}
                type="submit"
                className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign in
              </button>
              <a
                href="www.google.com"
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              >
                Forgot Password?
              </a>
            </div>
          </form>

          <p className="text-center text-gray-600 text-sm mt-6">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-500 hover:text-blue-800"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

