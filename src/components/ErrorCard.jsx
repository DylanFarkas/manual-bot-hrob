import { motion } from 'framer-motion';
import Bubble from '../components/Bubble';

const ErrorCard = ({ icon: Icon, title, description, bubbles = [] }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-md text-left"
  >
    <div className="flex items-center mb-5">
      <Icon className="text-red-600 w-6 h-6" />
      <span className="ml-2 text-gray-700 font-extrabold text-lg">{title}</span>
    </div>
    <p className="text-gray-700 mb-5 text-sm md:text-base">{description}</p>

    {bubbles.map((bubble, index) => (
      <Bubble key={index} from={bubble.from} text={bubble.text} />
    ))}
  </motion.div>
);

export default ErrorCard;