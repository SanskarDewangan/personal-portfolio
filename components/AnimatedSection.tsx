import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

/**
 * AnimatedSection Component
 * Wraps children with entrance animations based on scroll position
 *
 * @param children - Child elements to animate
 * @param className - Additional CSS classes
 * @param delay - Animation delay in seconds
 * @param direction - Animation direction (up, down, left, right)
 */
export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up'
}) => {
  // Hook to detect when element is in view
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  /**
   * Get initial position based on animation direction
   * @returns Object with initial position and opacity
   */
  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: 50, opacity: 0 };
      case 'down': return { y: -50, opacity: 0 };
      case 'left': return { x: 50, opacity: 0 };
      case 'right': return { x: -50, opacity: 0 };
      default: return { y: 50, opacity: 0 };
    }
  };

  /**
   * Get animated position (final state)
   * @returns Object with final position and opacity
   */
  const getAnimatedPosition = () => {
    switch (direction) {
      case 'up': return { y: 0, opacity: 1 };
      case 'down': return { y: 0, opacity: 1 };
      case 'left': return { x: 0, opacity: 1 };
      case 'right': return { x: 0, opacity: 1 };
      default: return { y: 0, opacity: 1 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={inView ? getAnimatedPosition() : getInitialPosition()}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};