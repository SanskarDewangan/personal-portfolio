import type { NextPage } from "next";
import { ISkills, SKILLSET } from "../typings";
import { Skill } from "./Skill";
import { AnimatedSection } from "./AnimatedSection";
import { InteractiveSkillCard } from "./InteractiveSkillCard";

interface ISkillsProps {
  skills: ISkills[];
}

/**
 * Skills Component
 * Displays skills grouped by category with interactive cards
 *
 * @param skills - Array of skill objects
 */
export const Skills: NextPage<ISkillsProps> = ({ skills }) => {
  // Filter skills by category
  const languages = skills?.filter(skill => skill?.fieldType === "languages");
  const frontend = skills?.filter(skill => skill?.fieldType === "frontend");
  const uilibraries = skills?.filter(skill => skill?.fieldType === "uilibraries");
  const testing = skills?.filter(skill => skill?.fieldType === "testing");
  const familiar = skills?.filter(skill => !skill?.fieldType || skill?.fieldType === "");

  return (
    <>
      {/* Skills section heading */}
      <AnimatedSection>
        <h1 className="skills_heading">Skills & Technologies</h1>
      </AnimatedSection>
      
      {/* Skills container */}
      <div className="skills_box">
        {/* Programming Languages section */}
        {languages && languages.length > 0 && (
          <AnimatedSection delay={0.2}>
            <div className="skills_box_container">
              <p className="skills_box_container_heading">Programming Languages</p>
              <div className="skills_box_container_row">
                {languages.map((skill, index) => (
                  <InteractiveSkillCard key={skill.id} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Frontend Development section */}
        {frontend && frontend.length > 0 && (
          <AnimatedSection delay={0.4}>
            <div className="skills_box_container">
              <p className="skills_box_container_heading">Frontend Development</p>
              <div className="skills_box_container_row">
                {frontend.map((skill, index) => (
                  <InteractiveSkillCard key={skill.id} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* UI Libraries & Frameworks section */}
        {uilibraries && uilibraries.length > 0 && (
          <AnimatedSection delay={0.6}>
            <div className="skills_box_container">
              <p className="skills_box_container_heading">UI Libraries & Frameworks</p>
              <div className="skills_box_container_row">
                {uilibraries.map((skill, index) => (
                  <InteractiveSkillCard key={skill.id} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Testing & Tools section */}
        {testing && testing.length > 0 && (
          <AnimatedSection delay={0.8}>
            <div className="skills_box_container">
              <p className="skills_box_container_heading">Testing & Tools</p>
              <div className="skills_box_container_row">
                {testing.map((skill, index) => (
                  <InteractiveSkillCard key={skill.id} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Familiar Technologies section */}
        {familiar && familiar.length > 0 && (
          <AnimatedSection delay={1.0}>
            <div className="skills_box_container">
              <p className="skills_box_container_heading">Familiar Technologies</p>
              <div className="skills_box_container_row">
                {familiar.map((skill, index) => (
                  <InteractiveSkillCard key={skill.id} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}
      </div>
    </>
  );
};
