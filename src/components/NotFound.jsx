import { Link } from "react-router-dom";

function NotFound() {
    return (
        <section className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-6">

            <div className="text-center">

                {/* 404 */}
                <h1 className="text-8xl md:text-9xl font-bold text-blue-400">
                    404
                </h1>

                {/* Title */}
                <h2 className="text-3xl md:text-5xl font-bold mt-6">
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="text-gray-400 mt-5 max-w-xl mx-auto leading-7">
                    Sorry, the page you are looking for does not exist
                    or has been moved.
                </p>

                {/* Button */}
                <Link
                    to="/"
                    className="inline-block mt-10 bg-blue-500 hover:bg-blue-600 transition duration-300 px-8 py-4 rounded-2xl text-lg font-semibold"
                >
                    Go Back Home
                </Link>

            </div>

        </section>
    )
}

export default NotFound;