import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
const [loginErro,setLoginErro] = useState('')

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "ram" && password === "sanjay") {
        console.log("login success")
    }else{
        setLoginErro("Invald username or password");
    }
    // Add your authentication logic here
    console.log('Logging in with:', { username, password });
  };

  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600 text-sm font-medium mb-2">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your username"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <label htmlFor="remember" className="flex items-center">
              <input type="checkbox" id="remember" name="remember" className="text-blue-500" />
              <span className="ml-2 text-gray-600">Remember me</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
