import empoweringImg from '../assets/Empowering small-scale farmers with digital farming image.png';

export default function AboutEmpoweringSection() {
  return (
    <section className="about-empowering">
      <div className="about-empowering-card">
        <div className="about-empowering-text-side">
          <h2 className="about-empowering-title">
            Empowering small-scale farmers with digital farming
          </h2>
          <p className="about-empowering-desc">
            We understand how important they are in producing food for the world and the
            difficulties they face. Limited access to resources, technology, and information can
            make it hard for them to improve their farming. That&apos;s why we build Plantix, a free
            app that gives farmers access to information, technology, and farming tips.
          </p>
        </div>
        <div className="about-empowering-img-side">
          <img
            src={empoweringImg}
            alt="Farmers using digital technology"
          />
        </div>
      </div>
    </section>
  );
}
