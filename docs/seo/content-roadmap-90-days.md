# AgriScanAI — 90-Day Content Roadmap

_Prepared: 16 October 2026 · Companion to [keyword-research.md](./keyword-research.md)_

**Goal:** win the organisation-intent searches no Kenyan product currently answers (digital extension, programme M&E, farmer profiling), and earn topical authority on high-need farmer topics (fall armyworm, MLN, maize diseases) with reviewed, well-cited guides that lead readers to the app or a pilot.

**Scope:** 3 new pages + 12 articles. Quality over volume — roughly one article per week.

> **Do not fabricate.** Anything marked **[GP DATA]** needs verified Good Partners data (pilot results, farmer numbers, accuracy, crops covered, testimonials with consent). If the data is not available, publish without that section — do not estimate.

## 1. Decisions

### URL structure: `/resources/<slug>` (recommended)
- `/resources` already exists in navigation and holds brochure, newsletter and LinkedIn posts — adding a **"Guides"** section there consolidates link equity in one hub instead of launching a thin new `/blog` section.
- The planned content is evergreen guidance, not dated news; `/blog` implies a chronological feed.
- Event/news items stay under `/events/<slug>`.
- Requirement: each `/resources/<slug>` route must render unique title, meta description, canonical, H1 and body HTML at build time (prerender), and be listed in the XML sitemap. Add `Article` + `FAQPage` structured data (only for FAQs visibly on the page) and `BreadcrumbList`.

### New pages (distinct intent only)

| URL | Primary intent | Why a separate page is justified | Build week |
|---|---|---|---|
| `/solutions/crop-disease-detection` | crop disease identification app Kenya | Product intent dominated by PlantVillage Nuru / Plantix news coverage; `/solutions` can't target it and the general features list at the same time. | Wk 1–2 |
| `/solutions/programme-monitoring` | farmer programme M&E / monitoring tool for agriculture programmes | SERP is FAO toolkits and generic survey tools — no Kenyan product page answers it. Buyer = NGO/agency (highest value). | Wk 1–2 |
| `/solutions/digital-extension` | digital extension services Kenya (for programmes & counties) | Distinct from M&E (advisory delivery vs measurement). Hosts Mwanedu AI + Swahili advisory. | Wk 3 |

**Not recommended yet:** separate cooperative/AgriPay page (site lacks enough detail on AgriPay to support a full page — revisit when documented); climate/carbon page (avoid carbon-credit claims until a project exists); `/download` page (the homepage handles the APK).

Each new page needs: answer-first intro, feature explanation using only site-stated facts, "who it's for", FAQ (from keyword-research §6), CTA (`/pilot-program` for organisations; APK download for farmers), and internal links to 2–3 supporting articles.

## 2. Article plan (12)

Abbreviations — PM = `/solutions/programme-monitoring`, CD = `/solutions/crop-disease-detection`, DE = `/solutions/digital-extension`, PP = `/pilot-program`.

### Month 1 — foundations (Weeks 1–4)

**1. What is digital agricultural extension? A guide for programmes in Kenya** · Wk 2 · **P1**
- URL: `/resources/what-is-digital-extension`
- Intent: informational (definition) → commercial follow-on. Audience: NGO programme managers, county agriculture officers, donors.
- Primary keyword: *digital extension services Kenya*. Supporting: digital vs traditional extension, extension officer to farmer ratio Kenya, KASEP 2023, blended extension.
- Must answer: What is digital extension? How is it different from face-to-face extension? What is the extension officer ratio in Kenya (present the range of sourced figures with dates — sources disagree)? What does it not solve (connectivity, literacy, cost)? When should a programme blend both?
- Evidence: Agrilinks/CGIAR digital extension typology; ILRI "future of extension is digital"; Kenya and Uganda smallholder access study (Frontiers of Agricultural Science and Engineering); KIPPRA Kenya Economic Report 2024; Ministry of Agriculture KASEP 2023 (read the policy text before citing); extension ratio sources (WFP Innovation, Standard FarmKenya, Nation Nakuru draft policy).
- Internal links: DE (primary), PM, PP. Next step: "See how AgriScanAI supports extension teams" → DE.

