const experience = ()=>{
    
 const services = [
    { id: 1, title: "Good Foods", description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.", icon: "🍽️" },
    { id: 2, title: "Travel Anywhere", description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.", icon: "🌍" },
    { id: 3, title: "Airplane", description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.", icon: "✈️" },
    { id: 4, title: "Beach Resort", description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.", icon: "🏖️" },
    { id: 5, title: "Mountain Climbing", description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.", icon: "🏔️" },
    { id: 6, title: "Hot Air Balloon", description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.", icon: "🎈" },
  ];
  return(
    <div className="grid-container">
      {services.map((service) => (
        <div key={service.id} className="grid-item">
          <div className="icon">{service.icon}</div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};
export default experience;