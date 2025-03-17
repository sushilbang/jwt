import React from "react";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Welcome to CodeBuddy!</h1>
        {user ? (
          <div>
            <p className="text-lg text-gray-700">Hello, <span className="font-semibold">{user.email}</span>! 🎉</p>
            <button
              onClick={logout}
              className="mt-4 px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-300"
            >
              Logout
            </button>
          </div>
        ) : (
          <p className="text-gray-600 text-lg">Please log in to access this page.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
