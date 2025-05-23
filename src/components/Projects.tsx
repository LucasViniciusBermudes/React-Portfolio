import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  const projects = t("projects.project", {
    returnObjects: true,
  }) as Array<{
    url: string | undefined;
    title: string;
    image: string;
    description: string;
    technologies: string[];
  }>;

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl select-none"
      >
        {t("projects.title")}
      </motion.h1>
      <div>
        {projects.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 select-none"
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded"
              >
                <img
                  src={project.image}
                  width={250}
                  height={250}
                  alt={project.title}
                  className="mb-6 rounded object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:opacity-90"
                  draggable={false}
                />
              </a>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold select-none">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-100 hover:text-purple-400 hover:underline transition-colors duration-200"
                >
                  {project.title}
                </a>
              </h6>
              <p className="mb-4 text-neutral-400 select-none">
                {project.description}
              </p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800 hover:text-purple-400 transition-colors duration-200 select-none"
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

export default Projects;
