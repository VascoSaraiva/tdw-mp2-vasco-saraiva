import React from 'react'

const page = () => {
    return (
        <section className="bg-white px-6 rounded-3xl py-12 shadow-md flex flex-col gap-3 ">

            <p className="logo">WeTravel.</p>
            <h1 className="text-3xl font-poppins font-bold mb-3">Create. Share. <br /> Enjoy. </h1>

            <div className='gap-5 text-neutral-400 flex flex-col'>
                <p>Exploring new destinations is a truly enriching experience, yet pinpointing the ideal places to visit can be challenging.</p>

                <p>This is where WeTravel comes into play.</p>

                <p>Through WeTravel, you have the opportunity to find tailored recommendations based on your interests and desired destinations.</p>

                <p>You can explore lists curated by fellow users, using tags that align with your preferences. Additionally, sharing your own customized itineraries with others is effortlessly achievable.</p>

                <p className='text-indigo-500 font-bold'>Start your own, unique adventure with WeTravel.</p>
            </div>


        </section>
    )
}

export default page