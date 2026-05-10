import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-900 bg-green/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/favicon.png"
                  alt="Dabaso Rock Conservation Group"
                  width={48}
                  height={48}
                />
                <span className="font-heading text-lg font-bold">
                  <h1>DRCG</h1>
                </span>
              </div>
              <p className="text-sm text-gray-900/70 leading-relaxed">
                Protecting Mida Creek ecosystems while empowering local
                communities through sustainable conservation.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-900/70">
                <li>
                  <a
                    href="/about"
                    className="hover:text-nature transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/programs"
                    className="hover:text-nature transition-colors"
                  >
                    Programs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Get Involved</h4>
              <ul className="space-y-2 text-sm text-gray-900/70">
                <li>
                  <a
                    href="/contact"
                    className="hover:text-nature transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Contact</h4>
              <ul className="space-y-3 text-sm text-gray-900/70">
                <li className="flex items-start gap-2">
                  <i className="ri-map-pin-line text-xl text-green"></i>
                  Dabaso Sub-location, Near Mida Creek, Kenya
                </li>
                <li className="flex items-center gap-2">
                  <i className="ri-mail-line text-xl text-green"></i>
                  <a
                    href="mailto:dabasorockconservationgroup@gmail.com"
                    className="hover:text-nature transition-colors break-all"
                  >
                    dabasorockconservationgroup@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <i className="ri-phone-line text-xl text-green"></i>
                  <span>0729249199 / 0115856599</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-900/10 text-center text-sm text-gray-900/50">
            <p>
              &copy; {new Date().getFullYear()} Dabaso Rock Conservation Group.
              All rights reserved.
            </p>
            <p className="mt-1">Conserving Nature, Empowering Communities.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
