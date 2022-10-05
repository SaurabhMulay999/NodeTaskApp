
import React from 'react'
import ReactDOM from 'react-dom'
import robo from './Robo.jpg';

import robo1 from './Robo1.jpg';

function TailWindComponent(){
    return (
        <>
       <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
  <div className="flex items-center flex-shrink-0 text-white mr-6">
    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
    <span className="font-semibold text-xl tracking-tight">AI_Facts_101</span>
  </div>
  <div className="block lg:hidden">
    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto ">
    <div className="text-sm lg:flex-grow ">
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Home
      </a>
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        About
      </a>
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        Learning
      </a>
      <a href="#" className="block mx-2 justify-items-end mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">More</a>
        



      </div>
    <div>
      <a href="https://www.instagram.com/ai_facts_101/" target="_blank" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Instagram</a>
    </div>
  </div>
</nav>

    <main> 
            <div>
            <div className="bg-white dark:bg-slate-800 rounded-lg px-5 py-2 ring-1 ring-slate-900/5 shadow-xl">
  <div>
    <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
      <svg className="h-2 w-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"></svg>
    </span>
  </div>
  <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Isn't it Interesting?</h3>
  <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
  In 1945 Turing predicted that computers would one day play very good chess, and just over 50 years later, in 1997, Deep Blue, a chess computer built by the International Business Machines Corporation (IBM), beat the reigning world champion, Garry Kasparov, in a six-game match. While Turing’s prediction came true, his expectation that chess programming would contribute to the understanding of how human beings think did not. The huge improvement in computer chess since Turing’s day is attributable to advances in computer engineering rather than advances in AI—Deep Blue’s 256 parallel processors enabled it to examine 200 million possible moves per second and to look ahead as many as 14 turns of play. Many agree with Noam Chomsky, a linguist at the Massachusetts Institute of Technology (MIT), who opined that a computer beating a grandmaster at chess is about as interesting as a bulldozer winning an Olympic weightlifting competition.
  </p>
</div>

            </div>
    </main>

    <main >
      <div> 
            <div>
            <div className="bg-white dark:bg-slate-800 rounded-lg px-5 py-2 ring-1 ring-slate-900/5 shadow-xl">
  <div>
    <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
      <svg className="h-2 w-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"></svg>
    </span>
  </div>
  <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Isn't it Interesting?</h3>
  <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">

  </p>
</div>

            </div>


<div className="grid grid-cols-1 gap-6 flex items-center">
  <div className="mb-2 mt-3">
    <img src={robo} className="max-w-3xl h-48 rounded-full" alt=""/>
  </div>
</div>
      </div>
    </main>


    


</>


    );
    }
export default TailWindComponent;

