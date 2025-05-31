import profilePic from "../assets/LucasViniciusProfile.png";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const container = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  const { t } = useTranslation();

  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(true);
    }, 1200 + 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap lg:items-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl pointer-events-none select-none"
            >
              {t("hero.name")}
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent pointer-events-none select-none"
            >
              {t("hero.jobTitle")}
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl PY-6 font-light tracking-tighter pointer-events-none select-none pb-5 lg:pb-0"
            >
              {t("hero.description")}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 flex justify-center pointer-events-none select-none">
          <div className="relative inline-block w-fit h-fit">
            <AnimatePresence>
              {showSpinner && (
                <motion.div
                  className="absolute top-1/2 left-1/2 rounded-full border-8 border-transparent border-t-purple-700 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    width: "calc(100% + 40px)",
                    height: "calc(100% + 40px)",
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1, rotate: 360 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    opacity: { duration: 0.3 },
                    scale: { duration: 0.3 },
                    rotate: { duration: 1.5, repeat: Infinity, ease: "linear" },
                  }}
                />
              )}
            </AnimatePresence>
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Lucas Vinicius"
              className="relative rounded-full object-cover"
              style={{ display: "block" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
