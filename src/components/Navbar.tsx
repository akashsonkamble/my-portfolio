"use client";

import { useScrollEffect } from "@/hooks/useScroll";
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
 * @param props The component's props.
 * @param props.children The component's children.
 * @returns The Navbar component.
 */
const Navbar: React.FC<{
    children?: React.ReactNode;
}> = ({ children }: {
    children?: React.ReactNode;
}): JSX.Element => {
        const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

        const isScrolling = useScrollEffect();

        /**
         * Handles the mobile menu icon click event.
         */
        const openMobileMenuHandler = (): void => {
            setOpenMobileMenu((prev) => !prev);
        };

        return (
            <nav
                className={`w-full top-0 z-50 py-5 ${isScrolling ? "fixed top-0 bg-white shadow-lg transition duration-500" : "relative"}`}
            >
                <div className="max-w-[1400px] mx-auto flex justify-between items-center w-[91%]">
                    <Link href={"#home"}>
                        <h1 className="text-3xl text-[#884DEE] font-bold">Akash</h1>
                    </Link>

                    <ul className={`flex gap-10 max-md:hidden ${isScrolling ? "text-black" : "text-white"}`}>
                        {navLinks.map(({ id, name, route }: { id: number, name: string, route: string }) => (
                            <Link href={route} key={id} className="hover:text-[#884DEE] transition duration-500">
                                <li>{name}</li>
                            </Link>
                        ))}
                    </ul>

                    <div className={`md:hidden text-3xl cursor-pointer ${isScrolling ? "text-[#884DEE]" : "text-white"}`} onClick={openMobileMenuHandler}>
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
