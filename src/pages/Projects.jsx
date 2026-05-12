import { Link } from "react-router-dom";
import { useState } from "react";

import projects from "../data/projects";

function Projects() {

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);

    const projectsPerPage = 8;

    const lastProjectIndex = currentPage * projectsPerPage;
    const firstProjectIndex = lastProjectIndex - projectsPerPage;

    const currentProjects = projects.slice(
        firstProjectIndex,
        lastProjectIndex
    );

    const totalPages = Math.ceil(projects.length / projectsPerPage);

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

                    {currentProjects.map((project) => (
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
                                <Link
                                    to={'/projects/' + project.id}
                                    className="
                                        mt-6
                                        inline-flex
                                        items-center
                                        justify-center
                                        w-full
                                        bg-blue-500
                                        hover:bg-blue-600
                                        py-3
                                        rounded-xl
                                        font-semibold
                                        transition
                                        duration-300
                                        hover:scale-105
                                    "
                                >
                                    View Project
                                </Link>

                            </div>

                        </div>
                    ))}

                </div>

                {/* Pagination */}
                <div className="flex items-center justify-center gap-4 mt-16 flex-wrap">

                    {[...Array(totalPages)].map((_, index) => (

                        <button
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`
                                w-12 h-12 rounded-xl font-semibold transition duration-300
                                ${currentPage === index + 1
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-900 border border-gray-700 hover:border-blue-500"}
                            `}
                        >
                            {index + 1}
                        </button>

                    ))}

                </div>

            </div>

        </section>
    )
}

export default Projects;