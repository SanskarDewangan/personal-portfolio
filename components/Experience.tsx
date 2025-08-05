import type { NextPage } from "next";
import { IJobs } from "../typings";
import JobCard from "./JobCard";
import { AnimatedSection } from "./AnimatedSection";

interface IExperienceProps {
  jobs: IJobs[];
}

export const Experience: NextPage<IExperienceProps> = ({ jobs }) => {
  return (
    <>
      <AnimatedSection>
        <h1 className="experience_heading">Work Experience</h1>
      </AnimatedSection>
      
      <div className="experience_timeline">
        {jobs?.map((job, index) => (
          <AnimatedSection key={job.id} delay={index * 0.1}>
            <JobCard job={job} index={index} />
          </AnimatedSection>
        ))}
      </div>
    </>
  );
}; 