import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageProgress() {
  const [isClient, setIsClient] = useState(false); // Track if component is mounted
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    // Ensure this only runs on the client side
    setIsClient(true);
  }, []);

  // Render nothing on the server side (prevents useScroll from causing issues)
  if (!isClient) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-2 bg-primaryAccent origin-left z-[9999]"
      style={{ scaleX: scrollYProgress }} // Progress bar based on scroll
    />
  );
}
