"use client";

import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-blue-500 text-white py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Link
            href="/"
            className="text-2xl font-bold text-white hover:text-blue-400"
          >
            SERVICE <br /> ZONE BD
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-white text-sm mt-4 sm:mt-0"
        >
          © 2021 Service-Zone-BD —
          <Link href="#" className="text-white hover:text-blue-400">
            @Shakil
          </Link>
        </motion.p>

        <motion.div
          className="flex space-x-4 mt-4 sm:mt-0"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Link
            href="#"
            className="text-white hover:text-blue-500 transition-transform transform hover:scale-110"
          >
            <FacebookOutlined
              style={{ fontSize: "20px" }}
              onMouseEnter={() => {}}
              onMouseLeave={() => {}}
            />
          </Link>
          <Link
            href="#"
            className="text-white hover:text-pink-500 transition-transform transform hover:scale-110"
          >
            <InstagramOutlined
              style={{ fontSize: "20px" }}
              onMouseEnter={() => {}}
              onMouseLeave={() => {}}
            />
          </Link>
          <Link
            href="#"
            className="text-white hover:text-blue-400 transition-transform transform hover:scale-110"
          >
            <TwitterOutlined
              style={{ fontSize: "20px" }}
              onMouseEnter={() => {}}
              onMouseLeave={() => {}}
            />
          </Link>
          <Link
            href="#"
            className="text-white hover:text-blue-700 transition-transform transform hover:scale-110"
          >
            <LinkedinOutlined
              style={{ fontSize: "20px" }}
              onMouseEnter={() => {}}
              onMouseLeave={() => {}}
            />
          </Link>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;