import React, { useState } from "react";
import ContactForm from "./componants/ContactForm";
import ContactSocailLinks from "./componants/ContactSocailLinks";

function Contact() {
  
  return (
    <div id="contact" className="mt-10 p-6 bg-gray-50">
      <h1 className="text-2xl font-bold text-center my-5 md:text-4xl">
        Get In Touch
      </h1>

      <span className="block h-1 w-[120px] bg-blue-800 mx-auto mb-5"></span>

      <p className="text-center">
        Have a project in mind or want to collaborate? Feel free to reach out!
      </p>

      <div className="flex justify-center gap-8 flex-col md:flex-row mt-10">
        {/* FORM */}
        <ContactForm/>
        {/* SOCIAL LINKS */}
        <ContactSocailLinks/>

      </div>
    </div>
  );
}

export default Contact;
