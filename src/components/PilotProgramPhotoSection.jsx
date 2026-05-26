import pilotProgramImg from '../assets/Kilimo Pilot Program.jpg';

export default function PilotProgramPhotoSection() {
  return (
    <section className="pilot-photo-section">
      <div className="pilot-photo-wrapper">
        <img
          src={pilotProgramImg}
          alt="Farmers receiving training"
          className="pilot-photo-img"
        />
      </div>
      <p className="pilot-photo-caption">
        AgriScanAI pilot in partnership with the Kilimo Training Institute of
        Permaculture(KTIP)
        <br />
        23rd - 25th March, 2026 - Kakamega County
      </p>
    </section>
  );
}
