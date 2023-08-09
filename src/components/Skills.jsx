import React from 'react'
import python from '../assets/python.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import sql from '../assets/sql.png';
import pandas from '../assets/pandas.png';
import tailwind from '../assets/tailwind.png';
import powerbi from '../assets/powerbi.png';
import powerautomate from '../assets/powerautomate.png';
import excel from '../assets/excel.png';


const Skills = () => {

  const techitems = [
    {
      id: 1,
      src: python,
      title: 'Python',
      style: 'shadow-cyan-500'
    },
    {
      id: 2,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 3,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500'
    },
    {
      id: 4,
      src: javascript,
      title: 'Javascript',
      style: 'shadow-yellow-500'
    },
    {
      id: 5,
      src: sql,
      title: 'SQL',
      style: 'shadow-orange-700'
    },
    {
      id: 6,
      src: pandas,
      title: 'Pandas',
      style: 'shadow-cyan-600'
    },
    {
      id: 7,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-sky-500'
    },
    {
      id: 8,
      src: powerbi,
      title: 'Power BI',
      style: 'shadow-yellow-600'
    },
    {
      id: 9,
      src: powerautomate,
      title: 'Power Automate',
      style: 'shadow-blue-500'
    },
    {
      id: 10,
      src: excel,
      title: 'Excel',
      style: 'shadow-green-600'
    },


  ];

  return (
    <div name='skills' className="bg-gradient-to-b from-black via-black to-blue-900 w-full h-screen pt-96 sm:pt-0">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white ">
        <div>
          <p className="text-4xl font-bold border-b-4 border-blue-500 p-2 inline">Skills</p>
          <p className="py-6">These are various technologies I have experience with</p>
        </div>

        {/* mobile devices have 2 columns, default is 3 columns  */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

          {techitems.map(({ id, src, title, style }) => (
              <div 
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
              <img src={src} alt="" className="w-20 mx-auto"/>
              <p className="mt-4">{title}</p>
            </div> 
          ))}
        </div>
      </div>
    </div>
  );
};



export default Skills;