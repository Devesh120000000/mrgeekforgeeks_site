const members = [
  { name: 'Rajat Ranjan Pratap Singh', role: 'Founder , CEO', img: '/images/PhotoR.jpeg' },
  { name: 'Devesh Tripathi', role: 'Co-Founder , General Manager', img: '/images/dPassport_Photo.jpeg' },
  { name: 'Aditya Kumar', role: ' Manager', img: '/images/aPassport_Photo.jpeg' },
  { name: 'Suryansh Kumar', role: 'Asst. Manager', img: '/images/SPassport_Photo.jpeg' },
  { name: 'Ayush Kabdwal', role: ' Chief Advisor', img: '/images/Apassport.jpg' },
  { name: 'Shivam Singh', role: ' Ai Tools Trainer', img: '/images/sspass.jpg' },
  { name: 'Diksha Nayak', role: 'Software Development Trainer ', img: '/images/dy7Passport_Photo.jpeg' },
  { name: 'Arun Sharma', role:  'Cyber Security Trainer Cum Instructor', img: '/images/as.jpg' },
  { name: 'Prince Gupta', role: ' Java Trainer Cum Instructor',img: '/images/pg.jpg'}
        ]


const Team = () => (
  <div className="container w-[95%] mx-auto mt-10 py-12">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-cyan-400 text-glow">
      Meet Our Team
    </h2>
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
      {members.map((m) => (
        <div
          key={m.name}
          className="glass-effect rounded-lg overflow-hidden text-center w-64 hover:scale-105 transition"
        >
          <img src={m.img} alt={m.name} className="w-full object-cover" />
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
