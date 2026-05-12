import { useTranslation } from "react-i18next";

function About() {

    const { t } = useTranslation();

    return (
        <section className="bg-gray-900 text-white py-24 px-6">

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                {/* Left Side */}
                <div className="flex justify-center">

                    <div className="w-[320px] h-[320px] rounded-3xl bg-blue-500/20 border border-blue-500 flex items-center justify-center">

                        <img
                            src="/images/iqbolshoh.jpg"
                            alt=""
                            className="w-[260px] h-[260px] rounded-2xl bg-gray-800"
                        />

                    </div>

                </div>

                {/* Right Side */}
                <div>

                    <p className="text-blue-400 text-lg mb-3">
                        {t("about.smallTitle")}
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        {t("about.title")}
                    </h2>

                    <p className="text-gray-400 leading-8 mb-6">
                        {t("about.description1")}
                    </p>

                    <p className="text-gray-400 leading-8 mb-8">
                        {t("about.description2")}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-4">

                        <span className="bg-gray-800 border border-gray-700 px-5 py-2 rounded-xl">
                            {t("about.skills.react")}
                        </span>

                        <span className="bg-gray-800 border border-gray-700 px-5 py-2 rounded-xl">
                            {t("about.skills.laravel")}
                        </span>

                        <span className="bg-gray-800 border border-gray-700 px-5 py-2 rounded-xl">
                            {t("about.skills.tailwind")}
                        </span>

                        <span className="bg-gray-800 border border-gray-700 px-5 py-2 rounded-xl">
                            {t("about.skills.javascript")}
                        </span>

                        <span className="bg-gray-800 border border-gray-700 px-5 py-2 rounded-xl">
                            {t("about.skills.php")}
                        </span>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default About;