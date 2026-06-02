import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import ScrollToTop from '../components/ScrollToTop';

// Merch images
import collarTshirtImg from '../assets/resources/AgriScanAI Collar Tshirt.png';
import whiteTshirtImg from '../assets/resources/AgriScanAI White T-shirts.png';
import capImg from '../assets/resources/AgriScanAI Cap.png';

// Business Card
import bizCardFrontImg from '../assets/resources/Business Card Front.png';
import bizCardBackImg from '../assets/resources/Business Card Back.png';

// File Holder
import fileHolderFrontImg from '../assets/resources/Front Page.png';
import fileHolderLeftImg from '../assets/resources/Left Interior.png';
import fileHolderRightImg from '../assets/resources/Right Interior.png';
import fileHolderBackImg from '../assets/resources/back Page.png';

// Brochure
import brochureFrontImg from '../assets/resources/Brochure Front.png';
import brochureBackImg from '../assets/resources/Brochure Back.png';

// Newsletter
import newsletterCoverImg from '../assets/newsletter-cover.jpg';

// PDFs — imported as Vite assets for proper bundling
import bizCardPdf from '../assets/resources/AgriScanAI Business Card.pdf';
import fileHolderPdf from '../assets/resources/AgriScanAI File Holder Design.pdf';
import brochurePdf from '../assets/resources/AgriScanAI Trifold Brochure.pdf';
import newsletterPdf from '../assets/documents/Good Partners Quarterly Newsletter.pdf';

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const linkedInPosts = [
  { urn: 'urn:li:activity:7466202343596953600', url: 'https://www.linkedin.com/feed/update/urn:li:activity:7466202343596953600' },
  { urn: 'urn:li:activity:7460619933119356928', url: 'https://www.linkedin.com/feed/update/urn:li:activity:7460619933119356928' },
  { urn: 'urn:li:activity:7459883942972694528', url: 'https://www.linkedin.com/feed/update/urn:li:activity:7459883942972694528' },
  { urn: 'urn:li:activity:7459145232253726720', url: 'https://www.linkedin.com/feed/update/urn:li:activity:7459145232253726720' },
  { urn: 'urn:li:activity:7457360128556765184', url: 'https://www.linkedin.com/feed/update/urn:li:activity:7457360128556765184' },
  { urn: 'urn:li:activity:7453394295769722880', url: 'https://www.linkedin.com/feed/update/urn:li:activity:7453394295769722880' },
  { urn: 'urn:li:activity:7452671098896248832', url: 'https://www.linkedin.com/feed/update/urn:li:activity:7452671098896248832' },
  { urn: 'urn:li:activity:7452275295115472897', url: 'https://www.linkedin.com/feed/update/urn:li:activity:7452275295115472897' },
  { urn: 'urn:li:activity:7444315893507031040', url: 'https://www.linkedin.com/feed/update/urn:li:activity:7444315893507031040' },
  { urn: 'urn:li:activity:7443234722245369857', url: 'https://www.linkedin.com/feed/update/urn:li:activity:7443234722245369857' },
  { urn: 'urn:li:activity:7441775319579037696', url: 'https://www.linkedin.com/feed/update/urn:li:activity:7441775319579037696' },
  { urn: 'urn:li:activity:7440368013255548928', url: 'https://www.linkedin.com/feed/update/urn:li:activity:7440368013255548928' },
  { urn: 'urn:li:activity:7434478858591948800', url: 'https://www.linkedin.com/feed/update/urn:li:activity:7434478858591948800' },
  { urn: 'urn:li:activity:7432391992145367040', url: 'https://www.linkedin.com/feed/update/urn:li:activity:7432391992145367040' },
];

/* ─────────────────────────────────────────────
   STYLE TOKENS
───────────────────────────────────────────── */
const S = {
  sectionPad: { padding: 'clamp(2.5rem,5vw,4rem) clamp(1.5rem,5vw,5vw)' },
  sectionTitle: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 'clamp(1.6rem,3vw,2.6rem)',
    fontWeight: 700,
    color: '#1C1C1E',
    margin: 0,
    lineHeight: 1.2,
  },
  eyebrow: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 'clamp(0.85rem,1.1vw,1rem)',
    fontWeight: 700,
    color: '#2E7D32',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    marginBottom: '0.5rem',
  },
  subtitle: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 'clamp(0.9rem,1.2vw,1.05rem)',
    color: '#57576A',
    lineHeight: 1.6,
    marginTop: '0.6rem',
    maxWidth: '620px',
  },
};

/* ─────────────────────────────────────────────
   SMALL COMPONENTS
───────────────────────────────────────────── */

