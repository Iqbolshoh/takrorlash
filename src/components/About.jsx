function About() {
    return (
        <section className="bg-gray-900 text-white py-24 px-6">

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                {/* Left Side */}
                <div className="flex justify-center">

                    <div className="w-[320px] h-[320px] rounded-3xl bg-blue-500/20 border border-blue-500 flex items-center justify-center">

                        <img src="/images/iqbolshoh.jpg" alt="" className="w-[260px] h-[260px] rounded-2xl bg-gray-800 flex items-center justify-center text-7xl font-bold text-blue-400" />

                    </div>

                </div>

                {/* Right Side */}
                <div>

                    <p className="text-blue-400 text-lg mb-3">
                        About Me
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Full-Stack Developer
                    </h2>

                    <p className="text-gray-400 leading-8 mb-6">
                        I'm a passionate developer who enjoys building modern,
                        responsive and user-friendly web applications.
                        I work with React, Laravel, Tailwind CSS and other
                        modern technologies.
                    </p>

                    <p className="text-gray-400 leading-8 mb-8">
                        My goal is to create fast, clean and beautiful digital
                        experiences for users and businesses.
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-4">

                        <span className="bg-gray-800 border border-gray-700 px-5 py-2 rounded-xl">
                            React
                        </span>

                        <span className="bg-gray-800 border border-gray-700 px-5 py-2 rounded-xl">
                            Laravel
                        </span>

                        <span className="bg-gray-800 border border-gray-700 px-5 py-2 rounded-xl">
                            Tailwind CSS
                        </span>

                        <span className="bg-gray-800 border border-gray-700 px-5 py-2 rounded-xl">
                            JavaScript
                        </span>

                        <span className="bg-gray-800 border border-gray-700 px-5 py-2 rounded-xl">
                            PHP
                        </span>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default About;