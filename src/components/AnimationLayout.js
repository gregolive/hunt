import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const AnimationLayout = () => {

  const { pathname } = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0
    },
    in: {
      opacity: 1
    },
    out: {
      opacity: 0
    }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'linear',
    duration: 0.5
  }; 

  return (
    <motion.div
      key={pathname}
      className='Motion'
      initial='initial'
      animate='in'
      variants={pageVariants}
      transition={pageTransition}
    >
      <Outlet />
    </motion.div>
  );
};

export default AnimationLayout;