/** Section header with eyebrow + title + optional subtitle */
function SectionHeader({ eyebrow, title, subtitle, align = 'center' }) {
  return (
    <div style={{ textAlign: align, marginBottom: '2.5rem' }}>
      <p style={S.eyebrow}>{eyebrow}</p>
      <h2 style={S.sectionTitle}>{title}</h2>
      {subtitle && <p style={{ ...S.subtitle, margin: align === 'center' ? '0.6rem auto 0' : '0.6rem 0 0' }}>{subtitle}</p>}
    </div>
  );
}

/** Image viewer modal */
function ImageModal({ images, startIndex, onClose }) {
  const [idx, setIdx] = useState(startIndex);
  const prev = () => setIdx(i => (i - 1 + images.length) % images.length);
  const next = () => setIdx(i => (i + 1) % images.length);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [idx]);

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0,0,0,0.88)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1rem',
      }}
    >
      <div onClick={e => e.stopPropagation()} style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        {/* Close */}
        <button onClick={onClose} style={{ position: 'absolute', top: '-2.5rem', right: 0, background: 'rgba(255,255,255,0.12)', border: 'none', color: '#fff', borderRadius: '50%', width: 36, height: 36, cursor: 'pointer', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>

        <img src={images[idx].src} alt={images[idx].label} style={{ maxWidth: '85vw', maxHeight: '78vh', objectFit: 'contain', borderRadius: '12px', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }} />

        <p style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', margin: 0 }}>{images[idx].label}</p>

        {images.length > 1 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button onClick={prev} style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', borderRadius: '50%', width: 40, height: 40, cursor: 'pointer', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>‹</button>
            <span style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif', fontSize: '0.85rem' }}>{idx + 1} / {images.length}</span>
            <button onClick={next} style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', borderRadius: '50%', width: 40, height: 40, cursor: 'pointer', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>›</button>
          </div>
        )}
      </div>
    </div>
  );
}

/** Merch card */
function MerchCard({ src, name }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setOpen(true)}
        style={{
          background: '#fff',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 4px 24px rgba(46,125,50,0.08)',
          border: '1px solid rgba(46,125,50,0.1)',
          cursor: 'pointer',
          transition: 'transform 0.22s, box-shadow 0.22s',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(46,125,50,0.15)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 24px rgba(46,125,50,0.08)'; }}
      >
        <div style={{ height: '220px', overflow: 'hidden', background: '#f9f9f9' }}>
          <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }} />
        </div>
        <div style={{ padding: '1rem 1.25rem 1.25rem' }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#1C1C1E', margin: 0 }}>{name}</p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: '#2E7D32', marginTop: '0.3rem' }}>Click to view full size</p>
        </div>
      </div>
      {open && <ImageModal images={[{ src, label: name }]} startIndex={0} onClose={() => setOpen(false)} />}
    </>
  );
}

