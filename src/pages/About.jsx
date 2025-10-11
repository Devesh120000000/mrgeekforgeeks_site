import React from 'react'

const About = () => (
  <div className="container mx-auto mt-10 py-12 w-[90%]">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-cyan-400 text-glow">About Us</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="glass-effect p-6 rounded-lg text-center hover:scale-105 transition">
        <h3 className="text-xl font-bold mb-2 text-cyan-300">Company Overview</h3>
<p>We are a passionate team of innovators, learners, and creators who believe in the power of technology and knowledge-sharing. At Mr Geek for Geeks, our mission is to build a community where skills meet opportunities and ideas turn into reality.</p>      </div>
      <div className="glass-effect p-6 rounded-lg text-center hover:scale-105 transition">
        <h3 className="text-xl font-bold mb-2 text-cyan-300">Who We Are</h3>
        <ul className="list-disc pl-6 text-left space-y-2">
          <li>A team of tech enthusiasts, developers, designers, educators, and creators.</li>
<li>Dedicated to making learning simple, practical, and accessible for everyone.</li>          <li>Inspired to collaborate, innovate, and grow together.</li>
        </ul>
      </div>
      <div className="glass-effect p-6 rounded-lg text-center hover:scale-105 transition">
        <h3 className="text-xl font-bold mb-2 text-cyan-300">What We Do</h3>
        <ul className="list-disc pl-6 text-left space-y-2">
          <li>Website & Mobile App Development solutions.</li>
          <li>Custom software and technology consulting.</li>
          <li>AI-driven products and automation tools.</li>
        </ul>
      </div>
      <div className="glass-effect p-6 rounded-lg text-center hover:scale-105 transition">
        <h3 className="text-xl font-bold mb-2 text-cyan-300">Our Vision</h3>
        <p>To empower individuals with skills and knowledge, so they can create, contribute, and make a difference in society.</p>
      </div>
    </div>
    <p className='mt-10 flex justify-center items-center text-xl'>Together, we build, learn, and grow because at Mr Geek for GEEKS, your success is our mission.</p>
  </div>
)

export default About
