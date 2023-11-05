import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';


function Navbar() {
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
                            <Link href="../components/second/Second">About</Link>
                        </motion.li>
                        <motion.li whileHover={{ color: 'red' }}>
                            <Link href="/">Services</Link>
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