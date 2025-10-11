import React, { useState } from 'react'

const Collapsible = ({ title, children }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="glass-effect rounded-lg">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className={`text-xl font-semibold text-cyan-300 w-full text-left p-4 flex justify-between items-center`}
      >
        {title}
        <span className="text-cyan-400 text-2xl">{open ? '−' : '+'}</span>
      </button>
      <div className={`${open ? 'max-h-[800px]' : 'max-h-0'} overflow-hidden transition-all duration-300`}>
        <div className="px-4 pb-4">{children}</div>
      </div>
    </div>
  )
}

export default Collapsible