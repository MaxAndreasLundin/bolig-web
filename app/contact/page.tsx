import React from 'react';
import ContactForm from '../../components/contactForm/ContactForm';
import Image from 'next/image';

const page = () => {

  return (
    <div className="flex w-full max-w-[1400px] flex-col items-center lg:gap-44 bg-secondary text-white_bolig md:flex-row">
      <div className="flex flex-col p-10">
        <h2 className="pb-6 text-3xl font-semibold text-third">Contact Us</h2>
        <h3 className="pb-1 text-xl">
          The corner of the internet where home dreams become reality!
        </h3>
        <p className="py-2">
          We are not your average real estate team. We are property matchmakers,
          sunlight analyzers, and pizza delivery area confirmers. Looking for a
          home? We are all over it, like a well-positioned garden gnome.
        </p>
        <p>
          Dont be shy! Reach out to us via email, phone, or even good old-fashioned foot
          traffic to our office.
        </p>
        <ContactForm />
      </div>
      <div className="hidden md:flex w-[100%] h-[700px] relative">
        <Image src="/pictures/uppsala.webp" layout="fill" objectFit='cover' alt='test'/>
      </div>
    </div>
  );
};

export default page;