**2. Fall armyworm in Kenya: how to identify it and what to do** · Wk 3 · **P1**
- URL: `/resources/fall-armyworm-identification-kenya`
- Intent: informational how-to. Audience: farmers, lead farmers, extension officers (Swahili summary box).
- Primary: *fall armyworm identification and control Kenya*. Supporting: FAW life cycle, scouting, window-pane damage, push-pull, insecticide resistance.
- Must answer: What does FAW look like at each stage? How to scout a maize field? What damage signs to look for? What control options exist (cultural, botanical, chemical — registered products only) and why resistance matters? When to call an extension officer?
- Evidence: KALRO FAW identification and management page; FAO *Integrated Management of the Fall Armyworm on Maize — Guide for Farmer Field Schools in Africa* (2018); CABI/Plantwise FAW factsheets; PMC study on insecticide susceptibility of Kenyan FAW populations (PMC9377907); icipe push-pull resources (verify current page before citing). **Agronomist review mandatory**; no product-specific pesticide advice without PCPB registration check.
- Internal links: CD (primary), article 4. Next step: "Scan suspected damage with AgriScanAI, then confirm with your extension officer."

**3. Measuring impact in smallholder farmer programmes: indicators and data that hold up** · Wk 3 · **P1**
- URL: `/resources/smallholder-programme-impact-indicators`
- Intent: informational (practitioner). Audience: M&E officers, programme managers, donors.
- Primary: *agricultural impact measurement smallholder indicators*. Supporting: farmer programme M&E, MEL framework, yield and income measurement challenges, data quality.
- Must answer: Which farm-level indicators are commonly used? Why is income hard to measure? How often to collect? How to keep data comparable across programmes? What digital collection changes (and doesn't)?
- Evidence: Sustainable Food Lab / ANDE *Towards a Shared Approach for Smallholder Performance Measurement*; FAO FFS MEL framework and toolkit (2023); DCED Standard for Measuring Results (read directly); IDH Smallholder Working Group briefing (2016).
- Internal links: PM (primary), article 6. Next step: "Request a programme dashboard demo" → PP.
- **[GP DATA]** optional: anonymised example dashboard screenshot from a real deployment (with partner permission).

**4. Maize lethal necrosis (MLN): symptoms, causes and prevention in Kenya** · Wk 4 · **P1**
- URL: `/resources/maize-lethal-necrosis-symptoms-kenya`
- Intent: informational. Audience: farmers, extension officers, seed/agro-dealers.
- Primary: *maize lethal necrosis symptoms Kenya*. Supporting: MCMV, SCMV, thrips/aphid vectors, certified seed, crop rotation, MLN vs maize streak.
- Must answer: What causes MLN? What do symptoms look like (incl. atypical yellow striping)? How is it spread? How to reduce risk (certified seed, rotation, vector control, roguing)? How is it confirmed?
- Evidence: CIMMYT *MLN: A Technical Manual for Disease Management* (2021, ed. B.M. Prasanna) and farmer flyers (incl. Swahili) at mln.cimmyt.org; first report of MCMV/MLN in Kenya (Plant Disease, 2012); Virology Journal 2018 metagenomic study (s12985-018-0999-2); Plantwise blog on MLN control in Kenya. **Agronomist review mandatory.**
- Internal links: CD, article 5. Next step: scan + report to county extension / KEPHIS-certified seed advice.

### Month 2 — organisation authority (Weeks 5–8)

**5. Maize pests and diseases in Kenya: an identification guide (hub)** · Wk 5 · **P1**
- URL: `/resources/maize-pests-diseases-kenya`
- Intent: informational hub. Audience: farmers, extension officers.
- Primary: *common maize diseases in Kenya*. Supporting: northern leaf blight, grey leaf spot, common rust, maize streak virus, stalk borers.
- Must answer: Which pests/diseases matter most, where, and how to tell them apart? When to seek lab confirmation?
- Evidence: KALRO; CIMMYT; peer-reviewed Kenyan maize disease surveys (e.g. ICIPE/RSIF repository, Virginia Tech VTechWorks survey); CABI Plantwise factsheets. Note that some survey data is old — date it.
- Internal links: articles 2 and 4 (spokes), CD. Next step: download app / find extension services.

**6. Farmer profiling and digital records: a practical guide for programmes in Kenya** · Wk 5 · **P1**
- URL: `/resources/farmer-profiling-digital-records-kenya`
- Intent: informational/commercial. Audience: NGOs, cooperatives, county teams.
- Primary: *farmer profiling Kenya / digital farmer registration*. Supporting: KIAMIS, consent, unique IDs, data fields, offline enrolment, updating records.
- Must answer: What is KIAMIS and how does it relate to programme-level records? What should a farmer profile include? How to get consent? How to keep records current?
- Evidence: KALRO KIAMIS; Kenya News Agency/Capital FM registration reports (cite with dates); Ministry of Agriculture Data Governance Framework 2022; ICARDA *Farmer Profiling Data – Kenya – ODK Questionnaires*. **Do not claim KIAMIS integration** unless one exists.
- Internal links: PM (primary), article 11. Next step: PP.

**7. KoBoToolbox, ODK or a farmer management platform? Choosing field data tools for agriculture programmes** · Wk 6 · **P2**
- URL: `/resources/kobotoolbox-odk-vs-farmer-platform`
- Intent: comparison. Audience: M&E/data leads.
- Primary: *farmer data collection app offline*. Supporting: KoBoToolbox agriculture, ODK farmer survey, offline sync, longitudinal farmer records.
- Must answer: What do survey tools do well? Where do they fall short for ongoing farmer advisory and records? What to check for offline sync? Cost/skills trade-offs?
- Evidence: KoBoToolbox and ODK official documentation; GeoFarmer paper (Computers and Electronics in Agriculture, 2019); FAO FFS MEL scoping survey (digital data collection section). Be fair to open-source tools.
- Internal links: PM. Next step: PP.

**8. Farmer Service Centres in Kenya: how they work and how to track their performance** · Wk 7 · **P2**
- URL: `/resources/farmer-service-centres-kenya`
- Intent: informational. Audience: programme managers (FtMA/CGA/WFP-type models), county officials, agripreneurs.
- Primary: *farmer service centres Kenya*. Supporting: FSC business model, agripreneurs, last-mile services, FSC KPIs.
- Must answer: What is an FSC? Who runs them? How do they earn revenue? What performance indicators matter?
- Evidence: GIZ FSC factsheet (2024); Farm to Market Alliance materials; FSD Kenya; Kenya News Agency county reports.
- Internal links: PM (FSC performance tracking), DE. Next step: PP.
- **[GP DATA]** if AgriScanAI has tracked FSCs, a short anonymised example (with permission).

### Month 3 — differentiation & trust (Weeks 9–12)

**9. Climate-smart agriculture in Kenya: what programmes need to plan, track and report** · Wk 8 · **P2**
- URL: `/resources/climate-smart-agriculture-kenya-programmes`
- Intent: informational. Audience: climate resilience projects, donors.
- Primary: *climate-smart agriculture Kenya*. Supporting: KCSAP, CSA strategy objectives, agro-weather advisories, climate monitoring data.
- Must answer: What does CSA mean (three pillars)? What are KCSAP and the national CSA strategy? What data do programmes need to show resilience outcomes?
- Evidence: Kenya Climate-Smart Agriculture Strategy (2017–2026); KALRO KCSAP page; Alliance Bioversity-CIAT CSA country profile for Kenya; AICCRA agro-weather advisory work.
- Internal links: PM, DE. Next step: PP. Avoid carbon-credit claims.

**10. AI advisory in local languages: what it can and cannot do for Kenya's smallholder farmers** · Wk 9 · **P2**
- URL: `/resources/ai-farming-advice-swahili`
- Intent: informational / thought leadership. Audience: donors, researchers, journalists, programmes.
- Primary: *AI for smallholder farmers Kenya*. Supporting: Swahili farming app/chatbot, local-language advisory, AI crop disease detection accuracy in the field, human oversight.
- Must answer: Where does AI help (diagnosis, personalised advice, reach)? Why does language matter? What are the limits (field accuracy, hallucination, connectivity, literacy)? Why keep extension officers in the loop?
- Evidence: CEIMIA/GPAI *State of AI in Agriculture in Sub-Saharan Africa* (2024); EC Knowledge4Policy brief on AI for smallholders; J-PAL LLM advisory study page; Mozilla Foundation on Swahili farm chatbots; arXiv AIEP technical learnings (2601.11537). Describe Mwanedu AI only as stated on the site.
- Internal links: DE, CD, `/about`. Next step: PP.
- Author: Good Partners product lead (named, with bio) — first-hand E-E-A-T.

**11. Protecting farmer data: a checklist for agriculture programmes in Kenya** · Wk 10 · **P2**
- URL: `/resources/farmer-data-protection-kenya`
- Intent: informational (compliance). Audience: NGOs, agencies, cooperatives.
- Primary: *farmer data protection Kenya*. Supporting: Data Protection Act 2019, ODPC, consent, data sharing agreements.
- Must answer: What does the Act require of data controllers/processors? What consent is needed? What should a data-sharing agreement cover? What should farmers be told?
- Evidence: Kenya Data Protection Act 2019 (Kenya Law); ODPC guidance notes; Ministry of Agriculture Data Governance Framework 2022; University of Bonn research as reported by The Conversation/Down to Earth. **Legal review required.**
- Internal links: `/privacy-policy`, PM, article 6. Next step: contact.

**12. Case study: onboarding farmers to digital advisory in Kakamega (with KTIP)** · Wk 11–12 · **P1 if data ready**
- URL: `/resources/kakamega-digital-advisory-case-study`
- Intent: commercial proof. Audience: NGOs, donors, journalists.
- Primary: *digital agriculture pilot Kenya* (supports PP). Supporting: farmer training on AI disease scanning, record keeping.
- Must answer: Context, what was done, how farmers were trained, what changed, lessons and limits.
- Evidence: **[GP DATA] entirely.** Site copy states 103 farmers onboarded in Ikholomani, Kakamega with Kilimo Training Institute of Permaculture (KTIP). Any outcome metrics (usage, scans, yields, satisfaction) must come from verified records; quotes need written consent; KTIP should approve before publishing.
- Internal links: PP (primary), `/events/agriscanai-farmer-training-kakamega-2026`, CD. Next step: "Apply for a pilot."
- If outcome data is not ready by Wk 11, publish a "what we learned training farmers" piece instead and move the case study to the next quarter.

**Backlog (next quarter):** cassava mosaic disease guide (only if users grow cassava — GP to confirm); tomato late blight in Kenya; mobile-money farmer payments evidence (links to AgriPay section); soil carbon MRV for smallholder programmes.

### Calendar summary

| Week | Deliverable |
|---|---|
| 0–1 | Prerendering + per-route meta + sitemap; rewrite `/solutions` intro for "digital agriculture solutions Kenya" |
| 1–2 | New pages: crop-disease-detection, programme-monitoring |
| 2 | Article 1 |
| 3 | Articles 2, 3 · New page: digital-extension |
| 4 | Article 4 |
| 5 | Articles 5, 6 |
| 6 | Article 7 |
| 7 | Article 8 |
| 8 | Article 9 |
| 9 | Article 10 |
| 10 | Article 11 |
| 11–12 | Article 12 · refresh pages using first Search Console data |

## 3. Editorial workflow

| Step | Owner | Done when |
|---|---|---|
| 1. Brief | SEO/content lead | Primary keyword, intent, questions, sources and internal links agreed (use this roadmap) |
| 2. Draft | Named author (Good Partners staff; bio on page) | Answer-first intro (40–60 words), question-led H2s, every factual claim cited to a primary source |
| 3. Agronomist review | Qualified agronomist / extension specialist (named "Reviewed by" on page) | All pest/disease/crop content checked; chemical advice limited to PCPB-registered products and label rates |
| 4. Fact & claims check | Product lead | No AgriScanAI claim beyond site-stated features; all [GP DATA] verified or removed |
| 5. Legal/partner check | Management | Article 11 legal review; partner names/quotes approved in writing |
| 6. Publish | Developer | Checklist below |
| 7. Promote | Comms | LinkedIn post, newsletter item, outreach where relevant |
| 8. Review | SEO lead | Search Console check at 4 and 12 weeks; update "last reviewed" date at least yearly |

**Publish checklist**
- [ ] Unique `<title>` (≤60 chars) and meta description (≤155 chars), self-referencing canonical
- [ ] One H1; question-format H2s; direct answer paragraph under each
- [ ] Author + reviewer names, published and "last reviewed" dates
- [ ] `Article`, `BreadcrumbList`; `FAQPage` only for FAQs visible on page
- [ ] 3+ internal links (one to the primary solutions page) and a link back from `/resources`
- [ ] External citations link to primary sources (KALRO, FAO, CIMMYT, Ministry, journals)
- [ ] Images: original photos where possible, descriptive alt text, compressed (WebP)
- [ ] Swahili summary box on farmer-facing articles (reviewed by a fluent speaker)
- [ ] Clear next step (APK download / pilot / contact)
- [ ] Added to sitemap; inspected in Search Console after deploy

## 4. Ethical digital PR and backlink outreach

**Principles:** no paid links, link exchanges or PBNs; only ask where there is a genuine relationship or genuinely useful resource; always disclose that you represent AgriScanAI/Good Partners; never misstate partnership status.

| Target | Relationship | Ask | Linkable asset |
|---|---|---|---|
| Mercy Corps AgriFin (AgriFin Learning Event 2025) | Exhibited | Inclusion in event recap / participant innovations list, if one exists | Event page `/events/agrifin-2025`; article 10 |
| FINAS (2025/2026), Founders Live Nairobi (2025 winner), AI Kigali 2025, Kenya Software & AI Summit 2025, ICCF 2025, Nairobi Startup Summit 2026 | Exhibited / won | Link from winner/exhibitor/speaker pages; correct name + URL | `/about`, event pages |
| Kilimo Training Institute of Permaculture (KTIP) | Pilot / training partner | Co-published case study with reciprocal mention | Article 12 |
| Partners shown on site (AICAD, Mercy Corps, Inkomoko, ACTS, Angani, Fortune Credit, Nairobi Startup, etc.) | Listed as trusted partners | Partner/portfolio page listing with link — only where the relationship is formal | `/about` |
| The Standard — FarmKenya / Smart Harvest | Media | Pitch: data-led story on extension gaps + digital tools; inclusion in "useful agricultural apps" listicles | Articles 1, 2 |
| Nation — Seeds of Gold | Media | Expert comment / farmer-training story from Kakamega | Article 12, article 2 |
| Kenya News Agency (county desks) | Media (public) | Coverage of county-level farmer trainings (organisers invite KNA) | Event pages |
| AgriFocus Africa, Food Business MEA, The Organic Farmer (Biovision) | Trade media | Guest explainer or expert quote on AI advisory limits | Article 10 |
| Universities / research partners (e.g. via AICAD) | Academic | Resource citation for M&E and data-protection guides | Articles 3, 11 |

### Template 1 — event organiser / partner (existing relationship)

> **Subject:** AgriScanAI at {Event} — quick listing update
>
> Hi {Name},
>
> Thank you again for having AgriScanAI (a Good Partners product) at {Event, year}. We've published a short recap here: {event page URL}.
>
> If you keep an exhibitor, winner or partner page for {Event}, would you be willing to list us as "AgriScanAI — AI-powered digital extension for agriculture programmes" linking to https://agriscanai.co.ke? If your site doesn't do that, no problem at all.
>
> We're also happy to share photos from our stand for your own recap.
>
> Best regards,
> {Name}, {Role}, Good Partners Limited · {phone}

### Template 2 — journalist / editor (resource pitch)

> **Subject:** Story idea: Kenya's extension officer gap, and what digital tools can and can't fix
>
> Hi {Name},
>
> I read your piece on {specific article} and thought this might be useful for {Smart Harvest / Seeds of Gold}.
>
> Published figures on Kenya's extension officer-to-farmer ratio range from about 1:1,100 to 1:5,000 depending on county and year, against recommended benchmarks of 1:400–1:600. We've put together a sourced guide covering what digital extension is, where it helps and where it doesn't (connectivity, cost, digital literacy): {article URL}.
>
> Our team at AgriScanAI recently trained farmers in Kakamega on AI crop-disease scanning and digital record keeping with the Kilimo Training Institute of Permaculture, and we'd be glad to connect you with {agronomist/trainer} or farmers who agree to be interviewed.
>
> Happy to send photos or answer questions.
>
> {Name}, {Role}, AgriScanAI / Good Partners Limited · {phone}

_(Before sending Template 2, re-check the ratio figures against the sources cited in article 1 and update if newer data exists.)_

## 5. Success measures (90 days)
- All 3 new pages and ≥10 articles indexed (Search Console coverage report).
- Impressions for organisation-intent queries (digital extension, programme monitoring, farmer profiling) tracked from week 4 — baseline is unknown today, so set targets after the first month of data.
- Pilot-request and APK-download conversions attributed to `/solutions/*` and `/resources/*` (set up events in analytics before launch).
- 5–10 genuine referring domains from events, partners and Kenyan agricultural media.
