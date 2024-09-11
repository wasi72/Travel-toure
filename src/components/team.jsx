import '../assets/style/team.css';
import Img1 from '../assets/imgs/person_3.jpg';
import Img2 from '../assets/imgs/person_1.jpg';
import Img3 from '../assets/imgs/person_2.jpg';
const TeamComponent = () => {
  const teamMembers = [
    {
      name: 'Vince Richardson',
      role: 'CEO, CO-FOUNDER',
      imgSrc: Img1, 
    },
    {
      name: 'Jean Love',
      role: 'CTO, CO-FOUNDER',
      imgSrc: Img2, 
    },
    {
      name: 'Jeff Stark',
      role: 'MARKETER, CO-FOUNDER',
      imgSrc: Img3, 
    },
    {
      name: 'Vince Richardson',
      role: 'CEO, CO-FOUNDER',
      imgSrc: Img1, 
    },
    {
      name: 'Jean Love',
      role: 'CTO, CO-FOUNDER',
      imgSrc: Img2, 
    },
    {
      name: 'Jeff Stark',
      role: 'MARKETER, CO-FOUNDER',
      imgSrc: Img3, 
    },
  ];

  return (
    <section className="team-section">
      <h2 className="team-title">Team</h2>
      <p className="team-description">
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
        there live the blind texts. Separated they live in Bookmarksgrove right at the coast of 
        the Semantics, a large language ocean.
      </p>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.imgSrc} alt={member.name} className="team-img" />
            <div className="team-info">
              <h3 className="team-role">{member.role}</h3>
              <h2 className="team-name">{member.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamComponent;
