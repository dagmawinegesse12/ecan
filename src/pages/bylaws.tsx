// src/pages/bylaws.tsx
import type { NextPage } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Bylaws: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />

      {/* Hero Banner */}
      <div className="bg-green-600 py-12">
        <div className="max-w-4xl mx-auto text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold">Bylaws</h1>
          <p className="mt-2 text-lg">
            Browse and download our official bylaws document.
          </p>
        </div>
      </div>

      {/* PDF Viewer */}
      <main className="flex-1 bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <iframe
              src="/bylaw.pdf"
              className="w-full h-[80vh] md:h-[90vh] border-0"
              title="ECAN Bylaws"
            />
          </div>

          {/* Download Link */}
          <div className="text-center mt-6">
            <a
              href="/bylaws.pdf"
              download
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
            >
              Download Bylaws (PDF)
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Bylaws;
