import React from 'react';
import job1 from '../assets/job1.jpeg';
import job2 from '../assets/job2.jpeg';
import job3 from '../assets/job3.jpeg';
import jess from '../assets/jes.png';

function Main() {
    const jobs = [
        {
          name: 'Dignity Memorial Funeral and Cemetery | Fort Collins, Colorado',
          role: 'Assistant Family Service Manager • Oct 2017 – Feb 2021',
          image: job1,
          bio: `• Established sales goals & achieved goals by focusing on training the team, managing the teams’ daily activities, and recruiting.
          • Maintained and achieved a $250,000 monthly sales quota.
          • Educated, achieved, and wrote legally binding contracts for families’ funeral and cemetery needs in the office,
          home, or virtually.
          • Created and conducted graveside services for bereaved families.
          • Project managed the creation, design, and installation of private cemetery estates.`,
        },
        {
          name: 'Vessey Funeral Services | Fort Collins, Colorado',
          role: 'Apprentice Funeral Director • November 2016 – May 2017',
          image: job2,
          bio: `• Performed removals of the deceased from their place of passing, bringing them respectfully and discreetly to the
          funeral home. Also, prepared the deceased for embalming or cremation.
          • Handled the preparation and set up of funeral services for grieving families.
          • Provided families with exceptional services by handling legal & logistics details on behalf of the deceased.`,
        },
        {
          name: 'The Colorado Room | Fort Collins, Colorado',
          role: 'Bartender • November 2015 – April 2017',
          image: job3,
          bio: `• Keyholder for the business, responsible for the opening and closing operations and managing the daily spent
          reports.
          • Managed bar revenues, ensuring that all patrons were billed and all cash properly accounted for.
          • Preparing cocktail and drink orders for customers or waiters to deliver throughout the establishment.
          • Maintaining bar cleanliness for spills, food debris, used dishes, glassware, and utensils, and miscellaneous trash.
          • Continually provided exceptional service to customers by being friendly, knowledgeable, and accommodating.`,
        },

      ]
  return (
    <section id='cv'>
        <div className="py-24 sm:py-32 lg:flex lg:justify-between">
            <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">MY SUMMARY</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    Dedicated Sales Manager & Customer-Oriented Specialist with over 15 years of experience in Operations Management, Customer Service, Sales, and Hospitality. 
                    Proven track record in building relationships, promoting effective communication, and driving results through a combination of problem-solving and interjobal skills. 
                    Adept at identifying innovation opportunities and improving processes for greater efficiency. 
                    Committed to customer success and a strong team player, always striving to improve productivity, profitability, and teamwork. 
                    Seeking a position that allows me to leverage my expertise and advanced skills to drive revenue growth, increase customer loyalty, and contribute to the organization's overall success.
                </p>
                </div>
            </div>
            <div className="flex justify-center items-center"><img src={jess} alt="" className="hidden lg:flex pr-5 " /></div>
        </div>
        <div className="">
            <h2 className=""></h2>
            {/* begin */}
            <div className="py-24 md:py-32">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-5">
                    <div className="max-w-2xl xl:col-span-2">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">PROFESSIONAL EXPERIENCE</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        My core competencies: Customer Retention, Strategic Planning, Sales & Result Oriented, Leadership Qualities, Organisational Skills, Attention to Details, Administrative Assistant, Process Improvements, Decision Making, Relationship Management, Team Training & Development, Collaborative Problem Solving
                    </p>
                    </div>
                    <ul role="list" className="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3">
                    {jobs.map((job) => (
                        <li key={job.name} className="flex flex-col gap-10 pt-12 sm:flex-row">
                        <img className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src={job.image} alt="" />
                        <div className="max-w-xl flex-auto">
                            <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{job.name}</h3>
                            <p className="text-base leading-7 text-gray-600">{job.role}</p>
                            <p className="mt-6 text-base leading-7 text-gray-600">{job.bio}</p>
                        </div>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 py-10 gap-5 px-2 lg:px-8">
            <div className="border shadow-lg p-5 rounded-xl space-y-2">
                <h2 className="text-xl font-bold">EDUCATION</h2>
                <p className="text-slate-800">Bachelors of Science in Organisational Leadership</p>
                <p className="text-slate-600">Fort Hays State University, Hays, Kansas, USA (January 2010 – May 2015)
                    Concentration in Music & Performance</p>
                <h3 className="text-xl font-bold pt-6">Leadership Certificate</h3>
                <p className="text-slate-600">Fort Hays State University, Hays, Kansas, USA (2014)</p>
            </div>
            <div className="border shadow-lg p-5 rounded-xl space-y-2">
                <div className="">
                    <h3 className="text-xl font-bold">TECHNICAL SKILLSET</h3>
                    <p className="text-slate-600">MS Office | Google (Google Sheets, Google Slides, Google Docs) | Web Conferencing (Zoom, Google Meets)</p>
                </div>
                <div className="">
                    <h3 className="text-xl font-bold pt-6">HOBBIES</h3>
                    <p className="text-slate-600">Trumpet for 15+ years | Roller Skating Enthusiast</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Main