/** Brand asset card with multiple images + optional PDF */
function BrandAssetCard({ title, description, images, pdfUrl, pdfLabel = 'Download PDF' }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalStart, setModalStart] = useState(0);

  const openAt = (i) => { setModalStart(i); setModalOpen(true); };

  return (
    <>
      <div style={{
        background: '#fff',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 4px 24px rgba(46,125,50,0.08)',
        border: '1px solid rgba(46,125,50,0.1)',
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* Image strip */}
        <div style={{ display: 'flex', gap: '4px', padding: '4px', background: '#f1faf7', flexWrap: images.length > 3 ? 'wrap' : 'nowrap' }}>
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => openAt(i)}
              style={{
                flex: '1 1 0',
                minWidth: images.length > 3 ? 'calc(50% - 4px)' : '0',
                height: images.length > 3 ? '130px' : '160px',
                overflow: 'hidden',
                borderRadius: '8px',
                cursor: 'pointer',
                background: '#e8f5e9',
              }}
            >
              <img src={img.src} alt={img.label} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.currentTarget.style.transform = ''}
              />
            </div>
          ))}
        </div>

        {/* Body */}
        <div style={{ padding: '1.25rem 1.5rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>
          <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 'clamp(1rem,1.4vw,1.2rem)', color: '#2E7D32', margin: 0 }}>{title}</h3>
          {description && <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: '#57576A', margin: 0, lineHeight: 1.55 }}>{description}</p>}

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: 'auto', paddingTop: '0.75rem', borderTop: '1px solid #f0f0f0' }}>
            <button
              onClick={() => openAt(0)}
              style={{ flex: '1 1 auto', padding: '0.6rem 1rem', borderRadius: '10px', border: '1.5px solid #2E7D32', background: 'transparent', color: '#2E7D32', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer', transition: 'background 0.2s, color 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#2E7D32'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#2E7D32'; }}
            >
              View Images ({images.length})
            </button>
            {pdfUrl && (
              <a
                href={pdfUrl}
                download
                style={{ flex: '1 1 auto', padding: '0.6rem 1rem', borderRadius: '10px', border: 'none', background: '#2E7D32', color: '#fff', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer', textDecoration: 'none', textAlign: 'center', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                {pdfLabel}
              </a>
            )}
          </div>
        </div>
      </div>

      {modalOpen && <ImageModal images={images} startIndex={modalStart} onClose={() => setModalOpen(false)} />}
    </>
  );
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function Resources() {
  useEffect(() => {
    document.title = 'Resources | AgriScanAI';
  }, []);

  return (
    <PageTransition>
      <ScrollToTop />
      <Navbar />

      {/* ── Hero ─────────────────────────────── */}
      <section style={{
        paddingTop: '130px',
        paddingBottom: '3rem',
        paddingLeft: 'clamp(1.5rem,5vw,5vw)',
        paddingRight: 'clamp(1.5rem,5vw,5vw)',
        background: '#fff',
        textAlign: 'center',
      }}>
        <p style={S.eyebrow}>Knowledge Hub</p>
        <h1 style={{ ...S.sectionTitle, fontSize: 'clamp(2rem,4.5vw,3.8rem)', maxWidth: '900px', margin: '0 auto' }}>
          Discover Insights &amp; Resources
        </h1>
        <p style={{ ...S.subtitle, margin: '1rem auto 0', maxWidth: '760px', fontSize: 'clamp(0.95rem,1.3vw,1.15rem)' }}>
          Access our latest research reports, presentation slides, brand assets, and comprehensive guides
          designed to empower the agricultural community.
        </p>
      </section>

      {/* ── Merch ───────────────────────────── */}
      <section style={{ ...S.sectionPad, background: '#F9FAFB' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <SectionHeader
            eyebrow="Official Merchandise"
            title="AgriScanAI Branded Merch"
            subtitle="Wear your support for agricultural innovation. Our official branded merchandise."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <MerchCard src={collarTshirtImg} name="AgriScanAI Collar T-shirt" />
            <MerchCard src={whiteTshirtImg} name="AgriScanAI White T-shirts" />
            <MerchCard src={capImg} name="AgriScanAI Cap" />
          </div>
        </div>
      </section>

      {/* ── Brand Assets ─────────────────────── */}
      <section style={{ ...S.sectionPad, background: '#fff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <SectionHeader
            eyebrow="Brand Assets"
            title="Official Brand Materials"
            subtitle="Click any image to view it full screen. Download the PDF version for printing."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.75rem' }}>

            {/* Business Card */}
            <BrandAssetCard
              title="AgriScanAI Business Card"
              description="Official double-sided business card design — front and back."
              images={[
                { src: bizCardFrontImg, label: 'Business Card — Front' },
                { src: bizCardBackImg, label: 'Business Card — Back' },
              ]}
              pdfUrl={bizCardPdf}
              pdfLabel="Download PDF"
            />

            {/* File Holder */}
            <BrandAssetCard
              title="AgriScanAI File Holder"
              description="Full presentation file holder design across all four panels."
              images={[
                { src: fileHolderFrontImg, label: 'File Holder — Front Page' },
                { src: fileHolderLeftImg, label: 'File Holder — Left Interior' },
                { src: fileHolderRightImg, label: 'File Holder — Right Interior' },
                { src: fileHolderBackImg, label: 'File Holder — Back Page' },
              ]}
              pdfUrl={fileHolderPdf}
              pdfLabel="Download PDF"
            />

            {/* Trifold Brochure */}
            <BrandAssetCard
              title="AgriScanAI Trifold Brochure"
              description="Full trifold brochure design — front and back panels."
              images={[
                { src: brochureFrontImg, label: 'Brochure — Front' },
                { src: brochureBackImg, label: 'Brochure — Back' },
              ]}
              pdfUrl={brochurePdf}
              pdfLabel="Download PDF"
            />

          </div>
        </div>
      </section>

      {/* ── Newsletter / Document ─────────────── */}
      <section style={{ ...S.sectionPad, background: '#F9FAFB' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <SectionHeader
            eyebrow="Reports & Newsletters"
            title="Latest Publications"
            subtitle="Research reports and quarterly newsletters from the AgriScanAI team."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {/* Newsletter card */}
            <div style={{ background: '#fff', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(46,125,50,0.08)', border: '1px solid rgba(46,125,50,0.1)', display: 'flex', flexDirection: 'column' }}>
              {/* Cover image — fully visible */}
              <div style={{ width: '100%', background: '#f8fcf8', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
                <img
                  src={newsletterCoverImg}
                  alt="Good Partners Quarterly Newsletter Cover"
                  style={{ width: '100%', height: 'auto', objectFit: 'contain', display: 'block', borderRadius: '8px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}
                />
              </div>

              {/* Body */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', flex: 1 }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 700, color: '#2E7D32', textTransform: 'uppercase', letterSpacing: '0.07em' }}>Newsletter · Q1 2026</span>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#1C1C1E', margin: 0 }}>Good Partners Quarterly Newsletter (Q1)</h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.88rem', color: '#57576A', margin: 0, lineHeight: 1.55 }}>Get our Q1 insights, project milestones, and updates directly from the team.</p>

                {/* Action buttons */}
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid #f0f0f0' }}>
                  <a
                    href="https://drive.google.com/file/d/17bG0ykfwXQY8rPYTtJyuXn-MyPtQT-Rn/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ flex: '1 1 auto', padding: '0.65rem 1rem', borderRadius: '10px', border: '1.5px solid #2E7D32', background: 'transparent', color: '#2E7D32', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.85rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', transition: 'background 0.2s, color 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#2E7D32'; e.currentTarget.style.color = '#fff'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#2E7D32'; }}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    Read Online
                  </a>
                  <a
                    href={newsletterPdf}
                    download
                    style={{ flex: '1 1 auto', padding: '0.65rem 1rem', borderRadius: '10px', border: 'none', background: '#2E7D32', color: '#fff', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.85rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Presentation ─────────────────────── */}
      <section style={{ ...S.sectionPad, background: '#fff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <SectionHeader
            eyebrow="Presentations"
            title="About Us Presentation"
            subtitle="Explore our journey, vision, and the innovative technology driving AgriScanAI forward."
          />
          <div style={{ position: 'relative', width: '100%', maxWidth: '960px', margin: '0 auto', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.12)', background: '#F9FAFB' }}>
            <div style={{ position: 'relative', width: '100%', height: 0, paddingTop: '56.25%' }}>
              <iframe
                loading="lazy"
                style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none' }}
                src="https://www.canva.com/design/DAG5aExjfpA/ZvE6sun-Ezo-HTQFGqxyjQ/view?embed"
                allowFullScreen="allowfullscreen"
                allow="fullscreen"
                title="AgriScanAI Presentation"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── LinkedIn Posts ────────────────────── */}
      <section style={{ ...S.sectionPad, background: '#F1FAF7' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <SectionHeader
            eyebrow="Social Media"
            title="Latest LinkedIn Updates"
            subtitle="Stay connected with our latest news, events, and agricultural insights on LinkedIn."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
            {linkedInPosts.map(({ urn, url }) => (
              <div
                key={urn}
                style={{ background: '#fff', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(46,125,50,0.08)', border: '1px solid rgba(46,125,50,0.1)' }}
              >
                <iframe
                  src={`https://www.linkedin.com/embed/feed/update/${urn}`}
                  height="420"
                  width="100%"
                  frameBorder="0"
                  allowFullScreen=""
                  title={`LinkedIn post ${urn}`}
                  style={{ display: 'block' }}
                  sandbox="allow-scripts allow-same-origin allow-popups"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter CTA ────────────────────── */}
      <section style={{ ...S.sectionPad, background: '#1b5e20', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '500px', height: '500px', background: 'rgba(52,211,153,0.12)', borderRadius: '50%', filter: 'blur(100px)', transform: 'translate(-50%,-50%)' }} />
          <div style={{ position: 'absolute', bottom: 0, right: 0, width: '500px', height: '500px', background: 'rgba(34,197,94,0.12)', borderRadius: '50%', filter: 'blur(100px)', transform: 'translate(50%,50%)' }} />
        </div>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '680px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, color: '#fff', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Stay Ahead of the Curve
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(0.95rem,1.3vw,1.1rem)', color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', lineHeight: 1.65 }}>
            Join our mailing list to receive the latest research, reports, and exclusive insights directly to your inbox.
          </p>
          <form style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
            <input
              type="email"
              placeholder="Enter your email address"
              style={{ flex: '1 1 260px', maxWidth: '380px', padding: '1rem 1.5rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.1)', color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', outline: 'none' }}
              required
            />
            <button
              type="submit"
              style={{ padding: '1rem 2rem', background: '#fff', color: '#1b5e20', border: 'none', borderRadius: '16px', fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap' }}
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </PageTransition>
  );
}
