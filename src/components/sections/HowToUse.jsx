import { CheckCircle, MessageSquare, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const HowToUse = () => {
  return (
    <section
      id="how-to-use"
      className="scroll-mt-20 py-10 px-6 md:px-12 flex flex-col items-center text-center bg-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-blue-800 mb-6"
      >
        ¿Cómo usar el Bot correctamente?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-base md:text-lg text-gray-700 max-w-2xl mb-10 text-justify"
      >
        Para que el bot funcione correctamente, debes enviar <strong>un solo mensaje inicial</strong> y esperar su
        respuesta. Si envías varios mensajes seguidos, el sistema lo tomará como una solicitud incompleta y te bloqueará
        durante <strong>30 minutos</strong>.
      </motion.p>

      <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl">

        {/* Correct */}

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex-1 bg-green-50 border border-green-200 rounded-2xl p-6 shadow-md"
        >
          <div className="flex items-center justify-center mb-4">
            <CheckCircle className="text-green-600 w-7 h-7" />
            <span className="ml-2 text-green-700 font-semibold text-lg">Correcto</span>
          </div>
          <p className="text-gray-700">
            Escribe un solo mensaje como: <br />
            <em>"Hola, quiero pedir una cita médica."</em>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Luego espera la respuesta del bot sin escribir nada más.
          </p>
        </motion.div>

        {/* Incorrect */}

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex-1 bg-red-50 border border-red-200 rounded-2xl p-6 shadow-md"
        >
          <div className="flex items-center justify-center mb-4">
            <MessageSquare className="text-red-600 w-7 h-7" />
            <span className="ml-2 text-red-700 font-semibold text-lg">Incorrecto</span>
          </div>
          <p className="text-gray-700">
            No envíes varios mensajes como: <br />
            <em>"Hola" → "Buenos días" → "Quiero pedir una cita"</em>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Esto hará que el bot te bloquee por 30 minutos.
          </p>
        </motion.div>
      </div>

      {/* additional warning */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-12 bg-yellow-50 border border-yellow-200 rounded-2xl p-5 shadow-md max-w-2xl w-full"
      >
        <div className="flex items-center justify-center mb-2">
          <AlertTriangle className="text-yellow-600 w-6 h-6" />
          <span className="ml-2 text-yellow-700 font-semibold text-base">Advertencia importante</span>
        </div>
        <p className="text-gray-700 text-sm md:text-base text-justify">
          El bot <strong>no responde a imágenes, audios o archivos</strong>. Asegúrate de enviar solo mensajes de texto para obtener una respuesta correcta.
        </p>
      </motion.div>

      {/* Final recomendation */}
      
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-10 text-sm md:text-base text-gray-600 max-w-xl"
      >
        📌 Consejo: Escribe tu mensaje completo y espera con paciencia. El bot responderá con instrucciones.
      </motion.p>
    </section>
  );
};

export default HowToUse;