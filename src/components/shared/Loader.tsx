import { motion } from 'framer-motion'
import { TbLoader2 } from 'react-icons/tb';

const Loader = () => {
  return (
    <motion.div
      animate={{ rotate: "360deg" }}
      transition={{ duration: 0.8, repeat: Infinity }}
      className='w-fit'
    >
      <TbLoader2 className="text-5xl text-green-500" />
    </motion.div>
  );
};

export default Loader;
