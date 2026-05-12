import { useTranslation } from "react-i18next";

function Contact() {

    const { t } = useTranslation();

    return (
        <section className="bg-gray-950 text-white min-h-screen py-20 px-6">

            <div className="max-w-6xl mx-auto">

                {/* Title */}
                <div className="text-center mb-16">

                    <p className="text-blue-400 text-lg mb-3">
                        {t("contact.smallTitle")}
                    </p>

                    <h1 className="text-5xl font-bold">
                        {t("contact.title")}
                    </h1>

                    <p className="text-gray-400 mt-5 max-w-2xl mx-auto leading-7">
                        {t("contact.description")}
                    </p>

                </div>

                {/* Contact Box */}
                <div className="grid md:grid-cols-2 gap-12">

                    {/* Left Side */}
                    <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">

                        <h2 className="text-3xl font-bold mb-6">
                            {t("contact.infoTitle")}
                        </h2>

                        <div className="space-y-6">

                            <div>
                                <p className="text-gray-400 mb-1">
                                    {t("contact.email")}
                                </p>

                                <h3 className="text-xl font-semibold">
                                    iqbolshoh@example.com
                                </h3>
                            </div>

                            <div>
                                <p className="text-gray-400 mb-1">
                                    {t("contact.phone")}
                                </p>

                                <h3 className="text-xl font-semibold">
                                    +998 90 123 45 67
                                </h3>
                            </div>

                            <div>
                                <p className="text-gray-400 mb-1">
                                    {t("contact.location")}
                                </p>

                                <h3 className="text-xl font-semibold">
                                    Samarkand, Uzbekistan
                                </h3>
                            </div>

                        </div>

                    </div>

                    {/* Right Side */}
                    <form className="bg-gray-900 border border-gray-800 rounded-3xl p-8 space-y-6">

                        <div>

                            <label className="block mb-2 text-gray-300">
                                {t("contact.form.name")}
                            </label>

                            <input
                                type="text"
                                placeholder={t("contact.form.namePlaceholder")}
                                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
                            />

                        </div>

                        <div>

                            <label className="block mb-2 text-gray-300">
                                {t("contact.form.email")}
                            </label>

                            <input
                                type="email"
                                placeholder={t("contact.form.emailPlaceholder")}
                                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
                            />

                        </div>

                        <div>

                            <label className="block mb-2 text-gray-300">
                                {t("contact.form.message")}
                            </label>

                            <textarea
                                rows="6"
                                placeholder={t("contact.form.messagePlaceholder")}
                                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-blue-500 resize-none"
                            ></textarea>

                        </div>

                        <button
                            className="w-full bg-blue-500 hover:bg-blue-600 transition duration-300 py-4 rounded-xl text-lg font-semibold"
                        >
                            {t("contact.form.button")}
                        </button>

                    </form>

                </div>

            </div>

        </section>
    )
}

export default Contact;