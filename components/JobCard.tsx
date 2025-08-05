import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { motion } from 'framer-motion';
import { IJobCardProps } from "../typings";
import linkedin from "../assets/linkedin.webp";
import www from "../assets/www.webp";

const JobCard: NextPage<IJobCardProps> = ({ job, index }) => {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const formatDate = (dateString: string) => {
    const [year, month] = dateString.split("-");
    return `${months[parseInt(month) - 1]}, ${year}`;
  };

  return (
    <motion.div 
      className="job-card" 
      key={job?.id}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)"
      }}
    >
      <h2>{job?.company}</h2>
      <h3>{job?.designation}</h3>
      {job?.logo?.url && (
        <Image
          src={job?.logo?.url}
          alt="company-logo"
          width={90}
          height={40}
          className="job-card-company-logo"
          priority
        />
      )}
      <div className="job-card-timeline">
        {formatDate(job?.from)}
      </div>
      <div className="job-card-date">
        {formatDate(job?.from)} -{" "}
        {job?.to ? formatDate(job?.to) : "Present"}
      </div>
      <div className="job-card-company-links">
        {job?.companyLinkedin && (
          <Image
            src={linkedin.src}
            alt="company-linkedin-link"
            width={30}
            height={30}
            priority
            onClick={() => window.open(job?.companyLinkedin, "_blank")}
            style={{ cursor: 'pointer', marginRight: '15px' }}
          />
        )}
        {job?.companyUrl && (
          <Image
            src={www.src}
            alt="company-link"
            width={30}
            height={30}
            priority
            onClick={() => window.open(job?.companyUrl, "_blank")}
            style={{ cursor: 'pointer' }}
          />
        )}
      </div>
    </motion.div>
  );
};

export default JobCard; 