import { useEffect, useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

export const ScrollingSunglasses = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -180]);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden bg-gradient-to-b from-background to-muted/20">
      {/* Floating Sunglasses */}
      <motion.div
        style={{ y: y1, rotate: rotate1 }}
        className="absolute top-20 left-1/4 w-32 h-32 opacity-80"
      >
        <img 
          src="/lovable-uploads/bffdc00a-e349-4760-87e5-d3245ccd89a0.png"
          alt="Floating Sunglasses"
          className="w-full h-full object-contain"
        />
      </motion.div>

      <motion.div
        style={{ y: y2, rotate: rotate2 }}
        className="absolute top-40 right-1/3 w-28 h-28 opacity-70"
      >
        <img 
          src="/lovable-uploads/eaf91e9d-d05c-4596-ab12-a288c79b3237.png"
          alt="Floating Sunglasses"
          className="w-full h-full object-contain"
        />
      </motion.div>

      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-32 left-1/3 w-36 h-36 opacity-90"
      >
        <img 
          src="/lovable-uploads/4a195fd6-1967-4a63-a225-78d725fa2ff2.png"
          alt="Floating Sunglasses"
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Central Frame Section */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="elegant-card p-8 max-w-md text-center">
          <h2 className="text-3xl font-playfair font-bold mb-4 text-gradient">
            Crafted to Perfection
          </h2>
          <p className="text-muted-foreground mb-6">
            Each pair of Elistro sunglasses is meticulously designed and crafted 
            with premium materials to ensure both style and durability.
          </p>
          <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden elegant-card p-2">
            <img 
              src="/lovable-uploads/f2c0511c-b997-4423-b0c7-0848e9f823d9.png"
              alt="Featured Sunglasses"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-1/3 right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000" />
    </div>
  );
};