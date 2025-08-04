// src/pages/events.tsx
import type { NextPage } from "next";
import Image from "next/image";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { FiCalendar, FiMapPin } from "react-icons/fi";

interface Event {
  id: string;
  title: string;
  datetime: string;
  location: string;
  image: string;
  description?: string;
}

const events: Event[] = [
    {
    id: "annual-meeting",
    title: "ECAN Annual Meeting 2025",
    datetime: "January 26, 2025 • 2:30 PM – 4:30 PM",
    location: "Green Hills Branch Library, Nashville, TN",
    image: "http://www.ecantn.org/assets/images/events/AnnualMeeting_2025.jpeg",
    description:
      "All members are invited to our annual meeting where we’ll review last year’s accomplishments, elect new board members, and chart our path forward.",
  },
  {
    id: "fundraiser",
    title: "ECAN Fundraising Dinner with Comedian Meskerem",
    datetime: "February 22, 2025 • 4:00 PM",
    location: "Smyrna Town Event Center, Smyrna, TN",
    image: "http://www.ecantn.org/assets/images/events/FundRaising_2025.jpeg",
    description:
      "Join us for an evening of laughter and community as we raise funds to support ECAN’s mission. Dinner will be served, followed by a special performance by Meskerem.",
  }
  
];

const Events: NextPage = () => (
  <div className="flex flex-col min-h-screen">
    <Nav />

    {/* Hero Banner */}
    <div className="bg-gradient-to-r from-green-600 to-green-400 py-20">
      <div className="max-w-4xl mx-auto px-4 text-center text-white">
        <h1 className="text-5xl font-extrabold mb-4">Upcoming ECAN Events</h1>
        <p className="text-lg md:text-xl">
          Stay connected and engaged! Below are our next events—mark your
          calendar, invite friends, and be part of our growing community.
        </p>
      </div>
    </div>

    <main className="max-w-7xl mx-auto px-4 py-16 space-y-12">
      {/* Section Heading */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-4">Featured Events</h2>
        <div className="h-1 w-24 bg-green-600 mx-auto rounded"></div>
      </div>

      {/* Event Cards */}
      <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2">
        {events.map((e) => (
          <div
            key={e.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          >
                       <div className="w-full">
             <Image
                src={e.image}
                alt={e.title}
                // Tell Next/Image to size responsively:
                width={1000}                 // approximate flyer width
                height={1400}                // approximate flyer height
                style={{ width: "100%", height: "auto" }}
              />
            </div>

            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-semibold">{e.title}</h3>
              <div className="flex items-center text-gray-600">
                <FiCalendar className="mr-2 text-lg" />
                <span>{e.datetime}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FiMapPin className="mr-2 text-lg" />
                <span>{e.location}</span>
              </div>
              {e.description && (
                <p className="text-gray-700">{e.description}</p>
              )}
              
            </div>
          </div>
        ))}
      </div>
    </main>

    <Footer />
  </div>
);

export default Events;
