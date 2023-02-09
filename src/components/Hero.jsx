import React, { useState } from "react";
import cvfr from '../assets/CV JESSICA FR.jpg';
import cven from '../assets/CV JESSICA EN.png';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'

function Hero() {
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
  return (
    <section id="home" className="lg:h-screen">
      <div className="py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            JESSICA-SHON MASTEL
          </h1>
          <h2 className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
          Sales Management | Operations Specialist | Bar Management | Event Management Specialist
          </h2>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
                className="rounded-md bg-slate-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:opacity-80"
                onClick={() => setShowModal(true)}
            >
                My CV
            </button>
            {showModal && (
            <div className="flex">
              <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 flex items-center justify-center ">
                <img src={cven} alt="Jessica-Shon MASTEL"  className="max-w-full max-h-full"/>
                  <button onClick={handleCloseModal}
                          className="absolute top-1 right-1 p-1 md:p-3 text-white hover:scale-110 text-4xl"
                  >
                  x
                 </button>
              </div>
            </div>
            )}
            <button
                className="rounded-md bg-slate-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:opacity-80"
                onClick={() => setShowModal(true)}
            >
                Afficher mon CV
            </button>
            {showModal && (
            <div className="flex">
              <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 flex items-center justify-center ">
                <img src={cvfr} alt="Jessica-Shon MASTEL"  className="max-w-full max-h-full"/>
                  <button onClick={handleCloseModal}
                          className="absolute top-1 right-1 p-1 md:p-3 text-white hover:scale-110 text-4xl"
                  >
                  x
                 </button>
              </div>
            </div>
            )}
          </div>
          <div className="pt-8">
            <a href="https://www.linkedin.com/in/jessica-shon-mastel-83ab61a1/" 
                target="_blank"
                rel="noopener noreferrer" 
                className="text-base font-semibold leading-7 text-gray-900 hover:text-[#0072b1]">
             Linkedin <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="mt-6 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
            <a
                href="mailto:masteljl@gmail.com" target="_blank" rel="noreferrer"
                className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                >
                <EnvelopeIcon className="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                <span>Message</span>
            </a>
            <a
                href="tel:+33766818026" target="_blank" rel="noreferrer"
                className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 "
                >
                <PhoneIcon className="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                <span>+33-7 66 81 80 26</span>
            </a>
            </div>

        </div>
      </div>
    </section>
  )
}

export default Hero