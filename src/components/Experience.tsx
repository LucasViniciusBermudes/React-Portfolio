import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

type Experience = {
  year: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
};

const Experience = () => {
  const { t } = useTranslation();
  const experiences = t("experiences.experience", {
    returnObjects: true,
  }) as Experience[];

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl pointer-events-none select-none"
      >
        {t("experiences.title")}
      </motion.h1>
      <div>
        {experiences.map((experiences, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 select-none"
            >
              <p className="mb-2 text-sm text-neutral-400">
                {experiences.year}
              </p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4 select-none"
            >
              <h6 className="mb-2 font-semibold">
                {experiences.role} -{" "}
                <span className="text-sm text-purple-100">
                  {experiences.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{experiences.description}</p>
              {experiences.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800 hover:text-purple-400 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
