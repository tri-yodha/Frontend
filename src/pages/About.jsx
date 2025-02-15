// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <main className="min-h-screen bg-gray-100">
      <section className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-purple-600 mb-6">About AtherAI</h1>
        <p className="text-gray-700 text-lg mb-4">
          AtherAI is an innovative educational platform designed to simplify complex concepts in mathematics and chemistry. 
          Our mission is to make learning accessible and engaging through dynamic, animated videos.
        </p>
        <p className="text-gray-700 text-lg mb-4">
          Using state-of-the-art AI and Manim-powered animations, AtherAI generates videos that break down challenging topics 
          into easy-to-understand visual explanations. Whether you're a student or an educator, AtherAI is here to enhance your 
          learning experience.
        </p>
        <p className="text-gray-700 text-lg mb-4">
          Our core features include:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Intelligent search that finds the most relevant educational videos.</li>
          <li>Accurate timestamps to jump to the exact part where a concept is explained.</li>
          <li>AI-generated explanations with detailed visualizations.</li>
          <li>Seamless user experience with a responsive and intuitive interface.</li>
        </ul>
        <p className="text-gray-700 text-lg">
          We are constantly evolving and adding new features. Stay tuned for more exciting updates!
        </p>
      </section>
    </main>
  );
};

export default About;
