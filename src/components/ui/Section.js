"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

const Section = ({ children, className, id, delay = 0 }) => {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
            className={clsx("min-h-screen w-full flex flex-col justify-center px-6 md:px-20 py-20", className)}
        >
            {children}
        </motion.section>
    );
};

export default Section;
