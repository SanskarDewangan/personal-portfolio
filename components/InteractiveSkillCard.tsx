import { motion } from 'framer-motion';
import { ISkills } from '../typings';
import Image from 'next/image';

interface InteractiveSkillCardProps {
  skill: ISkills;
  index: number;
}

/**
 * InteractiveSkillCard Component
 * Displays a skill with interactive animations and proficiency indicator
 *
 * @param skill - Skill object containing skill details
 * @param index - Index for animation delay
 */
export const InteractiveSkillCard: React.FC<InteractiveSkillCardProps> = ({ skill, index }) => {
  return (
    <motion.div
      className="skills_box_container_row_card interactive"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      whileTap={{
        scale: 0.98,
        transition: { duration: 0.1 }
      }}
    >
      <motion.div
        className="skill-card-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.2, duration: 0.3 }}
      >
        <motion.div
          className="skill-card-front"
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Skill icon with hover animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
            whileHover={{
              scale: 1.1,
              rotate: 5,
              transition: { duration: 0.2 }
            }}
          >
            <Image
              src={skill?.image?.url}
              alt={skill?.skill}
              width={50}
              height={50}
              style={{ marginBottom: '10px' }}
            />
          </motion.div>
          
          {/* Skill name */}
          <motion.p
            style={{ fontSize: '14px', textAlign: 'center' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.4, duration: 0.3 }}
          >
            {skill?.skill}
          </motion.p>

          {/* Skill level indicator */}
          <motion.div
            className="skill-level-indicator"
            initial={{ width: 0 }}
            animate={{ width: skill?.proficient ? '80%' : '40%' }}
            transition={{ delay: index * 0.1 + 0.6, duration: 0.8 }}
            style={{
              height: '3px',
              background: skill?.proficient
                ? 'linear-gradient(90deg, var(--secondary-accent), var(--primary-accent))'
                : 'linear-gradient(90deg, #e0e0e0, #bdbdbd)',
              borderRadius: '2px',
              marginTop: '8px',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Animated glow effect */}
            <motion.div
              className="skill-level-glow"
              animate={{
                x: skill?.proficient ? [0, 100, 0] : [0, 50, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
                transform: 'translateX(-100%)'
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};