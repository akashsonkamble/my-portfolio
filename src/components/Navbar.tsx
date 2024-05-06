"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


const navLinks = [
    {
        id: 1,
        name: "Home",
        route: "#home"
    },
    {
        id: 2,
        name: "Projects",
        route: "#projects"
    },
    {
        id: 3,
        name: "Skills",
        route: "#skills"
    },
    {
        id: 4,
        name: "Contact",
        route: "#contact"
    }

]

/**
 * Renders the Navbar component.
 *
 * @param {object} props The component's props.
 * @param {React.ReactNode} props.children The component's children.
 * @returns {JSX.Element} The Navbar component.
 */
const Navbar: React.FC<{
    children?: React.ReactNode;
}> = ({ children }: { children?: React.ReactNode }): JSX.Element => {
    const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

    /**
     * Handles the mobile menu icon click event.
     */
    const openMobileMenuHandler = (): void => {
        setOpenMobileMenu((prev) => !prev);
    };

    return (
        <nav
            className="w-full top-0 z-50 py-6 relative"
        >
            <div className="max-w-[1400px] mx-auto flex justify-between items-center w-[91%]">
                <Link href={"#home"}>
                    <h1 className="text-3xl text-[#884DEE] font-bold">Akash S.</h1>
                </Link>

                <ul className="flex gap-10 max-md:hidden text-black">
                    {navLinks.map(({ id, name, route }: { id: number, name: string, route: string }) => (
                        <Link href={route} key={id} className="hover:text-[#884DEE] transition duration-500">
                            <li>{name}</li>
                        </Link>
                    ))}
                </ul>

                <div className="md:hidden text-3xl cursor-pointer text-black" onClick={openMobileMenuHandler}>
                    {openMobileMenu ? <FaTimes /> : <FaBars />}
                </div>

                {openMobileMenu && (
                    <ul className="md:hidden bg-[#884DEE] absolute top-14 right-5 px-4 py-6 text-center rounded-md flex flex-col gap-3 shadow-md">
                        {navLinks.map(({ id, name, route }: { id: number, name: string, route: string }) => (
                            <Link href={route} key={id}>
                                <li>{name}</li>
                            </Link>
                        ))}
                    </ul>
                )}
                {children}
            </div>
        </nav>
    );
};

export default Navbar;
