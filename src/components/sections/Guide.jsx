import { motion } from 'framer-motion';
import Bubble from '../Bubble';

const Guide = () => {
  return (
    <section
      id="guide"
      className="scroll-mt-10 px-6 md:px-12 py-15 flex flex-col items-center text-center bg-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-blue-800 mb-6"
      >
        Guía paso a paso
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-base md:text-lg text-gray-700 max-w-2xl mb-10 text-justify"
      >
        Aquí te mostramos un ejemplo completo de cómo interactuar correctamente con el bot. Recuerda seguir el formato indicado
        para que tu solicitud sea exitosa.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-5 shadow-lg text-left"
      >
        <Bubble from="user" text="Buen día" />
        <Bubble
          from="bot"
          text={`Gracias por comunicarte con el Hospital Raúl Orejuela Bueno ESE.\n\nRecuerda que al hacer uso de este medio, usted deberá aceptar la Política de tratamiento de datos personales de nuestra institución, la cual podrá consultar en:\nhttps://www.hrob.gov.co\n\n¿Usted acepta la Política de tratamiento de datos personales? | [SI] | [NO]`}
        />
        <Bubble from="user" text="SI" />
        <Bubble
          from="bot"
          text={`Señor usuario: para los siguientes exámenes debe presentarse en ayuno a las 6:00am en consulta externa:\n\n- Glucosa pre y post prandial\n- Glucosa curva de tolerancia\n- Glucosa test Sullivan\n- Prolactina\n\nPara continuar, escriba el número correspondiente al tipo de solicitud:\n1 Agendamiento\n2 Cancelación\n3 Cancelar solicitud`}
        />
        <Bubble from="user" text="1" />
        <Bubble
          from="bot"
          text={`Bienvenido al sistema de agendamiento de citas del Hospital Raúl Orejuela Bueno ESE.\n\nEscriba el número correspondiente al tipo de documento:\n1 Cédula de ciudadanía\n2 Tarjeta de identidad\n3 Cédula de extranjería\n4 Registro civil\n5 Pasaporte`}
        />
        <Bubble from="user" text="1" />
        <Bubble
          from="bot"
          text="Digite el número del documento de identidad del Paciente (sin comas, espacios, guiones, puntos ni símbolos especiales)."
        />
        <Bubble from="user" text="31626433" />
        <Bubble
          from="bot"
          text="Digite la fecha de nacimiento en el formato AAAA-MM-DD. Ejemplo: 1981-04-27"
        />
        <Bubble from="user" text="1964-08-17" />
        <Bubble
          from="bot"
          text={`Escriba el número del servicio requerido:\n1 LABORATORIO CLINICO AMBULATORIO\n2 Abandonar proceso`}
        />
        <Bubble from="user" text="1" />
        <Bubble
          from="bot"
          text={`Seleccione la fecha deseada para su cita:\n1 2025-06-19\n2 2025-06-20\n3 2025-06-24\n...\n6 2025-06-27`}
        />
        <Bubble from="user" text="6" />
        <Bubble
          from="bot"
          text={`Seleccione la hora deseada:\n1 06:05:00\n2 06:10:00\n...\n6 06:30:00`}
        />
        <Bubble from="user" text="1" />
        <Bubble
          from="bot"
          text={`✅ Su cita fue agendada exitosamente.\n\n📌 Servicio: LABORATORIO CLINICO AMBULATORIO\n📍 Lugar: HOSPITAL RAUL OREJUELA BUENO E.S.E - URGENCIAS\n👩‍⚕️ Profesional: AYALA RICO ADRIANA LORENA\n📅 Fecha: 2025-06-27\n⏰ Hora: 06:05:00\n\nGracias por usar el sistema.`}
        />
        <Bubble
          from="bot"
          text="⏱️ Recuerda que debes esperar 30 minutos para hacer otra solicitud por este medio."
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-10 mb-10 bg-blue-50 border border-blue-200 rounded-2xl p-4 shadow-sm max-w-xl w-full text-gray-700 text-sm md:text-base"
      >
        📌 Consejo: Escribe siempre tu mensaje inicial completo y sigue los pasos tal como se te indican. Evita enviar
        mensajes sueltos o desordenados para no ser bloqueado.
      </motion.div>
    </section>
  );
};

export default Guide;