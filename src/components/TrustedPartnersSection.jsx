import actsLogo from '../assets/Partners Logo/ACTS-LOGO.svg';
import aicadLogo from '../assets/Partners Logo/AICAD-LOGO.svg';
import anganiLogo from '../assets/Partners Logo/ANGANI-LOGO.svg';
import finasLogo from '../assets/Partners Logo/FINAS-LOGO.svg';
import fortuneLogo from '../assets/Partners Logo/FORTUNE-CREADIT-LOGO.svg';
import foundersLiveLogo from '../assets/Partners Logo/FOUNDERS-LIVE-LOGO.svg';
import igasitectLogo from '../assets/Partners Logo/IGASITECT-LOGO.svg';
import inkomokoLogo from '../assets/Partners Logo/INKOMOKO-LOGO.svg';
import kilimoLogo from '../assets/Partners Logo/KILIMO-LOGO.svg';
import mercyCorpsLogo from '../assets/Partners Logo/MERCY-CORPS-LOGO.svg';
import nairobiStartupLogo from '../assets/Partners Logo/NAIROBI-STARTUP-LOGO.svg';

const partners = [
  { src: actsLogo, alt: 'ACTS' },
  { src: aicadLogo, alt: 'AICAD' },
  { src: anganiLogo, alt: 'Angani' },
  { src: finasLogo, alt: 'FINAS' },
  { src: fortuneLogo, alt: 'Fortune Credit' },
  { src: foundersLiveLogo, alt: 'Founders Live' },
  { src: igasitectLogo, alt: 'Igasitect' },
  { src: inkomokoLogo, alt: 'Inkomoko' },
  { src: kilimoLogo, alt: 'Kilimo' },
  { src: mercyCorpsLogo, alt: 'Mercy Corps' },
  { src: nairobiStartupLogo, alt: 'Nairobi Startup Summit' },
];

export default function TrustedPartnersSection() {
  // Duplicate the list so the marquee loops seamlessly
  const track = [...partners, ...partners];

  return (
    <section className="partners-section">
      <div className="partners-inner">
        <p className="partners-eyebrow">OUR TRUSTED PARTNERS</p>

        <div className="partners-marquee-wrapper" aria-label="Partner logos">
          <div className="partners-marquee-track">
            {track.map((p, i) => (
              <div className="partners-logo-item" key={i}>
                <img src={p.src} alt={p.alt} className="partners-logo-img" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
