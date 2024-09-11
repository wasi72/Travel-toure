import Person_1 from '../assets/imgs/person_1.jpg';
import Person_2 from '../assets/imgs/person_2.jpg';
import Person_3 from '../assets/imgs/person_3.jpg';
import '../assets/style/customer.css';
const testimonials = [
  {
    id: 1,
    name: 'Clare Gupta',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    image: Person_1,
  },
  {
    id: 2,
    name: 'Rogie Slater',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    image: Person_2,
  },
  {
    id: 3,
    name: 'John Doe',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    image: Person_3,
  }
];

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="testimonial-card">
          <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
          <p className="testimonial-text">“{testimonial.text}”</p>
          <p className="testimonial-author">— {testimonial.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
