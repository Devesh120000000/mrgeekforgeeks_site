import React from 'react'
import Collapsible from '../components/Collapsible'

const CompanyRoles = () => (
  <div className="container mx-auto py-12 mt-10">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-cyan-400 text-glow">Company Roles</h2>
    <div className="space-y-4 max-w-4xl mx-auto">
      <Collapsible title="1. Executive Leadership (C-Suite)">
        <ul className="list-disc space-y-4 pl-5 pt-5">
          <li><strong>CEO</strong> – Chief Executive Officer</li>
          <li><strong>COO</strong> – Chief Operating Officer</li>
          <li><strong>CTO</strong> – Chief Technology Officer</li>
          <li><strong>CFO</strong> – Chief Financial Officer</li>
          <li><strong>CMO</strong> – Chief Marketing Officer</li>
        </ul>
      </Collapsible>

      <Collapsible title="2. Senior Management">
        <ul className="list-disc space-y-4 pl-5 pt-5">
          <li>Vice President (VP of Sales, VP of Engineering)</li>
          <li>Director (Director of Product, Director of HR)</li>
          <li>General Manager (GM)</li>
        </ul>
      </Collapsible>

      <Collapsible title="3. Middle Management (Team/Project Managers)">
        <ul className="list-disc space-y-4 pl-5 pt-5">
          <li>Project Manager</li>
          <li>Product Manager</li>
          <li>Engineering Manager</li>
          <li>HR Manager</li>
        </ul>
      </Collapsible>

      <Collapsible title="4. Individual Contributor/Specialist Roles">
        <ul className="list-disc space-y-4 pl-5 pt-5">
          <li>Software Engineer/Developer</li>
          <li>Data Scientist/Analyst</li>
          <li>UI/UX Designer</li>
          <li>Marketing Specialist</li>
          <li>Cybersecurity Analyst</li>
        </ul>
      </Collapsible>

      <Collapsible title="5. Entry-Level Positions">
        <ul className="list-disc space-y-4 pl-5 pt-5">
          <li>Associate Software Engineer</li>
          <li>Management Trainee</li>
          <li>Junior Analyst</li>
          <li>Sales Representative</li>
        </ul>
      </Collapsible>

      <Collapsible title="6. Support/Back-Office Roles">
        <ul className="list-disc space-y-4 pl-5 pt-5">
          <li>System Administrator</li>
          <li>IT Support Executive</li>
          <li>Admin Executive</li>
          <li>Customer Support Executive</li>
        </ul>
      </Collapsible>
    </div>
  </div>
)

export default CompanyRoles