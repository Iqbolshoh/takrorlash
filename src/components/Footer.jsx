import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {

    const { t } = useTranslation();

    return (
        <footer className="bg-gray-950 border-t border-gray-800 text-white px-6 md:px-16 py-10">

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

                {/* Left */}
                <div>

                    <Link to="/">
                        <h2 className="text-3xl font-bold text-blue-400">
                            {t("footer.logo")}
                        </h2>
                    </Link>

                    <p className="text-gray-400 mt-3 max-w-[350px] leading-7">
                        {t("footer.description")}
                    </p>

                </div>

                {/* Right */}
                <nav className="flex gap-6 text-lg">

                    <Link
                        to="/"
                        className="hover:text-blue-400 transition duration-300"
                    >
                        {t("footer.home")}
                    </Link>

                    <Link
                        to="/projects"
                        className="hover:text-blue-400 transition duration-300"
                    >
                        {t("footer.projects")}
                    </Link>

                    <Link
                        to="/contact"
                        className="hover:text-blue-400 transition duration-300"
                    >
                        {t("footer.contact")}
                    </Link>

                </nav>

            </div>

            {/* Bottom */}
            <div className="mt-10 pt-6 border-t border-gray-800 text-center text-gray-500">

                <p>
                    {t("footer.copyright")}
                </p>

            </div>

        </footer>
    )
}

export default Footer;