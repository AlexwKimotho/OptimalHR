"use client";

export default function SignIn() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bg-gradient-to-br from-blue-400 to-purple-500 w-[300px] h-[300px] rounded-full blur-3xl opacity-40 top-16 left-16 animate-pulse"></div>
        <div className="absolute bg-gradient-to-tr from-pink-500 to-yellow-400 w-[250px] h-[250px] rounded-full blur-3xl opacity-40 bottom-20 right-16 animate-pulse"></div>
      </div>

      <div className="bg-white shadow-2xl rounded-xl p-8 max-w-md w-full relative z-10">
        <h1 className="text-3xl font-extrabold text-center text-indigo-600 mb-6">Welcome Back</h1>
        <p className="text-sm text-center text-gray-600 mb-6">
          Sign in to access your dashboard
        </p>

        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Default credentials check
            if (email === "user@example.com" && password === "password123") {
              window.location.href = "/pages/dashboard"; // Redirect to the dashboard page
            } else {
              alert("Invalid credentials! Please try again.");
            }
          }}
        >
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="you@example.com"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Additional Links */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don’t have an account?{" "}
            <a
              href="#"
              className="text-indigo-500 hover:text-indigo-700 font-medium"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
