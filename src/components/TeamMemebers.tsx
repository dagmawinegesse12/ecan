// src/components/TeamSection.tsx
import React from "react";
import Image from "next/image";
import { MdEmail } from "react-icons/md";

export interface TeamMember {
  name: string;
  title: string;
  email: string;
  photo: string;
}

interface TeamSectionProps {
  members: TeamMember[];
}

const TeamSection: React.FC<TeamSectionProps> = ({ members }) => (
  <section className="py-16 bg-white w-full">
    <h2 className="text-4xl font-extrabold text-center mb-12">
      Meet Our Team
    </h2>
    <div className="w-full px-4">
      <div className="grid gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {members.map((m, i) => (
          <div
            key={i}
            className="
              bg-white 
              rounded-3xl 
              p-10 
              shadow-lg 
              hover:shadow-2xl 
              transition-transform 
              transform 
              hover:-translate-y-2 
              duration-300
            "
          >
            {/* Photo with gradient ring */}
            <div className="mx-auto w-48 h-48 rounded-full bg-gradient-to-tr from-green-400 to-blue-500 p-1 mb-8">
              <div className="relative w-full h-full bg-white rounded-full overflow-hidden">
                <Image
                  src={m.photo}
                  alt={m.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Name and Title */}
            <h3 className="text-2xl font-semibold text-center mb-2">
              {m.name}
            </h3>
            <p className="text-green-600 text-center italic mb-6">
              {m.title}
            </p>

            {/* Email */}
            <div className="flex justify-center">
              <MdEmail className="mr-2 text-2xl text-green-500" />
              <a
                href={`mailto:${m.email}`}
                className="text-gray-700 hover:text-gray-900 break-all"
              >
                {m.email}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
