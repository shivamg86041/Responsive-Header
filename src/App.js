import React from "react";
import Header from "./Components/Header";

const App = () => {
  return (
    <>
      <Header />
      <main className="p-8 bg-gray-900 text-white">
        <section
          id="home"
          className="h-screen bg-gradient-to-r from-indigo-800 via-purple-700 to-pink-700 flex items-center justify-center"
        >
          <h1 className="text-4xl text-white">Home Section</h1>
        </section>

        <section
          id="about"
          className="h-screen bg-gradient-to-r from-green-600 via-teal-500 to-blue-500 flex items-center justify-center"
        >
          <h1 className="text-4xl text-white">About Section</h1>
        </section>

        <section
          id="services"
          className="h-screen bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500 flex items-center justify-center"
        >
          <h1 className="text-4xl text-white">Services Section</h1>
        </section>

        <section
          id="contact"
          className="h-screen bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 flex items-center justify-center"
        >
          <h1 className="text-4xl text-white">Contact Section</h1>
        </section>
      </main>
    </>
  );
};

export default App;
