import React from 'react'

const Register = () => {

  return (
        <form className='flex items-center justify-center  h-screen' action="">
          <div className='flex flex-col gap-3  w-[40%]'>
              <label className='flex  rounded-full border-b-4 border-orange-400 bg-white py-1 px-3' htmlFor="Firstname"><span className='w-[25%]'>First Name:</span><input className='w-[100%] outline-none border-transparent' type="text" name='first name' /></label>
              <label className='flex rounded-full border-b-4 border-orange-400 bg-white py-1 px-3' htmlFor="Lastname"><span className='w-[25%]'>Last Name:</span><input type="text" className='w-[100%] outline-none border-transparent' name='last name'/></label>
              <label className='flex rounded-full border-b-4 border-orange-400 bg-white py-1 px-3' htmlFor="Username"><span className='w-[25%]'>Username:</span><input type="text" className='w-[100%] outline-none border-transparent' name='username' /></label>
              <label className='flex rounded-full border-b-4 border-orange-400 bg-white py-1 px-3' htmlFor="Email"><span className='w-[25%]'>Email:</span><input type="email" className='w-[100%] outline-none border-transparent' name='email' /></label>
              <label className='flex rounded-full border-b-4 border-orange-400 bg-white py-1 px-3' htmlFor="Password"><span className='w-[25%]'>Password:</span><input type="password" className='w-[100%] outline-none border-transparent'  name='password'/></label>
              <button className='btn bg-orange-400'>Register</button>
          </div>
        </form>
  )
}

export default Register
//   <div className='h-screen w-full min-w-[375px] flex justify-center items-center bg-background-image'>
//     <div>
//   <label className="input input-bordered flex items-center gap-2">
// Name
// <input type="text" className="grow" placeholder="Daisy" />
// </label>
// <label className="input input-bordered flex items-center gap-2">
// <svg
//   xmlns="http://www.w3.org/2000/svg"
//   viewBox="0 0 16 16"
//   fill="currentColor"
//   className="h-4 w-4 opacity-70">
//   <path
//     d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
//   <path
//     d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
// </svg>
// <input type="text" className="grow" placeholder="Email" />
// </label>
// <label className="input input-bordered flex items-center gap-2">
// <svg
//   xmlns="http://www.w3.org/2000/svg"
//   viewBox="0 0 16 16"
//   fill="currentColor"
//   className="h-4 w-4 opacity-70">
//   <path
//     d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
// </svg>
// <input type="text" className="grow" placeholder="Username" />
// </label>
// <label className="input input-bordered flex items-center gap-2">
// <svg
//   xmlns="http://www.w3.org/2000/svg"
//   viewBox="0 0 16 16"
//   fill="currentColor"
//   className="h-4 w-4 opacity-70">
//   <path
//     fillRule="evenodd"
//     d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
//     clipRule="evenodd" />
// </svg>
// <input title='password' type="password" className="grow" value="password" />
// </label>
//     </div>
// </div>