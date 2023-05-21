"use client"
import React from 'react';

const ContactForm = () => {
  const submit = () => {
    alert(
      'Yippee! Your message is now surfing the web waves on its way to us. We will respond faster than a seagull swooping down on a french fry! We will be in touch next year!',
    );
  };

  return (
    <form className="mt-6 flex w-full flex-col gap-4 text-primary md:w-[70%]">
      <p className="pb-1 text-lg text-third">Write a message to us!</p>
      <input type="text" placeholder="Name" className="rounded-xl" />
      <textarea
        name=""
        id=""
        placeholder="Message"
        rows={6}
        className="rounded-xl"
      ></textarea>
      <button
        onClick={submit}
        className="hover:bg-neutral-700 mt-2 h-10 w-40 rounded-md border-2 border-third bg-secondary text-white_bolig hover:scale-105 hover:cursor-pointer hover:bg-opacity-40 sm:w-20"
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
