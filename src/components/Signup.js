// import React, { useState } from 'react';
// import './App.css'; // Assuming you have your Tailwind CSS imported here
// import "./Signup.css"; 
// import bgImage from './video/background-video.mp4' 

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     age: '',
//     gender: '',
//     gmail: '',
//     mobile: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here, e.g., POST to your API
//     console.log(formData);
//   };

//   return (
//     <div className="bg-gray-100 flex items-center justify-center min-h-screen">
//       {/* Video Background */}
//       <video autoPlay loop muted className="background-video">
//       <source src={bgImage} type="video/mp4"/>
//     </video>

//       {/* Sign-Up Card */}
//       <div className="bg-white bg-opacity-80 shadow-md rounded-lg overflow-hidden max-w-md w-full relative z-10 mt-16 mb-16">
//         <div className="bg-green-800 pt-12 pb-8 relative">
//           <div className="w-32 h-32 bg-white rounded-full mx-auto flex items-center justify-center shadow-lg -mt-20">
//             <img src="./3.jpg" alt="Sports-Connect Logo" className="w-20 h-20 pt-5" />
//           </div>
//         </div>

//         <div className="p-8">
//           <form onSubmit={handleSubmit}>
//             {/* Form Fields */}
//             <div className="mb-4">
//               <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 placeholder="Enter your name"
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="age" className="block text-gray-700 text-sm font-bold mb-2">Age</label>
//               <input
//                 type="number"
//                 id="age"
//                 name="age"
//                 value={formData.age}
//                 onChange={handleChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 placeholder="Enter your age"
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="gender" className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
//               <select
//                 id="gender"
//                 name="gender"
//                 value={formData.gender}
//                 onChange={handleChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               >
//                 <option value="" disabled>Select your gender</option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//                 <option value="other">Other</option>
//               </select>
//             </div>

//             <div className="mb-4">
//               <label htmlFor="gmail" className="block text-gray-700 text-sm font-bold mb-2">Gmail</label>
//               <input
//                 type="email"
//                 id="gmail"
//                 name="gmail"
//                 value={formData.gmail}
//                 onChange={handleChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 placeholder="Enter your Gmail"
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="mobile" className="block text-gray-700 text-sm font-bold mb-2">Mobile No</label>
//               <input
//                 type="text"
//                 id="mobile"
//                 name="mobile"
//                 value={formData.mobile}
//                 onChange={handleChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 placeholder="Enter your mobile number"
//               />
//             </div>

//             <div className="mb-6">
//               <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
//                 placeholder="Enter your password"
//               />
//             </div>

//             <div className="flex items-center justify-between">
//               <button
//                 type="submit"
//                 className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//               >
//                 Sign Up
//               </button>
//               <a
//                 href="./login.html"
//                 className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
//               >
//                 Already have an account?
//               </a>
//             </div>
//           </form>

//           <p className="text-center text-gray-600 text-sm mt-6">
//             {/* Add any additional text or content here */}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import bgImage from './video/background-video.mp4';
// import './Signup.css'; 



// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     age: '',
//     gender: '',
//     gmail: '',
//     mobile: '',
//     password: '',
//   });

//   const navigate = useNavigate(); // Hook for navigation

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Handle form submission logic here (e.g., sending formData to the server)
//     console.log(formData);

//     // After successful form submission, redirect to login page
//     navigate('/login');
//   };

//   return (
//     <div className="bg-gray-100 flex items-center justify-center min-h-screen relative">
//       {/* Video Background */}
//       <video autoPlay loop muted className="background-video">
//         <source src={bgImage} type="video/mp4" />
//       </video>

//       {/* Sign-Up Card */}
//       <div className="bg-white bg-opacity-80 shadow-md rounded-lg overflow-hidden max-w-md w-full relative z-10 mt-16 mb-16">
//         <div className="bg-green-800 pt-12 pb-8 relative">
//           <div className="w-32 h-32 bg-white rounded-full mx-auto flex items-center justify-center shadow-lg -mt-20">
//             <img src="./3.jpg" alt="Sports-Connect Logo" className="w-20 h-20 pt-5" />
//           </div>
//         </div>

//         <div className="p-8">
//           <form onSubmit={handleSubmit}>
//             {/* Form Fields */}
//             <div className="mb-4">
//               <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 placeholder="Enter your name"
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="age" className="block text-gray-700 text-sm font-bold mb-2">Age</label>
//               <input
//                 type="number"
//                 id="age"
//                 name="age"
//                 value={formData.age}
//                 onChange={handleChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 placeholder="Enter your age"
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="gender" className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
//               <select
//                 id="gender"
//                 name="gender"
//                 value={formData.gender}
//                 onChange={handleChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               >
//                 <option value="" disabled>Select your gender</option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//                 <option value="other">Other</option>
//               </select>
//             </div>

//             <div className="mb-4">
//               <label htmlFor="gmail" className="block text-gray-700 text-sm font-bold mb-2">Gmail</label>
//               <input
//                 type="email"
//                 id="gmail"
//                 name="gmail"
//                 value={formData.gmail}
//                 onChange={handleChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 placeholder="Enter your Gmail"
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="mobile" className="block text-gray-700 text-sm font-bold mb-2">Mobile No</label>
//               <input
//                 type="text"
//                 id="mobile"
//                 name="mobile"
//                 value={formData.mobile}
//                 onChange={handleChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 placeholder="Enter your mobile number"
//               />
//             </div>

//             <div className="mb-6">
//               <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
//                 placeholder="Enter your password"
//               />
//             </div>

//             <div className="flex items-center justify-between">
//               <button
//                 type="submit"
//                 className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//               >
//                 Sign Up
//               </button>
//               <Link
//                 to="/login"
//                 className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
//               >
//                 Already have an account?
//               </Link>
//             </div>
//           </form>

//           <p className="text-center text-gray-600 text-sm mt-6">
//             {/* Add any additional text or content here */}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;




import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bgImage from './video-image/background-video.mp4';
import './Signup.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    gmail: '',
    mobile: '',
    password: '',
  });

  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleRedirectToLogin = () => {
    navigate('/login'); // Redirect to login page
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) { 
        console.log('Sign-Up successful');
        navigate('/login'); // Redirect to login page
      } else {
        const data = await response.json();
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

      {/* Sign-Up Card */}
      <div className="bg-white bg-opacity-80 shadow-md rounded-lg overflow-hidden max-w-md w-full relative z-10 mt-16 mb-16">
        <div className="bg-green-800 pt-12 pb-8 relative">
          <div className="w-32 h-32 bg-white rounded-full mx-auto flex items-center justify-center shadow-lg -mt-20">
            <img src="./3.jpg" alt="Sports-Connect Logo" className="w-20 h-20 pt-5" />
          </div>
        </div>

        <div className="p-8">
          <form onSubmit={handleSubmit}>
            {/* Form Fields */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="age" className="block text-gray-700 text-sm font-bold mb-2">Age</label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your age"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="gender" className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="" disabled>Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="gmail" className="block text-gray-700 text-sm font-bold mb-2">Gmail</label>
              <input
                type="email"
                id="gmail"
                name="gmail"
                value={formData.gmail}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your Gmail"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="mobile" className="block text-gray-700 text-sm font-bold mb-2">Mobile No</label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your mobile number"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
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
                to="/login"
                onClick={handleRedirectToLogin}  // onClick triggers redirection to login
                type="submit"
                className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign Up
              </button>
              <Link
                to="/login"
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              >
                Already have an account?
              </Link>
            </div>
          </form>

          <p className="text-center text-gray-600 text-sm mt-6">
            {/* Add any additional text or content here */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
