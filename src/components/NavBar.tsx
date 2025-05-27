import { useState, useRef, useEffect } from "react";
import logo from "../assets/LucasViniciusLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GoGlobe } from "react-icons/go";
import { useTranslation } from "react-i18next";
import { GiBrazilFlag } from "react-icons/gi";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdDownload } from "react-icons/io";

const NavBar = () => {
  const { i18n } = useTranslation();
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { t } = useTranslation();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowLangDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setShowLangDropdown(false);
  };

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img
          className="mx-2 w-10 pointer-events-none select-none"
          src={logo}
          alt="logo"
        />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl relative">
        <a
          href="https://linkedin.com/in/lucas-vinicius-bermudes"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-200 hover:scale-110 hover:text-blue-500"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/LucasViniciusBermudes"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-200 hover:scale-110 hover:text-gray-300"
        >
          <FaGithub />
        </a>
        <div className="relative group">
          <a
            href="/assets/CV_LucasVinicius.pdf"
            download
            rel="noopener noreferrer"
            className="transition-transform duration-200 hover:scale-110 hover:text-blue-500"
          >
            <IoMdDownload />
          </a>
          <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-neutral-800 px-2 py-1 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {t("contacts.cv")}
          </span>
        </div>
        <div ref={dropdownRef} className="relative ml-4">
          <GoGlobe
            className="transition-transform duration-200 hover:scale-110 hover:text-green-500 cursor-pointer"
            onClick={() => setShowLangDropdown((prev) => !prev)}
          />
          <AnimatePresence>
            {showLangDropdown && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-30 rounded border border-gray-400 bg-white shadow-lg z-50"
              >
                <button
                  onClick={() => changeLanguage("pt")}
                  className="flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-gray-100 cursor-pointer"
                >
                  <GiBrazilFlag />
                  PT
                </button>
                <button
                  onClick={() => changeLanguage("en")}
                  className="flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-gray-100 cursor-pointer"
                >
                  <LiaFlagUsaSolid />
                  ENG
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
