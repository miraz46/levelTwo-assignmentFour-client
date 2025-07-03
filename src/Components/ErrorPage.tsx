const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-100 font-sans px-4">
      <img 
        src="https://i.ibb.co.com/CwrFcyS/Best-Coming-Soon-and-404-Error-Page-Templates-for-Your-Unique-Websites.jpg" 
        alt="404 Error" 
        className="w-[70%] max-w-[600px] mb-5"
      />
      <h1 className="text-6xl text-gray-800 font-bold">404</h1>
      <p className="text-lg text-gray-600 mt-2">Oops! The page you are looking for does not exist.</p>
      <a 
        href="/" 
        className="mt-4 inline-block text-blue-600 border border-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition"
      >
        Go back to Home
      </a>
    </div>
  );
};

export default ErrorPage;
