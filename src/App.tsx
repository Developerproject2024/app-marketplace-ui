function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="text-4xl font-bold text-gray-900 mb-8">Welcome to My App</header>

      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition">Click Me</button>

      <div className="mt-10 bg-white shadow-lg rounded-lg p-6 max-w-sm w-full">
        <img className="rounded-full w-24 h-24 mx-auto" src="https://via.placeholder.com/150" alt="Profile" />
        <div className="text-center mt-4">
          <h2 className="text-xl font-semibold text-gray-800">John Doe</h2>
          <p className="text-gray-600">Software Engineer</p>
        </div>
        <div className="mt-4 text-center">
          <a href="#" className="text-blue-500 hover:underline">
            View Profile
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
