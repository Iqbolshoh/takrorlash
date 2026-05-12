function Projects() {

    const projects = [
        {
            id: 1,
            title: "Portfolio Website",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
            description:
                "Modern and responsive portfolio website built with React and Tailwind CSS.",
            technologies: ["React", "Tailwind", "Vite"],
        },
        {
            id: 2,
            title: "E-Commerce Website",
            image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
            description:
                "Online shopping platform with product pages and modern UI design.",
            technologies: ["React", "JavaScript", "CSS"],
        },

        {
            id: 3,
            title: "Admin Dashboard",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
            description:
                "Professional admin dashboard with analytics and responsive layout.",
            technologies: ["React", "Chart.js", "Tailwind"],
        },

        {
            id: 4,
            title: "Travel Website",
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            description:
                "Beautiful travel website for exploring destinations and tours.",
            technologies: ["React", "Tailwind", "Framer Motion"],
        },
    ];

    return (
        <section className="bg-gray-950 text-white min-h-screen py-20 px-6">

            <div className="max-w-7xl mx-auto">

                {/* Title */}
                <div className="text-center mb-16">

                    <p className="text-blue-400 text-lg mb-3">
                        My Work
                    </p>

                    <h1 className="text-5xl font-bold">
                        Projects
                    </h1>

                    <p className="text-gray-400 mt-5 max-w-2xl mx-auto leading-7">
                        Here are some of my recent projects built using modern
                        web technologies and clean UI design.
                    </p>

                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500 transition duration-300 hover:-translate-y-2"
                        >

                            {/* Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-52 object-cover"
                            />

                            {/* Content */}
                            <div className="p-6">

                                <h2 className="text-2xl font-bold mb-3">
                                    {project.title}
                                </h2>

                                <p className="text-gray-400 leading-7 text-sm">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mt-5">

                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="bg-gray-800 text-sm px-3 py-1 rounded-lg border border-gray-700"
                                        >
                                            {tech}
                                        </span>
                                    ))}

                                </div>

                                {/* Button */}
                                <button className="mt-6 w-full bg-blue-500 hover:bg-blue-600 transition duration-300 py-3 rounded-xl font-semibold">
                                    View Project
                                </button>

                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    )
}

export default Projects;