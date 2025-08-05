import { motion } from 'framer-motion';
import { useState } from 'react';
import { ISkills } from '../typings';
import Image from 'next/image';

interface InteractiveSkillCardProps {
  skill: ISkills;
  index: number;
}

export const InteractiveSkillCard: React.FC<InteractiveSkillCardProps> = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="skills_box_container_row_card interactive"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)"
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="skill-card-content"
        animate={{ 
          rotateY: isHovered ? 180 : 0,
          transition: { duration: 0.6 }
        }}
      >
        {/* Front of card */}
        <motion.div
          className="skill-card-front"
          style={{ 
            display: isHovered ? 'none' : 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%'
          }}
        >
          <Image 
            src={skill?.image?.url} 
            alt={skill?.skill} 
            width={50} 
            height={50}
            style={{ marginBottom: '10px' }}
          />
          <p style={{ fontSize: '14px', textAlign: 'center' }}>{skill?.skill}</p>
        </motion.div>

        {/* Back of card */}
        <motion.div
          className="skill-card-back"
          style={{ 
            display: isHovered ? 'flex' : 'none',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            padding: '10px'
          }}
        >
          <h4 style={{ fontSize: '12px', marginBottom: '5px', color: 'var(--primary-accent)' }}>
            {skill?.skill}
          </h4>
          <p style={{ fontSize: '10px', textAlign: 'center', color: 'var(--text-color-two)' }}>
            {skill?.proficient ? 'Proficient' : 'Learning'}
          </p>
          {skill?.fieldType && (
            <span style={{ 
              fontSize: '8px', 
              padding: '2px 6px', 
              backgroundColor: 'var(--secondary-accent)',
              color: 'var(--primary-accent)',
              borderRadius: '10px',
              marginTop: '5px'
            }}>
              {skill.fieldType}
            </span>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}; 