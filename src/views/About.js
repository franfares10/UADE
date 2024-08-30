import { useLocation } from 'react-router-dom';

const teamMembers = [
    { id: 1, name: "Alice Johnson", position: "CEO", photo: "https://via.placeholder.com/150" },
    { id: 2, name: "Bob Smith", position: "CTO", photo: "https://via.placeholder.com/150" },
    { id: 3, name: "Carol White", position: "Lead Designer", photo: "https://via.placeholder.com/150" }
  ];
  
  const historyEvents = [
    { year: "2010", description: "Company founded and first version of our product released." },
    { year: "2015", description: "Achieved 10,000 customers worldwide." },
    { year: "2020", description: "Expanded our service to include new innovative features." }
  ];


const About = () => {
    const location = useLocation();
    const { ejemplo } = location.state || {};
    return (
        <div className="container mx-auto px-4">
        <h1>{ejemplo}</h1>
        <div className="text-center py-10">
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="text-xl mt-3">To deliver outstanding solutions and services that empower our clients.</p>
        </div>
  
        <div className="py-10">
          <h3 className="text-2xl font-bold text-center mb-6">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {teamMembers.map(member => (
              <div key={member.id} className="p-4 shadow-lg rounded-lg text-center hover:shadow-xl transition-shadow duration-300">
                <img src={member.photo} alt={member.name} className="w-24 h-24 rounded-full mx-auto"/>
                <h4 className="mt-2 font-semibold">{member.name}</h4>
                <p className="text-sm text-gray-600">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
  
        <div className="py-10">
          <h3 className="text-2xl font-bold text-center mb-6">Our History</h3>
          <ul className="timeline">
            {historyEvents.map(event => (
              <li key={event.year} className="mb-4 ml-4">
                <p className="text-lg font-bold">{event.year}</p>
                <p className="text-gray-600">{event.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
export default About;