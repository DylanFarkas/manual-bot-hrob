import { AlertTriangle, CalendarX, MessageCircleWarning, SearchX } from 'lucide-react';
import { motion } from 'framer-motion';
import Bubble from '../Bubble';

const Errors = () => {
    return (
        <section
            id="errors"
            className="scroll-mt-15 px-6 md:px-12 py-5 flex flex-col items-center text-center bg-white"
        >
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
                className="text-base md:text-lg text-gray-700 max-w-2xl mb-10 text-justify"
            >
                A continuación te mostramos los errores más comunes que debes evitar al usar el bot. Estos pueden provocar fallas en el proceso, bloqueos temporales o que tu cita no sea registrada correctamente.
            </motion.p>

            <div className="flex flex-col gap-6 w-full max-w-4xl">
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-100 border border-gray-300 rounded-2xl p-6 shadow-md text-left"
                >
                    <div className="flex items-center mb-3">
                        <AlertTriangle className="text-gray-700 w-6 h-6" />
                        <span className="ml-2 text-gray-800 font-semibold text-lg">
                            No esperar los 30 minutos reinicia el tiempo
                        </span>
                    </div>
                    <p className="text-gray-700 mb-5 text-sm md:text-base text-justify">
                        Una vez finalices tu solicitud, debes esperar <strong>30 minutos</strong> antes de iniciar otra. Si escribes antes de tiempo, el contador se reinicia y deberás esperar nuevamente. <strong>Para que no pase esto, solo envía un solo mensaje.</strong>
                    </p>

                    <Bubble from="bot" text={`Esperamos haber resuelto su solicitud de manera satisfactoria.\n\n⏱️ El tiempo de espera para realizar una nueva solicitud a través de este medio es de: 30 minutos.\n\nAsegúrate de esperar el tiempo indicado para iniciar otra solicitud 😉, de lo contrario, se reiniciará el tiempo de espera. 😴\n\n¡Hasta pronto!`} />
                </motion.div>

                {/* Error: Multiple consecutive messages */}

                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-100 border border-gray-300 rounded-2xl p-6 shadow-md text-left"
                >
                    <div className="flex items-center mb-3">
                        <MessageCircleWarning className="text-gray-700 w-6 h-6" />
                        <span className="ml-2 text-gray-800 font-semibold text-lg">Evita enviar varios mensajes seguidos</span>
                    </div>
                    <p className="text-gray-700 mb-2 text-sm md:text-base">
                        El sistema detecta como error cuando se escriben varios mensajes en lugar de uno completo.
                    </p>

                    <Bubble from="user" text="Hola" />
                    <Bubble from="user" text="Quiero pedir una cita" />
                    <Bubble from="bot" text="⚠️ Se detectaron múltiples mensajes. Debe esperar 30 minutos para hacer una nueva solicitud." />
                </motion.div>

                {/* Error: Invalid date format */}

                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-100 border border-gray-300 rounded-2xl p-6 shadow-md text-left"
                >
                    <div className="flex items-center mb-3">
                        <CalendarX className="text-gray-700 w-6 h-6" />
                        <span className="ml-2 text-gray-800 font-semibold text-lg">Formato de fecha incorrecto</span>
                    </div>
                    <p className="text-gray-700 mb-2 text-sm md:text-base">
                        Asegúrate de escribir la fecha de nacimiento así: <strong>AAAA-MM-DD</strong>. No uses diagonales ni otro orden.
                    </p>

                    <Bubble from="user" text="12-04-1987" />
                    <Bubble from="bot" text={"❌ La información proporcionada no es correcta.\n\nDigite la fecha en el formato AAAA-MM-DD. Ejemplo: 1981-04-27"} />
                </motion.div>

                {/* Error: Document number contains symbols or spaces */}

                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-100 border border-gray-300 rounded-2xl p-6 shadow-md text-left"
                >
                    <div className="flex items-center mb-3">
                        <AlertTriangle className="text-gray-700 w-6 h-6" />
                        <span className="ml-2 text-gray-800 font-semibold text-lg">Documento mal ingresado</span>
                    </div>
                    <p className="text-gray-700 mb-2 text-sm md:text-base">
                        El número de documento <strong>no debe tener puntos, comas, guiones, espacios ni símbolos</strong>.
                    </p>

                    <Bubble from="user" text="11.120.876-51" />
                    <Bubble from="bot" text="⚠️ El documento debe escribirse sin símbolos ni espacios. Intenta nuevamente." />
                </motion.div>

                {/* Error: Valid data but user not found in the system */}

                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-100 border border-gray-300 rounded-2xl p-6 shadow-md text-left"
                >
                    <div className="flex items-center mb-3">
                        <SearchX className="text-gray-700 w-6 h-6" />
                        <span className="ml-2 text-gray-800 font-semibold text-lg">Datos no encontrados</span>
                    </div>
                    <p className="text-gray-700 mb-2 text-sm md:text-base">
                        Si los datos son correctos pero no estás afiliado al hospital, el sistema no podrá agendar tu cita.
                    </p>

                    <Bubble from="user" text="2003-09-25" />
                    <Bubble from="bot" text="🤔 No pudimos encontrar información con los datos ingresados. Verifica la fecha o el número de documento e intenta de nuevo." />
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-100 border border-gray-300 rounded-2xl p-6 shadow-md text-left"
                >
                    <div className="flex items-center mb-3">
                        <AlertTriangle className="text-gray-700 w-6 h-6" />
                        <span className="ml-2 text-gray-800 font-semibold text-lg">No envíes audios ni imágenes</span>
                    </div>
                    <p className="text-gray-700 mb-2 text-sm md:text-base">
                        El bot <strong>solo reconoce texto</strong>. No responderá si envías notas de voz, fotos, documentos u otros archivos.
                    </p>
                    
                    <Bubble from="user" text="[envió una imagen 📷]" />
                    <Bubble from="bot" text="⚠️ No puedo procesar imágenes o audios. Por favor escribe tu solicitud en texto." />
                </motion.div>
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