"use client";
import Brain from "@/components/projects_gears";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Logo from '../../../public/sign.svg';

const PortfolioPage2 = () => {
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
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              harum quibusdam cupiditate nobis accusamus sed aut aperiam,
              reiciendis numquam! Voluptas voluptatibus obcaecati dolore itaque
              suscipit! Vel doloremque numquam quam nihil.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
              <svg width="185"
                height="77"
                viewBox="0 0 370 114"
                fill="none" xmlns="http://www.w3.org/2000/svg" >
              <path fill="#000000" opacity="1.000000" stroke="none" 
                d="
              M153.175598,68.989288 
                C153.346024,76.714104 153.357712,76.484322 160.616730,76.853607 
                C174.590561,77.564476 188.547394,78.486794 202.373108,75.356911 
                C203.811935,75.031174 205.231857,75.092621 205.501968,76.810318 
                C205.766129,78.489929 204.374634,78.999306 202.996719,79.315033 
                C197.961060,80.468849 192.905121,81.358063 187.700577,81.345596 
                C161.374496,81.282555 135.048279,81.268997 108.722099,81.255325 
                C101.990059,81.251831 101.929276,81.793671 102.649124,88.430534 
                C105.014320,110.236870 108.014145,132.038544 105.435295,154.062378 
                C105.338531,154.888763 105.305824,155.729874 105.124481,156.537445 
                C104.848755,157.765244 104.169609,158.831177 102.778870,158.619644 
                C101.420174,158.412979 100.983696,157.210876 101.071404,155.960831 
                C101.234123,153.641861 101.513176,151.331223 101.729584,149.015793 
                C103.695259,127.983940 100.179588,107.229012 98.528229,86.381744 
                C98.265427,83.064110 97.044189,80.883430 92.885071,81.185425 
                C88.640152,81.493645 89.300690,84.238312 89.233284,86.835098 
                C89.185745,88.666718 89.250214,90.502884 89.152748,92.331047 
                C89.079247,93.709930 88.772331,95.111740 86.951172,95.045380 
                C85.154755,94.979904 85.098534,93.520309 84.841827,92.190300 
                C84.170204,88.710518 86.571106,84.194000 83.218437,81.889801 
                C80.474693,80.004112 76.399933,81.443298 72.924370,81.221397 
                C71.172073,81.109520 68.664268,81.544487 68.635460,79.030678 
                C68.606224,76.478806 71.133041,76.952217 72.872833,76.792496 
                C76.486794,76.460724 80.868896,78.242180 83.548134,75.910576 
                C86.363243,73.460732 84.298508,68.960136 84.783371,65.392334 
                C85.722000,58.485649 86.086800,51.478928 88.378960,44.815083 
                C89.019196,42.953754 89.518776,40.710114 92.166031,40.899509 
                C94.394661,41.058956 94.971962,42.971474 95.525154,44.748516 
                C98.207596,53.365471 98.602669,62.397175 100.289955,71.195717 
                C100.794060,73.824432 100.691948,77.053230 104.505943,76.677582 
                C108.065788,76.326973 112.386276,78.998367 114.431221,72.504929 
                C116.284470,66.620193 113.975380,61.740440 113.644882,56.411762 
                C113.540909,54.735332 111.996895,52.283115 114.545845,51.673405 
                C117.585663,50.946278 116.863525,54.066246 117.588234,55.711983 
                C118.383499,57.517979 117.933685,59.720047 119.436401,61.399109 
                C120.928520,60.030666 121.323380,58.265236 121.669907,56.486843 
                C121.967834,54.957874 122.365433,53.195435 124.301147,53.575478 
                C126.158470,53.940132 126.025368,55.686893 125.771439,57.262913 
                C125.094139,61.466537 123.167076,65.134911 121.017853,68.723938 
                C120.609444,69.405945 120.357704,70.181770 119.651932,71.777328 
                C125.500244,69.356277 127.354050,74.104500 130.826385,78.018509 
                C130.976547,73.783241 130.738846,71.296501 129.185898,69.044556 
                C128.385025,67.883202 127.644730,66.580971 129.257523,65.634514 
                C130.862122,64.692863 132.022552,65.699532 133.063004,66.962334 
                C134.775070,69.040245 133.553253,72.352226 136.268600,74.261246 
                C138.447815,72.957718 138.745499,71.021416 138.364899,68.766411 
                C138.138474,67.424965 138.650757,66.339882 140.044769,66.211456 
                C141.452469,66.081772 142.166275,67.155411 142.214310,68.432243 
                C142.307373,70.905746 142.241501,73.385231 142.241501,75.938293 
                C147.785782,77.736443 148.872711,77.055061 148.729858,71.169662 
                C148.548187,63.685146 149.148621,56.171406 147.941147,48.718048 
                C147.756790,47.580063 147.814072,46.386181 147.890976,45.226871 
                C147.985611,43.800655 148.477142,42.490139 150.206116,42.582283 
                C151.636459,42.658508 152.100784,43.868744 152.147354,45.079578 
                C152.268982,48.241467 152.203781,51.411053 152.347702,54.571442 
                C152.559616,59.224667 152.888382,63.872570 153.175598,68.989288 
              M89.980141,57.381962 
                C88.755585,62.643539 89.444916,67.990379 89.261238,73.298752 
                C89.140053,76.801010 91.459496,76.859985 93.956055,76.729813 
                C97.007339,76.570717 96.729980,74.474701 96.449570,72.409615 
                C96.203995,70.601097 96.020683,68.772774 95.607201,67.000481 
                C94.243889,61.157139 94.452362,54.975906 92.094574,48.884449 
                C90.416077,51.579636 90.391632,54.079998 89.980141,57.381962 
              z"/>
              </svg>
              
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
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
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
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
              initial={{ x: "300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Research and Development Intern
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded text-sm font-semibold w-fit">
                  Samsung R&D Institute, Bangalore (SRI-B)
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    <ul>
                      <li>Worked on creating training and evaluation pipelines on the company’s backend, processing JSON, CSV and other raw data and
                      formats, feeding it into the ML models, training them on on-site servers</li>
                      
                      </ul>{" "}
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
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  Software Engineering Intern
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded text-sm font-semibold w-fit">
                  Integra Design Solutions New Delhi, India
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                  Worked on project ”ANPR with vehicle type detection ” where we implemented Object Detection using TensorFlow. We used a pre-trained Deep Learning model in our project . Used a dataset of 5000 images to train and test our model{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                  May 2022 - July 2022{" "}
                  </div>
                  
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              
            </motion.div>
          </div>
          {/* EDUCATION div */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={educationref}
          >
            {/* EDUCATION TITLE */}
            <motion.h1
              initial={{ x: "300px" }}
              animate={isEducationRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EDUCATION
            </motion.h1>
            {/* EDUCATION LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isEducationRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EDUCATION LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* College TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  B.E. Electronics and Communication
                  </div>
                  {/* College minor */}
                  <div className="p-3 text-sm italic">
                    <ul>
                      <li>Minor in Computing and Intelligence</li>
                      <li>CGPA --- 8.10</li>
                      </ul>{" "}
                  </div>
                  {/* College COMPANY */}
                  <div className="p-1 rounded text-sm font-semibold w-fit">
                  BITS Pilani, Hyderabad Campus
                  </div>
                  
                  {/* College DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                  Oct. 2020 – June 2024
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
                <div className="w-1/3 "></div>
              </div>
              {/* EDUCATION LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* College TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  Class XII (CBSE)
                  </div>
                  {/* College DESC */}
                  <div className="p-3 text-sm italic">
                  95.2%                  
                  </div>
                  {/* College COMPANY */}
                  <div className="p-1 rounded text-sm font-semibold w-fit">
                  Army Public School, Kamraj Road, Bangalore
                  </div>
                  
                  {/* College DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2020{" "}
                  </div>
                  
                </div>
              </div>
              {/* EDUCATION LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* College TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  Class X (CBSE){" "}
                  </div>
                  {/* College DESC */}
                  <div className="p-3 text-sm italic">
                    85.6%{" "}
                  </div>
                  <div className="p-1 rounded text-sm font-semibold w-fit">
                  Army Public School, Kamraj Road, Bangalore
                  </div>
                  {/* College DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2018{" "}
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
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
