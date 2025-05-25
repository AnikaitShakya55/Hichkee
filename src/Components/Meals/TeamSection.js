import React from "react";
import styles from "./TeamSection.module.css";

const teamMembers = [
  {
    name: "Chef Priya",
    role: "Head Chef",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAGaxbY-hS2iIjbaA6_tckqRDXLC-A3yOskA&s",
  },
  {
    name: "Chef Arjun",
    role: "Sous Chef",
    img: "https://img.freepik.com/free-photo/chef-cooking-kitchen-while-wearing-professional-attire_23-2151208326.jpg?ga=GA1.1.1509673054.1738405538&semt=ais_hybrid&w=740",
  },
  {
    name: "Chef Nisha",
    role: "Pastry Expert",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvSGa9FB-MtWsfswXmIJ2VvRvOTE7R0F_c8tERlJkvn2HqWBkzRqpYaAGO5HpMnBS__bA&usqp=CAU",
  },
  {
    name: "Chef Kabir",
    role: "Grill Master",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbL1So03GBM0gSOGGTkO0XXCGaY4vmgtjynhjetlXKVY8SjTkue2af7nYBd9dFJmMyTP4&usqp=CAU",
  },
];

const TeamSection = () => {
  return (
    <div className={styles.teamSection}>
      <h2>Meet Our Culinary Team</h2>
      <div className={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.card}>
            <img src={member.img} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
