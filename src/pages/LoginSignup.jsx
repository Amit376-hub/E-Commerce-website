import React from 'react';

const LoginSignup = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-gradient-to-br from-[rgba(255,255,255,0.1)] to-[rgba(255,215,0,0.08)] backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-yellow-400">
        <h2 className="text-[#FFD700] text-xl font-bold tracking-widest italic drop-shadow-[0_0_6px_rgba(255,215,0,0.8)] font-[Cinzel] mb-8 text-center">
          Welcome to TrendAura
        </h2>

        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-yellow-500">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white/80 text-black placeholder-yellow-400"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-yellow-500">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 border border-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white/80 text-black placeholder-yellow-400"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-3 rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition duration-300 shadow-lg"
          >
            Login
          </button>

          <p className="text-center text-sm text-yellow-700 font-light mt-4">
            Don&apos;t have an account?{' '}
            <span className="text-yellow-500 hover:underline cursor-pointer font-medium">
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginSignup;
