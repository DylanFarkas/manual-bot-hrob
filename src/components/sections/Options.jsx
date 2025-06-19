import { CheckCircle, XCircle, Info } from 'lucide-react';
import { motion } from 'framer-motion';

const Options = () => {
  return (
    <section
      id="options"
      className="scroll-mt-10 py-15 px-6 md:px-12 flex flex-col items-center text-center bg-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-blue-800 mb-6"
      >
        Opciones disponibles en el Bot
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-base md:text-lg text-gray-700 max-w-2xl mb-10 text-justify"
      >
        Actualmente, el bot está enfocado en brindar atención para agendamiento y cancelación de citas, especialmente
        para el servicio de <strong>Laboratorio Clínico</strong>. Ten en cuenta las opciones que sí y no están disponibles:
      </motion.p>

      <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl">

        {/* Available */}

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex-1 bg-green-50 border border-green-200 rounded-2xl p-6 shadow-md"
        >
          <div className="flex items-center justify-center mb-4">
            <CheckCircle className="text-green-600 w-7 h-7" />
            <span className="ml-2 text-green-700 font-semibold text-lg">Disponible</span>
          </div>
          <ul className="text-left text-gray-700 list-disc list-inside text-base space-y-1">
            <li>Agendar cita de Laboratorio</li>
            <li>Cancelar cita de Laboratorio</li>
          </ul>
        </motion.div>

        {/* Not available */}

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex-1 bg-red-50 border border-red-200 rounded-2xl p-6 shadow-md"
        >
          <div className="flex items-center justify-center mb-4">
            <XCircle className="text-red-600 w-7 h-7" />
            <span className="ml-2 text-red-700 font-semibold text-lg">No disponible</span>
          </div>
          <ul className="text-left text-gray-700 list-disc list-inside text-base space-y-1">
            <li>Solicitar resultados clínicos</li>
            <li>Agendar citas médicas generales</li>
            <li>Solicitar atención de otras especialidades</li>
          </ul>
        </motion.div>
      </div>

      {/* Note */}
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 max-w-2xl w-full bg-yellow-50 border border-yellow-200 p-5 rounded-2xl shadow-md"
      >
        <div className="flex items-center justify-center mb-2">
          <Info className="text-yellow-600 w-5 h-5" />
          <span className="ml-2 text-yellow-700 font-medium text-base">
            Nota aclaratoria
          </span>
        </div>
        <p className="text-sm md:text-base text-gray-700 text-justify">
          ⚠️ Por ahora, el bot está limitado a atención básica de laboratorio. Para otros servicios, por favor
          comunícate directamente con el hospital.
        </p>
      </motion.div>
    </section>
  );
};

export default Options;