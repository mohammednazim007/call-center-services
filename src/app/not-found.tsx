import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center md:min-h-screen py-10 bg-[#ffffff]">
      <div className="p-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Oops! The page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
