import { Link, useParams } from "react-router-dom"
import projects from "../data/projects"

function ProjectDetails() {

    const { id } = useParams()

    const project = projects.find(
        project => project.id === parseInt(id)
    )

    // Project topilmasa
    if (!project) {
        return (
            <section className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-6">

                <div className="text-center">

                    <h1 className="text-5xl font-bold text-red-500">
                        Project Not Found
                    </h1>

                    <p className="text-gray-400 mt-5">
                        The project you are looking for does not exist.
                    </p>

                    <Link
                        to="/projects"
                        className="inline-block mt-8 bg-blue-500 hover:bg-blue-600 transition duration-300 px-6 py-3 rounded-xl font-semibold"
                    >
                        Back To Projects
                    </Link>

                </div>

            </section>
        )
    }

    return (
        <section className="bg-gray-950 text-white min-h-screen py-20 px-6">

            <div className="max-w-6xl mx-auto">

                {/* Image */}
                <div className="overflow-hidden rounded-3xl border border-gray-800">

                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-[500px] object-cover"
                    />

                </div>

                {/* Content */}
                <div className="mt-12">

                    <p className="text-blue-400 text-lg mb-3">
                        Project Details
                    </p>

                    <h1 className="text-5xl font-bold">
                        {project.title}
                    </h1>

                    <p className="text-gray-400 leading-8 mt-6 text-lg">
                        {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-3 mt-8">

                        {project.technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="bg-gray-900 border border-gray-700 px-5 py-2 rounded-xl"
                            >
                                {tech}
                            </span>
                        ))}

                    </div>

                    {/* Buttons */}
                    <div className="flex gap-5 mt-10 flex-wrap">

                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-500 hover:bg-blue-600 transition duration-300 px-8 py-4 rounded-2xl font-semibold"
                        >
                            Live Demo
                        </a>

                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-gray-700 hover:border-blue-400 hover:text-blue-400 transition duration-300 px-8 py-4 rounded-2xl font-semibold"
                        >
                            GitHub
                        </a>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default ProjectDetails