import React, { useEffect } from "react";
import { motion } from "framer-motion";
const Container = (props) => {
  const { children } = props;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
      {...props}
      //   className={` ${props.className}`}
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
      transition={{ type: "tween" }}
    >
      {children}
    </motion.div>
  );
};

export default Container;
