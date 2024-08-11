import React from "react";
import Accordion from "./Accordion";

const FAQs = () => {
  return (
  <div className="w-full mb-10 bg-tertiary">

  <div className="flex text-4xl mb-4 justify-center items-center text-secondary font-Rubik font-bold">
          <p>FAQs</p>
        </div>
      <div className="border-b-[1px] border-solid border-grey_white text-xl xl:text-2xl font-bold text-dark_purple">        
      <Accordion 
        title="Is the program for a selected discipline?"
        answer="No, the program is for students of  all discipline who meet up with the requirement  "
      />
      </div>
      <div className="border-b-[1px] border-solid border-grey_white text-xl xl:text-2xl font-bold text-dark_purple">
      <Accordion
        title="How much is the application fee? "
        answer="No application fee required, It’s totally free"
      />
      </div>

      <div className="border-b-[1px] border-solid border-grey_white text-xl xl:text-2xl font-bold text-dark_purple">
      <Accordion title="Who is eligible for this role?"
                  answer="A tertiary student in Nigeria University and must currently be in their second year and penultimate year" 
        />
      </div>

      <div className="border-b-[1px] border-solid border-grey_white text-xl xl:text-2xl font-bold text-dark_purple">
      <Accordion title="How long does this role last?" 
                answer="It's a one-year program that can be renewed depending on individual performance." />
      </div>

      <div className="border-b-[1px] border-solid border-grey_white text-xl xl:text-2xl font-bold text-dark_purple">
      <Accordion title="What does campus ambassador do?" 
                 answer="The Airvend campus ambassador represents and promotes Airvend on campus and constantly seeks to identify new and innovative ways to maximize Airvend's reach and awareness on their campus" />
      </div>

      <div className="border-b-[1px] border-solid border-grey_white text-xl xl:text-2xl font-bold text-dark_purple">
      <Accordion title="Who do i reach for further inquiry?"
                 answer="For further information or inquiry, kindly contact us at" />
      </div>
<div className="">
      <pre className="border-b-[1px] border-solid border-grey_white text-xl xl:text-2xl font-bold text-dark_purple font-Rubik">
      <Accordion title="What do i get as an Airvend Ambassador?"
                answer={[" • Monthly stipend based on referral bonus\n • Free data subscription for an online orientation program\n • Stand a chance to get a 6 month internship with Airvend\n • Tech Scholarship opportunities\n • Airvend branded merchandise\n • Free skills workshop and seminars and lots more."]}/>
      </pre>
      </div>
    </div>
  );
};

export default FAQs;





// import React from 'react'
// import Accordion from './Accordion'

// const FAQs = () => {
//   return (
//     <>
// <div className='p-4 bg-blue-600 rounded-lg'>
//     <Accordion />
// </div>
//     </>
//   )
// }

// export default FAQs