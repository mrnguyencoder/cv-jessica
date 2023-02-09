import React from 'react'

function Hero() {
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
            <a
              href="#"
              className="rounded-md bg-green-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              My CV
            </a>
            <a href="https://www.linkedin.com/in/jessica-shon-mastel-83ab61a1/" 
                target="_blank"
                rel="noopener noreferrer" 
                className="text-base font-semibold leading-7 text-gray-900">
             Linkedin <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero