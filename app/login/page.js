// app/login/page.js
"use client"; 

import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/board');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md space-y-4 rounded-md bg-white p-6 shadow-md">
        <h1 className="text-2xl font-bold text-center">Welcome to Instantask</h1>
        
        <input
          type="text"
          placeholder="Email"
          className="w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex items-center justify-around mt-4">
          <button
            className="rounded bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600"
            onClick={handleLogin}
          >
            Login
          </button>
          <button
            className="rounded bg-gray-300 px-4 py-2 font-medium text-gray-800 hover:bg-gray-400"
            onClick={() => alert('Sign Up flow not implemented')}
          >
            Sign Up
          </button>
        </div>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account? 
          <span className="text-blue-500 cursor-pointer" onClick={() => alert('Go to Sign Up')}>
            {' '}Sign up
          </span>
        </p>
      </div>
    </div>
  );
}
