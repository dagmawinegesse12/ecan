
// src/pages/index.tsx
import type { NextPage } from "next";
import React from "react";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import HeroCarousel, { Slide } from "../components/HeroCarousel";
import { FaCheckCircle } from "react-icons/fa";

const slides: Slide[] = [
  { src: "https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/508107744_712285921548699_8204111842452596508_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=aU_ihc2Z4qIQ7kNvwGMZ2_Z&_nc_oc=AdmXsJlNpOu0Uswu3pvKZRID5O43Kk5NHFEPeaPNay_ELfNwZ948Xyt-OWVheq9L8r6Z2xeAWhutWuuUSJTDpGWL&_nc_zt=23&_nc_ht=scontent-atl3-2.xx&_nc_gid=w0BujXOdLAbz2BYpSLfuqQ&oh=00_AfT2ln3NgyzadsIBXMQc-jHVmlZUjDlDEEMDD4DvczQE5g&oe=68953634", alt: "Event Photo 2" },
  { src: "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/513089399_721992137244744_2834172309449224561_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=n4-rdkuOLpoQ7kNvwFjo4fj&_nc_oc=AdnLT_s40GE2bpHQZVYsOuoWuCrepiYwtYSovA6xN9XjFHbS00JOw9YxOTsv2sCuJbd8y2_RhzKpCy9e4oq45DuO&_nc_zt=23&_nc_ht=scontent-atl3-1.xx&_nc_gid=w0BujXOdLAbz2BYpSLfuqQ&oh=00_AfRR7gLdnIqz94hGIBIvUmbCmu07KNP0fPFS7ZxSs5WRHg&oe=689550EA", alt: "Event Photo 1" },
  { src: "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/508678920_712285878215370_4452346788201430446_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=eS1FMxJZDvYQ7kNvwEbW5Oq&_nc_oc=Adm0KyEamsGfLJDHXf32e93O6zXHA5xM5ASkCMMO9PIVAvedo1CULBAtMjBrvLMUpxUH22ziq1waczAHoZDBA276&_nc_zt=23&_nc_ht=scontent-atl3-1.xx&_nc_gid=w0BujXOdLAbz2BYpSLfuqQ&oh=00_AfSnTm2sNi4kHiE-rXPQuCrxhHNm3cGQTYvleFmeoqsDJg&oe=689540D1", alt: "Event Photo 3" },
  { src: "https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/508419701_712285831548708_1442020440025324409_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=1qtPtuNuE9EQ7kNvwFEWzzw&_nc_oc=Admgnoa_wjcgTUyiy1cg2OTZjMQB8RVPepZEEzxNZII7xxSjqtk2CGmnYMqWZkNPXMwd0UxSkYiJ8Z4XpzNOp7dw&_nc_zt=23&_nc_ht=scontent-atl3-2.xx&_nc_gid=w0BujXOdLAbz2BYpSLfuqQ&oh=00_AfRXi2w5OFmotUdmWoPAd-YdRvxRokb7oRGwIjE5TwRl2A&oe=689553B2", alt: "Event Photo 4" },
  { src: "https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/508378014_712285804882044_7108607085576483450_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=DZL9Csnd1vMQ7kNvwEfXnqL&_nc_oc=Adk88ymtwmSTg3UBCcrZgRZBtRXY81rz0_2qXk1eY7yvYqQqxeQ4Tx_vI_MThGjt0yeXTJmyt1GhFBloWA9l9MAq&_nc_zt=23&_nc_ht=scontent-atl3-2.xx&_nc_gid=9s3z9LpfVhfoklfzOJI_Yg&oh=00_AfQIh1lTaA3aldvPffkrMVGX8-w5UoLToRpVWnmxPd5L4g&oe=68953F32", alt: "Event Photo 5" },
  { src: "https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/508192622_712285774882047_3204476299432094399_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8DOklbrIIo8Q7kNvwEPKxhm&_nc_oc=AdnSXUn-KszpJvhy-2oyF2EQFyPTBgioEcyNRL1EPUt4fW1goK5V-rcw1zlf0mHDbRGEE8TRgzaiUV3EdNUVeU_d&_nc_zt=23&_nc_ht=scontent-atl3-2.xx&_nc_gid=9s3z9LpfVhfoklfzOJI_Yg&oh=00_AfS9iFcaHzL0XB7jSR_k8SW0e7GNZvyTbS4wLhJI7HdEiQ&oe=68953934", alt: "Event Photo 6" }
];

const Home: NextPage = () => (
  <div className="flex flex-col">
    <Nav />
    {/* inside your HeroCarousel slide map, just for testing: */}
   

    {/* Hero Carousel */}
    <div className="-mt-12">
    <HeroCarousel slides={slides} />
    </div>
    {/* Cards Section */}
    <section className="px-4 pb-16 -mt-16 z-10 relative">
      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <article className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition">
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed">The Ethiopian Community Association in Nashville (ECAN) is a non-profit organization that aims to build a knowledgeable, empowered, responsible, productive, collaborative, and engaged Ethiopian community in Nashville while preserving and promoting our unique cultural tradition and diverse heritage.</p>
        </article>
        <article className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition">
          <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
          <div className="space-y-4">
            {[
              "Serve educational, cultural, psychological, and socio-economic needs by mobilizing our community.",
              "Foster informed Ethiopians through awareness, networking, education, and youth mentorship.",
              "Unite Ethiopians and enrich Nashville through our culture and heritage."
            ].map((text, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <FaCheckCircle className="text-green-500 mt-1" />
                <p className="text-gray-700 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </article>
        <article className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition">
          <h3 className="text-2xl font-bold mb-4">Upcoming Event</h3>
          <p className="text-gray-700 mb-6 leading-relaxed"><strong>ECAN Annual Meeting 2025</strong><br />Sunday, January 26 | 2:30PM – 4:30PM<br />Green Hills Branch Library<br />3701 Benham Avenue, Nashville, TN 37215</p>

          <p className="text-gray-700 mb-6 leading-relaxed"><strong>ECAN Fundraising Dinner with Comedian Meskerem</strong><br />February, January 22 | 4:00PM<br />Smyrna Town Event Center<br />Smyrna, TN</p>
          <Link href="/events" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition">Learn More</Link>
        </article>
        
      </div>
    </section>
    

    <Footer />
  </div>
);

export default Home;
