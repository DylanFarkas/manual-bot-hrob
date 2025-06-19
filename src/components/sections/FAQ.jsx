import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: '¿Puedo pedir una cita para otro servicio que no sea Laboratorio?',
    answer:
      'Actualmente el bot solo está habilitado para agendar y cancelar citas del servicio de Laboratorio Clínico. Para otros servicios debes comunicarte directamente con el hospital.',
  },
  {
    question: '¿Qué pasa si no espero 30 minutos antes de enviar otra solicitud?',
    answer:
      'El sistema reiniciará automáticamente el contador de espera, y tendrás que volver a esperar los 30 minutos completos. Es importante ser paciente y respetar este tiempo.',
  },
  {
    question: '¿Puedo escribir en varios mensajes?',
    answer:
      'No. Debes escribir un solo mensaje completo cuando inicias una solicitud. Si envías varios mensajes seguidos, el bot puede interpretarlo como un error y bloquearte temporalmente.',
  },
  {
    question: '¿Qué formato debe tener la fecha de nacimiento?',
    answer:
      'El formato correcto es AAAA-MM-DD. Ejemplo: 1987-04-12. No uses barras (/), guiones incorrectos o cambies el orden.',
  },
  {
    question: '¿Qué hago si el bot me dice que no encontró mis datos?',
    answer:
      'Verifica que tu número de documento y fecha de nacimiento estén bien escritos. Si los datos son correctos y aún así no apareces, es posible que no estés registrado en la base de datos del hospital.',
  },
  {
    question: '¿Puedo enviar imágenes o audios al bot?',
    answer:
      'No. El bot solo reconoce texto. No podrá responder si envías imágenes, notas de voz o documentos adjuntos.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="scroll-mt-5 px-6 md:px-12 py-20 flex flex-col items-center text-center bg-white"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-10">Preguntas frecuentes</h2>

      <div className="w-full max-w-3xl text-left">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="mb-5 border border-gray-200 rounded-xl shadow-sm bg-white"
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex justify-between items-center px-5 py-4 text-gray-800 font-medium text-left focus:outline-none hover:cursor-pointer"
            >
              {faq.question}
              <ChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-5 pb-4 text-gray-600 text-sm md:text-base text-justify"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;