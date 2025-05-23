import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl pointer-events-none select-none"
      >
        {t("contacts.contact")}
      </motion.h1>
      <div className="flex flex-col items-center gap-4 tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="pointer-events-none select-none"
        >
          {t("contacts.location")}
        </motion.p>

        <motion.a
          href="/assets/cv/CV_LucasVinicius.pdf"
          download
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="text-purple-200 hover:text-purple-400 transition-colors duration-300 hover:underline"
        >
          {t("contacts.cv")}
        </motion.a>

        <motion.a
          href={`mailto:lucasviniciusbermudes@gmail.com?subject=Contato pelo portfólio&body=Olá Lucas,%0D%0A%0D%0AEstou entrando em contato após visitar seu portfólio.%0D%0A%0D%0AObrigado!`}
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="text-purple-200 hover:text-purple-400 transition-colors duration-300 hover:underline"
        >
          {t("contacts.email")}
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
