"use client";
import Brain from "@/components/projects_gears";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";


const PortfolioPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const educationref = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });
  const isEducationRefInView = useInView(educationref, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
      <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "600px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "600px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SCSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Spring Boot
              </div>
              
              
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                WebGL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Webpack
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Vite
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Docker
              </div>
              
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Firebase
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Figma
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "600px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              PROJECTS
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "600px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  Portfolio Website
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded text-sm font-semibold w-fit">
                  Next.js, Framer Motion, Tailwind CSS
                  </div>
                  
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                  Jan 2024 – July 2024
                  </div>
                  
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                    
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/2 p-3 text-sm italic ">
                <div className="p-1 rounded text-sm font-semibold w-fit">
                   Front-End Development
                  </div>
                    <ul>
                      <li>Implemented responsive and interactive UI using Next.js for server-side rendering and Framer Motion for smooth animations,
                      enhancing user experience.</li>
                      <li>Showcased projects and skills with a clean, modern design, featuring sections for work experience, projects, and contact
                      information.</li>
                      </ul>{" "}
                </div> 
              </div>
              
              {/* extra line */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    
                    
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/2 p-3 text-sm italic "></div>
              </div>
              
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  MERN Stack E-commerce App
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded text-sm font-semibold w-fit">
                  Reactjs, Nodejs, Expressjs, Mongodb, and TypeScript
                  </div>
                  
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                  May 2023 - Jun 2023
                  </div>
                  
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                    
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/2 p-3 text-sm italic ">
                <div className="p-1 rounded text-sm font-semibold w-fit">
                Full Stack Development
                  </div>
                    <ul >
                      <li>Developed an online shopping app which will enable users to shop for clothes, accessories, and home goods with features
                      including registration , login , Item listing , and User Information display with pagination and filtering capabilities.</li>
                      
                      </ul>{" "}
                </div> 
              </div>
              
              {/* extra line */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    
                    
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/2 p-3 text-sm italic "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  Chess.AI
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded text-sm font-semibold w-fit">
                  JavaScript
                  </div>
                  
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                  March 2022 – May 2022
                  </div>
                  
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                    
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/2 p-3 text-sm italic ">
                <div className="p-1 rounded text-sm font-semibold w-fit">
                AI, Data Structures and Algorithms
                  </div>
                
                    <ul>
                      <li>Developed an AI-based single-player console chess game created on C++ which implemented algorithms like minimax search
                      trees and board evaluation to mimic human intelligence; which could be tuned to increase or decrease the difficulty of the AI.</li>
                      
                      </ul>{" "}
                </div> 
              </div>
              
              {/* extra line */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    
                    
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/2 p-3 text-sm italic "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  Basic Neural Network for Image Classification
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded text-sm font-semibold w-fit">
                  TensorFlow, Keras, Python
                  </div>
                  
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                  March 2023 - April 2023
                  </div>
                  
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                    
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/2 p-3 text-sm italic ">
                <div className="p-1 rounded text-sm font-semibold w-fit">
                Machine Learning
                  </div>
                
                    <ul>
                      <li>Conducted ML experiment to evaluate classifier performance on diverse datasets.</li>
                      <li>Utilized four distinct neural networks with architectures Varying in hidden layer count and activation functions and trained all the
                      models on the MNIST dataset.</li>
                      </ul>{" "}
                </div> 
              </div>
              
              {/* extra line */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    
                    
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/2 p-3 text-sm italic "></div>
              </div>
              
              
              
            </motion.div>
          </div>

        </div>
        
        
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
