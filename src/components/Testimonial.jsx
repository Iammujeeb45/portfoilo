// import React from "react";

// const Testimonial = () => {
//   return (
//     <div id="testimonial">
//       <h2>Testimonial</h2>

//       <section>
//         <TestimonialCard
//           name={"HTML"}
//           // feedback={"Your Teaching skills are so good."}
//           imgSrc={"https://www.fita.in/wp-content/uploads/2023/07/Front-End-Development.jpg"} 

//         />

//         {/* <TestimonialCard
//           name={"Ramzi"}
//           feedback={
//             "Wow what a portfolio, doesn't expected this to be on youtube!"
//           }
//         />

//         <TestimonialCard
//           name={"Sundar Pichai"}
//           feedback={"Amazing seems like you should the Google CEO"}
//         /> */}
//       </section>
//     </div>
//   );
// };

// const TestimonialCard = ({ name, feedback,imgSrc }) => (
//   <article>
   
//     <h4>{name}</h4>
//     <p>{feedback}</p>
//     <img
//       src="https://www.fita.in/wp-content/uploads/2023/07/Front-End-Development.jpg"
//       alt="User"
//     />
//   </article>
// );

// export default Testimonial;


// import React from "react";

// const Testimonial = () => {
//   return (
//     <div id="testimonial">
//       <h2>Testimonial</h2>

//       <section>
//         <TestimonialCard
//           name={"HTML"}
//           imgSrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf1BkPIims4q2tXEWL0KPDh6-zfRbasAOmNg&s"} 
//         />
//         <TestimonialCard
//           name={"HTML"}
//           imgSrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf1BkPIims4q2tXEWL0KPDh6-zfRbasAOmNg&s"} 
//         />
//         <TestimonialCard
//           name={"HTML"}
//           imgSrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf1BkPIims4q2tXEWL0KPDh6-zfRbasAOmNg&s"} 
//         />
//         <TestimonialCard
//           name={"HTML"}
//           imgSrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf1BkPIims4q2tXEWL0KPDh6-zfRbasAOmNg&s"} 
//         />
//       </section>
//     </div>
//   );
// };

// const TestimonialCard = ({ name,  imgSrc }) => (
//   <article className="testimonial-card">
//     {/* Image on top */}
//     <img src={imgSrc} alt={name} className="testimonial-image" />

//     {/* Text below */}
//     <h2>{name}</h2>
    
//   </article>
// );

// export default Testimonial;


import React from "react";

const technologies = [
  { name: "HTML", imgSrc: "https://static.vecteezy.com/system/resources/previews/001/416/705/non_2x/html5-emblem-orange-shield-and-white-text-vector.jpg" },
  { name: "CSS", imgSrc: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
  { name: "JavaScript", imgSrc: "https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png" },
  { name: "React JS", imgSrc: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" }
];

const Testimonial = () => {
  return (
    <div id="technologies">
      <h2>Technologies</h2>

      <section>
        {technologies.map((tech, index) => (
          <TestimonialCard key={index} name={tech.name} imgSrc={tech.imgSrc} />
        ))}
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, imgSrc }) => (
  <article className="testimonial-card">
    <img src={imgSrc} alt={name} className="testimonial-image" />
    <h2>{name}</h2>
  </article>
);

export default Testimonial;
