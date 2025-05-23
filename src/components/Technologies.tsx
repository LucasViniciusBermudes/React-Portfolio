import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion, type Variants } from "motion/react";
import { useTranslation } from "react-i18next";

const iconVariants: Variants = {
  jump: {
    y: -10,
    transition: {
      duration: 0.8,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  },
};

const Technologies = () => {
  const { t } = useTranslation();

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl pointer-events-none select-none"
      >
        {t("technologies.title")}
      </motion.h1>
      <motion.div
        animate="jump"
        transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-sky-400" />
        </motion.div>
        <motion.div
          variants={iconVariants}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandNextjs className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaAngular className="text-7xl text-red-600" />
        </motion.div>
        <motion.div
          variants={iconVariants}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTypescript className="text-7xl text-blue-600" />
        </motion.div>
        <motion.div
          variants={iconVariants}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiTailwindCssFill className="text-7xl text-teal-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
