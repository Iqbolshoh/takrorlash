import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function NotFound() {

    const { t } = useTranslation();

    return (
        <section className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-6">

            <div className="text-center">

                {/* 404 */}
                <h1 className="text-8xl md:text-9xl font-bold text-blue-400">
                    404
                </h1>

                {/* Title */}
                <h2 className="text-3xl md:text-5xl font-bold mt-6">
                    {t("notFound.title")}
                </h2>

                {/* Description */}
                <p className="text-gray-400 mt-5 max-w-xl mx-auto leading-7">
                    {t("notFound.description")}
                </p>

                {/* Button */}
                <Link
                    to="/"
                    className="inline-block mt-10 bg-blue-500 hover:bg-blue-600 transition duration-300 px-8 py-4 rounded-2xl text-lg font-semibold"
                >
                    {t("notFound.button")}
                </Link>

            </div>

        </section>
    )
}

export default NotFound;