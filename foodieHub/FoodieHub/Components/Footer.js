// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a
        href="https://www.linkedin.com/in/kapil-chaudhary-40a013204/"
        target="_blank"
        title="Kapil Chaudhary's Linkedin Profile"
      >
        Kapil Chaudhary
      </a>
      <i className="fa-solid fa-copyright"></i>
      {year}
      <strong>
        Foodie<span>Hub</span>
      </strong>
    </div>
  );
};

export default Footer;
