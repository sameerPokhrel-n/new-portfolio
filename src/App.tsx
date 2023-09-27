import {
  CTA,
  About,
  Footer,
  Hero,
  Navbar,
  PortfolioComponent,
  Testimonials,
  Stacks,
  ScrollButton,
} from "./app/components";

import { motion, useScroll, useSpring } from "framer-motion";
import Experience from "./app/components/Experience";
import { Suspense } from "react";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <div className="dark:bg-primaryDim w-full overflow-hidden">
        <motion.div className="progress-bar" style={{ scaleX }} />
        <Navbar />
        <Hero />
        <About />
        <Stacks />
        <Experience />
        <ScrollButton />
        <Suspense
          fallback={
            <div className="dark:text-white absolute top-126 left-20 text-darkPrimary m-auto flex justify-center items-center">
              Loading....
            </div>
          }
        >
          <PortfolioComponent />
        </Suspense>
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </>
  );
}
export default App;
