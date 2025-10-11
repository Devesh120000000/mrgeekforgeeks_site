import React from 'react'

const Services = () => (
  <div className="container w-[90%] mx-auto mt-10 py-12 text-center">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-cyan-400 text-glow">Our Services</h2>
    <div className="grid md:grid-cols-3 gap-8 justify-center">
      <div className="glass-effect p-6 rounded-lg text-center hover:scale-105 transition">
        <h3 className="text-2xl font-semibold text-cyan-300 mb-2">Learning & Training</h3>
        <ul className="list-disc pl-6 text-left space-y-2">
          <li>Online coding bootcamps and workshops.</li>
          <li>Courses on AI, ML, Web Dev, and Cybersecurity.</li>
          <li>Project-based interactive learning.</li>
        </ul>
      </div>
      <div className="glass-effect p-6 rounded-lg text-center hover:scale-105 transition">
        <h3 className="text-2xl font-semibold text-cyan-300 mb-2">Development & Innovation</h3>
        <ul className="list-disc pl-6 text-left space-y-2">
          <li>Website & Mobile App Development.</li>
          <li>Custom software & automation tools.</li>
          <li>Technology consulting & product design.</li>
        </ul>
      </div>
      <div className="glass-effect p-6 rounded-lg text-center hover:scale-105 transition">
        <h3 className="text-2xl font-semibold text-cyan-300 mb-2">Community & Collaboration</h3>
        <ul className="list-disc pl-6 text-left space-y-2">
          <li>Hackathons, tech events, and mentorship.</li>
          <li>Open-source and collaborative projects.</li>
          <li>Career guidance & personal growth.</li>
        </ul>
      </div>
    </div>
  </div>
)

export default Services