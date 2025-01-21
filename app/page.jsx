"use client";

export default function SignIn() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        {/* Replace the src URL with a valid, accessible video */}
        <source
          src="https://cdn.pixabay.com/video/2020/01/18/31377-386628887_large.mp4" // Example URL
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Main Content */}
      <div className="bg-white shadow-2xl rounded-xl flex max-w-5xl w-full overflow-hidden relative z-10">
        {/* Form Section */}
        <div className="w-1/2 p-12 flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold text-indigo-600 mb-8">
            Welcome Back
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Sign in to access your dashboard
          </p>

          <form
            className="space-y-8"
            onSubmit={(e) => {
              e.preventDefault();
              const email = document.getElementById("email").value;
              const password = document.getElementById("password").value;

              // Example credentials validation
              if (email === "user@example.com" && password === "password123") {
                window.location.href = "/pages/dashboard"; // Redirect to dashboard
              } else {
                alert("Invalid credentials! Please try again.");
              }
            }}
          >
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-base font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-base"
                placeholder="you@example.com"
              />
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-base font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-base"
                placeholder="Enter your password"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 text-lg"
              >
                Sign In
              </button>
            </div>
          </form>

          {/* Additional Links */}
          <div className="mt-8 text-center">
            <p className="text-base text-gray-600">
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

        {/* Image Section */}
        <div className="w-1/2 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 relative">
          <img
            src="https://media.istockphoto.com/id/175009379/photo/giant-panda-bear-eating-bamboo.jpg?s=2048x2048&w=is&k=20&c=b8ZM_jrzBHX-rXCoSx1JYFUaJjnyxYzdx6v23UaKunU="
            alt="Placeholder"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
