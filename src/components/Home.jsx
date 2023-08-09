import React from 'react';
import HeroImage from '../assets/heroImage.jpg';
import { TbArrowNarrowRight } from 'react-icons/tb';
import {Link} from 'react-scroll';

const Home = () => {
  return (
    <div 
        name="home" 
        className="h-screen w-full bg-gradient-to-b from-black via-black to-blue-800 "
    >
        <div className="max-w-screen-lg mx-auto flex flex-col 
        items-center justify-center h-full px-4 md:flex-row pt-24 sm:flex-row"> 
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-7xl font-bold
                text-white">
                    I'm An Aspiring Software Engineer
                </h2>
                <p className="text-gray-500 py-4 max-w-md">
                Hello there! I'm a third-year student at Wilfrid Laurier University pursuing a double degree in Computer Science and Business. With a background in data analysis and project management, I'm now diving into the world of software engineering. Currently, I'm immersed in developing a full-stack paper trading simulator app using technologies like Python, HTML, CSS, and JavaScript. Join me on my journey as I combine my passion for technology and business to create innovative solutions.
                </p>

                

                <div> 
                    <Link
                    to="portfolio"
                    smooth duration={500}
                    className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md
                    bg-gradient-to-r from-blue-500 to to-blue-700 cursor-pointer">
                        Portfolio 
                        <span className="group-hover:rotate-90 duration-300 pl-2">
                            <TbArrowNarrowRight size={23}/>
                        </span>
                    </Link>
                </div>
            </div>

            <div className="px-14">
                <img src={HeroImage} alt="Proflic of me" 
                className="rounded-2xl mx-auto w-2/3 md:w-full"
                />
            </div>

        </div>
    </div>
  );
}

export default Home;