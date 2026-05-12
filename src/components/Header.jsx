import { Link } from "react-router-dom";
import { useState } from "react";
import { Home, FolderKanban, Mail, Menu, X } from "lucide-react";

function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-gray-900/90 backdrop-blur-md text-white sticky top-0 z-50 border-b border-gray-800">

            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-16 py-5">

                {/* Logo */}
                <Link to="/">
                    <h2 className="text-3xl font-bold text-blue-400 cursor-pointer">
                        Freelancer
                    </h2>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-8">

                    <Link
                        to="/"
                        className="flex items-center gap-2 text-lg font-medium hover:text-blue-400 transition duration-300"
                    >
                        <Home size={20} />
                        Home
                    </Link>

                    <Link
                        to="/projects"
                        className="flex items-center gap-2 text-lg font-medium hover:text-blue-400 transition duration-300"
                    >
                        <FolderKanban size={20} />
                        Projects
                    </Link>

                    <Link
                        to="/contact"
                        className="flex items-center gap-2 text-lg font-medium hover:text-blue-400 transition duration-300"
                    >
                        <Mail size={20} />
                        Contact
                    </Link>

                </nav>

                {/* Mobile Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden"
                >
                    {menuOpen
                        ? <X size={32} />
                        : <Menu size={32} />
                    }
                </button>

            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <nav className="md:hidden flex flex-col gap-5 px-6 pb-6 bg-gray-900 border-t border-gray-800">

                    <Link
                        to="/"
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-3 text-lg hover:text-blue-400 transition"
                    >
                        <Home size={20} />
                        Home
                    </Link>

                    <Link
                        to="/projects"
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-3 text-lg hover:text-blue-400 transition"
                    >
                        <FolderKanban size={20} />
                        Projects
                    </Link>

                    <Link
                        to="/contact"
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-3 text-lg hover:text-blue-400 transition"
                    >
                        <Mail size={20} />
                        Contact
                    </Link>

                </nav>
            )}

        </header>
    )
}

export default Header;