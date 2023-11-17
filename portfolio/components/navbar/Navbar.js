import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { NextPage } from 'next';


    const  Navbar = () => {
        const handleScroll = (e) => {
            // first prevent the default behavior
            e.preventDefault();
            // get the href and remove everything before the hash (#)
            const href = e.currentTarget.href;
            const targetId = href.replace(/.*\#/, "");
            // get the element by id and use scrollIntoView
            const elem = document.getElementById(targetId);
            elem?.scrollIntoView({
              behavior: "smooth",
            });
        };

    return (
        <div>
            <nav className="  py-5">
                <div className="container mx-auto flex items-center justify-between">
                    {/* Brand Name (on the left) */}
                    <div className="text-red-500 text-3xl font-semibold">Puneet</div>

                    {/* Navigation Buttons (on the right with gap) */}
                    <ul className="flex text-white text-xl space-x-6">
                        <motion.li whileHover={{ color: 'red' }}>
                            <Link href="/">Home</Link>
                        </motion.li>
                        <motion.li whileHover={{ color: 'red' }}>
                            <Link href="#about" onClick={handleScroll}>About</Link>
                        </motion.li>
                        <motion.li whileHover={{ color: 'red' }}>
                            <Link href="#services" onClick={handleScroll}>Services</Link>
                        </motion.li>
                        <motion.li whileHover={{ color: 'red' }}>
                            <Link href="/">Contact</Link>
                        </motion.li>
                    </ul>
                </div>
            </nav>


        </div>
    )
}

export default Navbar