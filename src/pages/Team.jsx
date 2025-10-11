import React from 'react'

const members = [
  { name: 'Rajat Ranjan Pratap Singh', role: 'Founder, CEO', img: '/images/PhotoR.jpeg' },
  { name: 'Aditya Kumar', role: 'Co-Founder, Manager', img: '/images/aPassport_Photo.jpeg' },
  { name: 'Suryansh Kumar', role: 'Co-Founder, Asst. Manager', img: '/images/SPassport_Photo.jpeg' },
  { name: 'Devesh Tripathi', role: 'Co-Founder, CMO', img: '/images/dPassport_Photo.jpeg' }
]

const Team = () => (
  <div className="container w-[95%] mx-auto mt-10 py-12">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-cyan-400 text-glow">Meet Our Team</h2>
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
      {members.map((m) => (
        <div key={m.name} className="glass-effect rounded-lg overflow-hidden text-center w-64 hover:scale-105 transition">
          <img src={m.img} alt={m.name} className="w-full  object-cover" />
          <div className="p-6 bg-slate-800/50">
            <h3 className="font-bold text-lg">{m.name}</h3>
            <p className="text-cyan-400">{m.role}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default Team