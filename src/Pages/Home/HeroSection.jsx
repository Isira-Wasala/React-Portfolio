export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey,</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Isira Wasala</span>{" "}
            <br />
            
          </h1>
          <p className="hero--section-description">
          Currently pursuing a BSc (Hons) in Computer Science with a strong passion for research and an entrepreneurial mindset. An expert in software and web development, specializing in Java, Flutter (Dart), React, and HTML. Technical proficiency is complemented by a dedication to innovation and an unwavering commitment to excellence in every project.
            <br /> 
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
