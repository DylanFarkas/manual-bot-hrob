import { AlertTriangle, CalendarX, MessageCircleWarning, SearchX } from 'lucide-react';
import { motion } from 'framer-motion';
import ErrorCard from '../ErrorCard';

const Errors = () => {
  return (
    <section id="errors" className="scroll-mt-15 px-6 md:px-12 py-5 flex flex-col items-center text-center bg-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-blue-800 mb-10"
      >
        Errores comunes a evitar
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-base md:text-lg text-gray-700 max-w-2xl mb-15 text-justify"
      >
        A continuación te mostramos los errores más comunes que debes evitar al usar el bot. Estos pueden provocar fallas en el proceso, bloqueos temporales o que tu cita no sea registrada correctamente.
      </motion.p>

      <div className="flex flex-col gap-6 w-full max-w-4xl">
        <ErrorCard
          icon={AlertTriangle}
          title="No esperar los 30 minutos reinicia el tiempo"
          description={
            <>
              Una vez finalices tu solicitud, debes esperar <strong>30 minutos</strong> antes de iniciar otra. Si escribes antes de tiempo, el contador se reinicia y deberás esperar nuevamente. <strong>Para que no pase esto, solo envía un solo mensaje.</strong>
            </>
          }
          bubbles={[
            {
              from: "bot",
              text: `Esperamos haber resuelto su solicitud de manera satisfactoria.\n\n⏱️ El tiempo de espera para realizar una nueva solicitud a través de este medio es de: 30 minutos.\n\nAsegúrate de esperar el tiempo indicado para iniciar otra solicitud 😉, de lo contrario, se reiniciará el tiempo de espera. 😴\n\n¡Hasta pronto!`,
            },
          ]}
        />

        <ErrorCard
          icon={MessageCircleWarning}
          title="Evita enviar varios mensajes seguidos"
          description="El sistema detecta como error cuando se escriben varios mensajes en lugar de uno completo."
          bubbles={[
            { from: "user", text: "Hola" },
            { from: "user", text: "Quiero pedir una cita" },
            { from: "bot", text: "⚠️ Se detectaron múltiples mensajes. Debe esperar 30 minutos para hacer una nueva solicitud." },
          ]}
        />

        <ErrorCard
          icon={CalendarX}
          title="Formato de fecha incorrecto"
          description={<>Asegúrate de escribir la fecha de nacimiento así: <strong>AAAA-MM-DD</strong>. No uses diagonales ni otro orden.</>}
          bubbles={[
            { from: "user", text: "12-04-1987" },
            { from: "bot", text: "❌ La información proporcionada no es correcta.\n\nDigite la fecha en el formato AAAA-MM-DD. Ejemplo: 1981-04-27" },
          ]}
        />

        <ErrorCard
          icon={AlertTriangle}
          title="Documento mal ingresado"
          description="El número de documento no debe tener puntos, comas, guiones, espacios ni símbolos."
          bubbles={[
            { from: "user", text: "11.120.876-51" },
            { from: "bot", text: "⚠️ El documento debe escribirse sin símbolos ni espacios. Intenta nuevamente." },
          ]}
        />

        <ErrorCard
          icon={SearchX}
          title="Datos no encontrados"
          description="Si los datos son correctos pero no estás afiliado al hospital, el sistema no podrá agendar tu cita."
          bubbles={[
            { from: "user", text: "2003-09-25" },
            { from: "bot", text: "🤔 No pudimos encontrar información con los datos ingresados. Verifica la fecha o el número de documento e intenta de nuevo." },
          ]}
        />

        <ErrorCard
          icon={AlertTriangle}
          title="No envíes audios ni imágenes"
          description="El bot solo reconoce texto. No responderá si envías notas de voz, fotos, documentos u otros archivos."
          bubbles={[
            { from: "user", text: "[envió una imagen 📷]" },
            { from: "bot", text: "⚠️ No puedo procesar imágenes o audios. Por favor escribe tu solicitud en texto." },
          ]}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-10 bg-blue-50 border border-blue-200 rounded-2xl p-4 shadow-sm max-w-xl w-full text-gray-700 text-sm md:text-base"
      >
        📌 Consejo: Lee con atención las instrucciones del bot. Escribe un solo mensaje completo, usa el formato de fecha correcto (<strong>AAAA-MM-DD</strong>) y asegúrate de que tu número de documento no contenga símbolos ni espacios.
      </motion.div>
    </section>
  );
};

export default Errors;