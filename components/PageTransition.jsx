import { AnimatePresence } from "framer-motion";

const PageTransition = ({ children }) => {
  return <AnimatePresence>{children}</AnimatePresence>;
};

export default PageTransition;
