import React, { useState } from "react";

// Main App component
const App = () => {
  // State for the counter
  const [count, setCount] = useState(0);

  // Function to increment the counter
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Function to decrement the counter
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  // Function to reset the counter
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 font-sans">
      <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-md w-full">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 tracking-tight">
          Simple Counter App
        </h1>

        <p className="text-7xl font-bold text-indigo-600 mb-8 transition-transform transform hover:scale-105">
          {count}
        </p>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={increment}
            className="flex-1 px-6 py-3 bg-indigo-500 text-white font-semibold rounded-md shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-200 ease-in-out transform hover:scale-105"
          >
            Increment
          </button>
          <button
            onClick={decrement}
            className="flex-1 px-6 py-3 bg-red-500 text-white font-semibold rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-200 ease-in-out transform hover:scale-105"
          >
            Decrement
          </button>
          <button
            onClick={reset}
            className="flex-1 px-6 py-3 bg-gray-600 text-white font-semibold rounded-md shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 transition duration-200 ease-in-out transform hover:scale-105"
          >
            Reset
          </button>
        </div>

        <p className="mt-8 text-sm text-gray-500">
          Built with React and Tailwind CSS for easy deployment on Vercel.
        </p>
      </div>
    </div>
  );
};

export default App;
