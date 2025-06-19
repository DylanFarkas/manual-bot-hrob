import { Bot, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section
      id="home"
      className="relative pt-24 pb-28 px-6 md:px-10 flex flex-col justify-start items-center text-center bg-gradient-to-b from-blue-50 to-white overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[url('/decoracion.svg')] bg-no-repeat bg-top bg-contain opacity-5 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl"
      >
        <motion.div
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex justify-center mb-6"
        >
          <Bot className="w-16 h-16 text-blue-600" />
        </motion.div>

        <p className="text-sm md:text-base text-blue-600 font-semibold uppercase tracking-wide mb-1">
          Manual de usuario
        </p>

        <p className="italic text-blue-500 mb-4">
          Tu salud, a un mensaje de distancia.
        </p>

        <h1 className="text-3xl md:text-5xl mb-6 font-bold text-blue-900 leading-tight">
          ¿Qué es el{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Bot de WhatsApp
          </span>
          ?
        </h1>

        <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed text-justify">
          Es una herramienta automatizada que permite a los pacientes del{' '}
          <strong>Hospital Raúl Orejuela Bueno</strong> agendar y cancelar citas médicas fácilmente a través de{' '}
          <strong>WhatsApp</strong>, sin necesidad de llamadas ni filas.
        </p>

        <a
          href="https://wa.me/573019285911"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-sm md:text-base transition font-medium shadow-md hover:scale-105"
        >
          <MessageCircle className="w-5 h-5" />
          Iniciar chat en WhatsApp
        </a>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-10 text-blue-400 text-4xl"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;