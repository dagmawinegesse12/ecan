// src/pages/about.tsx
import type { NextPage } from "next";
import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { AiOutlineHistory } from "react-icons/ai";
import TeamSection, {TeamMember} from "@/components/TeamMemebers";

const historySections = [
  {
    title: "The Early Years (1980s)",
    text: `The Ethiopian Community Association in Nashville has its roots back in the 1980’s with a small group consisting of Major Girma, Sister Yirga and few others with dedicated inspiration to build a strong community. There is no record that the initially established organization was registered as a nonprofit organization, but it existed and assisted many Ethiopians in Nashville.`,
  },
  {
    title: "Formal Registration (March 12, 1996)",
    text: `The Ethiopian community in Nashville, under its current name, was formed on March 12, 1996. It was registered by Dawit Aynachew who became its first chairman. Rubka Tamerat was its secretary, and Sister Yirga was the Treasurer. The second wave of formation started when groups of friends who used to gather around the Bellevue area for social events and later on began “Equb” (An Ethiopian style savings plan) determined to formally organize and start a nonprofit organization.`,
  },
  {
    title: "A Founder’s Legacy (April 5, 1996)",
    text: `On April 5, 1996 (in the same year ECAN was registered), the community lost one of its ardent supporters and founder Major Girma Damte. The fact that he was instrumental in the formation of the community was memorialized in his eulogy. The loss of his joyful and On April 5, 1996 (in the same year ECAN was registered), the community lost one of its ardent supporter and founder Major Girma Damte. The fact that he was instrumental in the formation of the community was memorialized in his eulogy. The loss of his joyful and entertaining appearance was captured in the same eulogy by the following words:

“ሐዘናችን በዛ አበቃ ሳቃችን  
ነፍሳትን ለማሳቅ ሄደና ግርማችን!!!”`,
  },
  {
    title: "Expanding Presence (Late ’90s–2000s)",
    text: `The name ECAN was meant to remind us that we Ethiopians Can make it in Nashville. It was our, “Yes We Can” before the term was popularized by President Obama. The formation of the community has strengthened the formation of other faith-based organizations and ECAN’s contribution in making the community’s presence felt around Nashville was pivotal. ECAN was one of the oldest participants in the annual International Food and culture gatherings in Vanderbilt’s Sarratt Center and later on in Centennial Mall.`,
  },
  {
    title: "Continuing the Mission (Today)",
    text: `Throughout its existence, ECAN has worked tirelessly to help the Ethiopian community in Nashville and to showcase our rich cultural heritage to the wider Nashville community. Yet, there is much to do and we need all the support of our members to create a knowledgeable, empowered, responsible, productive, collaborative, and engaged Ethiopian community in Nashville, while preserving and promoting our unique cultural tradition and diverse heritage.`,
  },
];

const team: TeamMember[] = [
  {
    name: "Tewodros Manaye",
    title: "President",
    email: "TewodrosM@ecantn.org",
    photo: "http://www.ecantn.org/assets/images/about-us/Tewodros.png",
  },
  {
    name: "Dr. Hanna Alemu",
    title: "Vice President",
    email: "HannaA@ecantn.org",
    photo: "http://www.ecantn.org/assets/images/about-us/HannaAlemu.jpeg",
  },
  {
    name: "Yonas Hagos",
    title: "Secretary",
    email: "YonasHagos@ecantn.org",
    photo: "http://www.ecantn.org/assets/images/about-us/YonasH.jpeg",
  },
  {
    name: "Afework Wolde",
    title: "Treasury",
    email: "AfeworkW@ecantn.org",
    photo: "http://www.ecantn.org/assets/images/about-us/AfeworkWolde.jpeg",
  },
  {
    name: "Mahelat Endatresaw",
    title: "Youth Director",
    email: "MahelatE@ecantn.org",
    photo: "http://www.ecantn.org/assets/images/about-us/MaheletE.jpeg",
  },
  {
    name: "Zemenay Molla",
    title: "Planning Director",
    email: "ZemenayM@ecantn.org",
    photo: "http://www.ecantn.org/assets/images/about-us/Zemenay.jpeg",
  },
];

const About: NextPage = () => (
  <div className="flex flex-col">
    <Nav />

    {/* Hero Banner (color only) */}
    <div className="bg-gradient-to-r from-green-600 to-green-400 py-20">
      <div className="max-w-3xl mx-auto text-center text-white px-4">
        <AiOutlineHistory className="mx-auto mb-4 text-5xl" />
        <h1 className="text-4xl md:text-5xl font-extrabold">Our History</h1>
        <p className="mt-4 text-lg md:text-xl">
          A journey of community, culture, and shared purpose.
        </p>
      </div>
    </div>

    <main className="max-w-4xl mx-auto px-4 py-16 space-y-12">
      {historySections.map((sec, i) => (
        <section
          key={i}
          className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-green-500"
        >
          <h2 className="text-2xl font-bold mb-4">{sec.title}</h2>
          {sec.text.split("\n\n").map((para, j) => (
            <p key={j} className="text-gray-700 leading-relaxed mb-4">
              {para}
            </p>
          ))}
          {sec.text.includes("“") && (
            <blockquote className="border-l-4 border-green-300 pl-4 italic text-gray-600 mt-4">
              {sec.text.match(/“(.+?)”/)?.[1]}
            </blockquote>
          )}
        </section>
      ))}


    </main>

    <TeamSection members={team} />

    {/* Footer */}
    <Footer />
  </div>
);

export default About;
