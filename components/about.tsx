"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[60rem]  leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      Hi, I am Neha Gaddam, a Computer Science graduate student at Syracuse University, with a CGPA of 3.86/4, graduated in May 2024. Prior to this I have 2 years of work experience as a Software Developer at NCR Corporation, Hyderabad, India office. I hold a Bachelor’s degree in Computer Science from Osmania University, where I achieved a CGPA of 8.51/10.
      </p>
      <p className="mb-3">
      My technical expertise spans a wide array of programming languages and technologies, including C#, Python, Java, C++, Django, Spring Boot, ReactJS, AWS and many more. As a Graduate Teaching Assistant, I've mentored students in coding in assembly languages such as RISC-V, ARM for the Computer Architecture course.
      </p>
      <p className="mb-3">
      As a Software Developer at NCR Corporation, I worked on enhancing and maintaining restaurant management software for the products such as Aloha Point of Sale application coded in C++ and Configuration Center Manager application built on .NET framework, SQL Server, DevExpress. I have also received Cheer recognition for my contributions at NCR Corporation.
      </p>
      <p className="mb-3">
      I'm keen on exploring opportunities in Software Development, from Full Stack to Backend and Frontend roles, starting from May 2024. I'm excited to bring my blend of creativity, technical expertise, and a proven track record of successful project delivery to innovative projects.
      </p>
    </motion.section>
  );
}
