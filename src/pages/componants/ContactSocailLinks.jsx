import React from 'react'

function ContactSocailLinks() {
  return (
    <div className="bg-white py-10 px-4 max-w-[500px] rounded-xl shadow-md mt-20">
          <h2 className="text-2xl font-bold my-4">Connect With Me On</h2>
          <p className="text-md text-gray-800 max-w-[400px] px-2 my-5">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/akshan-dhyani"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 my-3 hover:scale-105 bg-gray-100 transition"
              >
                <i className="fa-brands fa-linkedin-in text-2xl"></i>
                <span>
                  <p className="font-bold">LinkedIn</p>
                  <p>@akshandhyani</p>
                </span>
              </a>
            </li>

            <li>
              <a
                href="https://www.github.com/akshandhyani789"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 my-3 hover:scale-105 bg-gray-100 transition"
              >
                <i className="fa-brands fa-github text-2xl"></i>
                <span>
                  <p className="font-bold">GitHub</p>
                  <p>@akshandhyani789</p>
                </span>
              </a>
            </li>
          </ul>
        </div>
  )
}

export default ContactSocailLinks
