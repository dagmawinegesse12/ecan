
// components/Footer.tsx
import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => (
  <footer className="bg-gray-800 text-gray-200 mt-16">
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h4 className="font-semibold">Location</h4>
        <p>2201 Murfreesboro Pk D-201, Nashville, TN 37217</p>
      </div>
      <div>
        <h4 className="font-semibold">Contact</h4>
        <p>Phone: 615-782-9444</p>
        <p>Email: ContactUs@ecantn.org</p>
        <div className="flex space-x-4 mt-2">
          <Link href="https://facebook.com" aria-label="Facebook">
            <FaFacebook className="hover:text-white" />
          </Link>
          <Link href="https://twitter.com" aria-label="Twitter">
            <FaTwitter className="hover:text-white" />
          </Link>
        </div>
      </div>
    </div>
    <div className="text-center py-4 text-sm bg-gray-900">
      © {new Date().getFullYear()} Ethiopian Community Association of Nashville. All rights reserved.
    </div>
  </footer>
);

export default Footer;
