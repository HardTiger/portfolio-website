import React from 'react';

const About = () => {
  return (
    <div 
    name="about" 
    className="w-full h-screen bg-gradient-to-b from-blue-800 to-black text-white pt-96 sm:pt-0"
    >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-blue-500"> About</p>
            </div>

            <p className="text-xl mt-20">
            I'm Shane, a dedicated computer science and business student at Wilfrid Laurier University, actively seeking a compelling software engineer internship opportunity. With two years of rigorous academic training completed and my current role as a Data Analyst at Health Canada, I'm equipped with a solid foundation in programming, data analysis, and problem-solving. 
            </p>

            <br />

            <p className="text-xl">My objective is to secure a software engineering internship role that allows me to leverage my technical knowledge, contribute to innovative projects, and continue to expand my skills as a software developer. Alongside my academic pursuits, I find joy in basketball, chess, and riding my motorbike, which helps me maintain a healthy work-life balance while fostering qualities such as teamwork, strategic thinking, and adaptability.
            </p>

            <br />

            <p className="text-xl">If you're searching for a friendly and genuine team player who combines professionalism with a passion for continuous growth, I'd be thrilled to connect and explore how I can contribute to your organization.
            </p>
        </div>
    </div>
  );
};

export default About;