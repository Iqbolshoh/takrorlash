import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Hero() {

    const { t } = useTranslation();

    return (
        <section className="min-h-[90vh] bg-gray-950 text-white flex items-center justify-center px-6">

            <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">

                {/* Left Side */}
                <div>

                    <p className="text-blue-400 text-lg mb-3">
                        {t("hero.smallTitle")}
                    </p>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                        {t("hero.name")}
                    </h1>

                    <h2 className="text-2xl md:text-3xl text-gray-300 mt-4">
                        {t("hero.job")}
                    </h2>

                    <p className="text-gray-400 mt-6 leading-7">
                        {t("hero.description")}
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-4 mt-8 flex-wrap">

                        <Link
                            to="/projects"
                            className="bg-blue-500 hover:bg-blue-600 transition duration-300 px-6 py-3 rounded-xl font-semibold"
                        >
                            {t("hero.projectsButton")}
                        </Link>

                        <Link
                            to="/contact"
                            className="border border-gray-600 hover:border-blue-400 hover:text-blue-400 transition duration-300 px-6 py-3 rounded-xl font-semibold"
                        >
                            {t("hero.contactButton")}
                        </Link>

                    </div>

                </div>

                {/* Right Side */}
                <div className="flex justify-center">

                    <div className="w-[320px] h-[320px] rounded-full bg-blue-500/20 border border-blue-500 flex items-center justify-center">

                        <img
                            src="/images/image.png"
                            alt=""
                            className="w-[260px] h-[260px] rounded-full bg-gray-800"
                        />

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Hero;