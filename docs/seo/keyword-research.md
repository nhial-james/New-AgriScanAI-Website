# AgriScanAI — Keyword & SERP Research

_Prepared: 16 October 2026 · Site: https://agriscanai.co.ke · Owner: Good Partners Limited_

## 1. Method and limits (read first)

- **What was done:** 31 live web searches were run (Oct 2026) across farmer, organisation, agribusiness/cooperative and research/policy query groups. For each, the ranking result set was reviewed for page types, notable competitors and the questions the ranking content answers.
- **What was NOT available:** Google Search Console, Google Keyword Planner, Ahrefs/Semrush or any volume tool. **Search volume and keyword difficulty are "unknown — not verified" throughout.** No figures have been estimated.
- **Search engine caveat:** The research tool returns a US-based web index, not `google.co.ke`. Kenyan SERPs will differ (more local news, app-store listings, Kenyan government pages). Re-check priority queries manually in an incognito browser set to Kenya, and in Search Console once the site has 4–8 weeks of data.
- **"People Also Ask" caveat:** The tool does not return literal PAA boxes. The question list in section 6 is built from (a) the sub-questions that top-ranking pages were structured around and (b) the follow-up gaps the results repeatedly left open. Validate against real PAA boxes on google.co.ke before finalising headings.
- **Product claims:** Only features stated on the current site are referenced. Do not publish accuracy figures, user counts, crop coverage lists or pilot outcomes for AgriScanAI unless Good Partners supplies verified data.

### Technical prerequisite (affects every recommendation below)
At the time of research the site was a client-side-only SPA with one shared `<title>`/description. **This is now addressed on branch `seo/technical-foundation`:** every route is prerendered at build time with its own title, description, canonical, H1, body HTML and JSON-LD, plus `sitemap.xml`. New pages and articles must be added to `src/seo/routes.js` (see `docs/seo/README.md`) so they get the same treatment.

## 2. Competitive landscape observed

| Competitor / entity | Type | Where it appeared | What it owns in search |
|---|---|---|---|
| **PlantVillage Nuru** (Penn State / IITA / CGIAR) | Free AI diagnosis app, offline | Crop disease app Kenya, cassava, potato blight, FAW | Strongest "AI crop disease app Kenya" entity; heavy CGIAR/IITA news coverage; cassava + maize (FAW) + potato |
| **Plantix** (PEAT) / Corteva FarmFundi / CABI PlantwisePlus app | Photo diagnosis app | Plant disease from photo; Kenya app | Global "diagnose plant disease from photo" intent; Swahili supported; FAO e-agriculture page ranks |
| **iShamba** | SMS/voice/WhatsApp advisory | Farming advice Kenya, agro-weather | Advisory + weather via SMS; CGIAR/AICCRA partner coverage |
| **DigiFarm / FarmerAI** (Safaricom + Opportunity International) | Platform + AI chatbot | AI for smallholder farmers Kenya | Dominates "AI chatbot farmers Kenya" news SERP (2025 launch) |
| **Apollo Agriculture** | Agri-fintech (credit + advice) | Credit/advice queries | FAO Agritech Observatory, GSMA pages |
| **KALRO / KIAMIS** | Government research + farmer registry | FAW, MLN, cassava, farmer registration | Authoritative pages for pest/disease and farmer registry queries |
| **Ministry of Agriculture (kilimo.go.ke), MoA-INFO** | Government | Swahili advice, data governance | SMS advisory; Data Governance Framework 2022 |
| **FAO, CIMMYT, CABI/Plantwise, CGIAR (Alliance Bioversity-CIAT, ILRI, IITA)** | Research / multilateral | Almost all informational queries | Guides, manuals, factsheets — the evidence base, not product competitors |
| **KoBoToolbox / ODK, GeoFarmer, CropIn, Device Magic** | Data collection tools | Farmer data collection offline, M&E | Generic data-collection tool intent |
| **Qilimo, CoopWorks, DairyWorks, Kolonell (vendor blog)** | Cooperative software | Cooperative management software Kenya | Thin, vendor-led SERP — a gap |
| **Standard (FarmKenya / Smart Harvest), Nation (Seeds of Gold), Kenya News Agency, Capital FM, AgriFocus Africa, VOA** | Media | News-style and listicle queries | "Best farming apps in Kenya" listicles (mostly 2018–2023, dated) |

**Key pattern:** Informational farmer queries are owned by research bodies (KALRO, FAO, CIMMYT, CGIAR) and news. Product-intent queries in Kenya are owned by PlantVillage Nuru and Plantix (disease detection) and Safaricom DigiFarm (AI advisory). **Organisation-intent queries (digital extension for NGOs, programme M&E, farmer registries, FSC performance) return academic papers, FAO toolkits and generic tools — almost no Kenyan product page answers them.** That is AgriScanAI's clearest opening.

## 3. Shortlisted queries — SERP analysis

Legend — Relevance: H/M/L to AgriScanAI. Priority: P1 (first 90 days), P2 (next), P3 (monitor only). Volume / KD: **unknown — not verified** for every row.

### 3a. Organisation-focused (NGOs, agencies, sponsors) — highest commercial value

| # | Query | Intent | Geo | Who ranks (observed) | Rel. | Target URL | Pri. | Recommended action |
|---|---|---|---|---|---|---|---|---|
| O1 | digital extension services Kenya | Informational / commercial investigation | KE | Academic papers (EANSO journal, UNCST repo), Heifer RFP PDF, ILRI news, KIPPRA report | H | **New:** `/solutions/digital-extension` (or strengthen `/solutions`) | P1 | Build a solutions page defining digital extension for programmes, AgriScanAI's model (AI + local-language advisory + field data). Support with article A1. |
| O2 | digital agriculture solutions Kenya | Commercial investigation | KE | People Daily, The Conversation, GSMA blog, AllAfrica | H | `/solutions` | P1 | Re-title/re-write `/solutions` H1 + intro around this phrase; add feature sections with anchor IDs. |
| O3 | farmer programme monitoring and evaluation tool | Commercial / informational | Global + KE | FAO FFS MEL toolkit (2023), FAO JFFLS M&E toolkit, FAO scoping survey | H | **New:** `/solutions/programme-monitoring` | P1 | No product page ranks — strong gap. Page for M&E / programme & FSC performance tracking dashboards. Article A3 supports. |
| O4 | agricultural impact measurement smallholder indicators | Informational | Global | Sustainable Food Lab / ANDE paper, IDH briefing, Practical Action, BEAM Exchange | H | Article A3 → links to `/solutions/programme-monitoring` | P1 | Write an indicator guide citing SFL framework and DCED Standard; no AgriScanAI outcome numbers. |
| O5 | farmer data collection app offline | Commercial | Global | Device Magic, CropIn, GeoFarmer, Acorn guide, App Store listings | H | `/solutions/programme-monitoring` (section) | P2 | Mention "works offline / low connectivity" field collection explicitly; compare honestly vs KoBo/ODK in article A4. |
| O6 | KoBoToolbox / ODK farmer survey Kenya | Informational / comparison | KE | KoBoToolbox blog (Nuru), ICARDA ODK farmer profiling dataset, IITA ODK training | M | Article A4 | P2 | "Generic survey tool vs purpose-built farmer platform" comparison; respectful of open tools. |
| O7 | farmer profiling / digital farmer registration Kenya | Informational / news | KE | KALRO KIAMIS, Kenya News Agency, Capital FM, ALIN, Sokopepe FARMIS | H | Article A5 → `/solutions/programme-monitoring` | P1 | Explain KIAMIS vs programme-level profiling; how NGOs keep records consistent with national registry. Do not claim a KIAMIS integration. |
| O8 | digital tools for agricultural NGOs Africa farmer registry dashboard | Commercial investigation | Africa | IITA/Ogun, Digital Green Ethiopia, ZIAMIS, GeoFarmer, a vendor page | H | `/solutions/programme-monitoring` | P2 | Same page; add an "NGOs & development programmes" audience section. |
| O9 | farmer service centres Kenya | Informational | KE | GIZ FSC factsheet, Kenya News Agency, FSD Kenya, Biovision | M-H | Article A7 | P2 | Article on running/measuring FSCs (FtMA, CGA/GIZ models); ties to "FSC performance tracking" feature. |
| O10 | carbon / climate monitoring smallholder MRV Kenya | Informational | KE | Alliance Bioversity-CIAT, Panorama, Vi Agroforestry paper, vendor blogs | M | Article A8 | P3 | Only cover data collection for climate projects; avoid any carbon-credit claims. |

### 3b. Farmer-focused

| # | Query | Intent | Geo | Who ranks (observed) | Rel. | Target URL | Pri. | Recommended action |
|---|---|---|---|---|---|---|---|---|
| F1 | crop disease identification app Kenya | Commercial (app) | KE | Standard FarmKenya, VOA, Food Business MEA (PlantVillage, FarmFundi/Plantix), MIT Solve | H | **New:** `/solutions/crop-disease-detection` | P1 | Feature page: how AI scanning works in AgriScanAI, offline use, Swahili, APK download CTA, "confirm with an extension officer" guidance. Competitors are news-covered — earn similar coverage (see PR plan). |
| F2 | plant disease detection from photo / app | Commercial | Global | FAO e-agriculture (Plantix), App Store listings, MIT Tech Review | M | `/solutions/crop-disease-detection` | P2 | Global SERP is app-store heavy; win with Kenya-specific angle rather than head term. |
| F3 | fall armyworm identification and control Kenya | Informational (how-to) | KE | **KALRO** page, Plantwise blog, Kenya News Agency, PMC study, Capital FM | H | Article A2 | P1 | Practical identification guide (inverted-Y, 4 dots, window-pane damage) citing KALRO + FAO FFS guide; CTA: scan with app, report to extension. |
| F4 | maize lethal necrosis symptoms Kenya | Informational | KE | Springer/PMC papers, APS first report, FAO AGRIS, Grain SA | H | Article A2b (MLN) | P1 | Academic-only SERP → a plain-language, reviewed guide can rank. Cite CIMMYT MLN manual. |
| F5 | common maize diseases in Kenya identification | Informational | KE | ICIPE/RSIF repository, Virginia Tech, Plantwise blog | H | Article A2c hub | P1 | Make a "Maize pests & diseases in Kenya" hub linking FAW + MLN + blights/rusts/streak. |
| F6 | cassava mosaic disease symptoms control Kenya | Informational | KE | PMC western Kenya survey, KALRO repository, JKUAT brochure | M | Article (P2 backlog) | P3 | Nuru is strong on cassava; only write if AgriScanAI field users grow cassava (Good Partners to confirm). |
| F7 | tomato late blight control Kenya | Informational | KE | PMC survey, CGIAR (potato DSS), Star (2026), PotatoPro | M | Article (backlog) | P3 | Tomato-specific Kenyan guidance gap noted; needs agronomist authorship. |
| F8 | climate-smart agriculture Kenya | Informational | KE | Alliance Bioversity-CIAT, KALRO KCSAP, UNDP strategy PDF, Standard | M | Article A6 | P2 | Authority SERP; position as "what CSA means for programme design + data". |
| F9 | farming advice app Kenya Swahili | Commercial | KE | Haller app, Kuza AI, SOAS/FarmSmart, WEF, MoA-INFO, Standard listicle | H | Home `/` + `/solutions/crop-disease-detection` | P1 | Add a clear Swahili-language advisory section (Mwanedu AI) and a short Swahili summary block on the feature page. |
| F10 | Swahili AI chatbot for farmers | Commercial / informational | KE | Mozilla Foundation (Imarika), arXiv AIEP paper | H | Article A9 | P2 | Thought-leadership piece on local-language AI advisory; describe Mwanedu AI only as stated on site. |
| F11 | best farming apps in Kenya (2026) | Commercial listicle | KE | Standard, Biznakenya, Graduate Farmer (2018), Business Daily | M | — (earn inclusion) | P2 | Don't write own listicle; pitch for inclusion in Standard/Nation listicles (PR plan). |
| F12 | farm record keeping app Kenya | Commercial | KE | ILRI, DigiCow, Farmis (Sokopepe), Nation Seeds of Gold, vendor blogs | M-H | `/solutions` (yield & records section) | P2 | SERP lacks a clear crop-yield record app — mention yield recording & digital records on solutions page. |

### 3c. Agribusiness / cooperative

| # | Query | Intent | Geo | Who ranks (observed) | Rel. | Target URL | Pri. | Recommended action |
|---|---|---|---|---|---|---|---|---|
| C1 | cooperative farmer management software Kenya | Commercial | KE | Qilimo (VC4A), ICTworks (CoopWorks), Standard (DairyWorks), several Kolonell vendor posts | M-H | `/solutions` (cooperatives section) | P2 | Thin SERP; add "Agribusinesses & cooperatives" section. Separate page only once AgriPay/coop features are documented in detail. |
| C2 | farmer payments mobile money agriculture Kenya | Informational / commercial | KE | CTA Spore, Business Fights Poverty, NextBillion, Rural21, Kolonell | M | Article A10 → `/solutions#agripay` | P3 | Cover the evidence (Connected Farmer Alliance, Better Than Cash Alliance). Only describe AgriPay with facts on site. |
| C3 | Apollo Agriculture / input credit app | Navigational (competitor) | KE | FAO Agritech Observatory, GSMA, Techpoint | L | — | P3 | Do not target competitor brand terms. |

### 3d. Research / policy / thought leadership

| # | Query | Intent | Geo | Who ranks (observed) | Rel. | Target URL | Pri. | Recommended action |
|---|---|---|---|---|---|---|---|---|
| R1 | AI in agriculture Africa | Informational | Africa | arXiv, SRUC review, EC Knowledge4Policy, CEIMIA/GPAI report, AgriFocus Africa | M | Article A9 | P2 | Very broad; target via a Kenya-specific angle and PR, not head term. |
| R2 | AI for smallholder farmers Kenya | Informational / news | KE | BMZ digital, Safaricom press release, J-PAL, Agrilinks, Capital FM | H | Article A9 + `/about` | P1 | Achievable with a well-cited explainer plus news coverage of Founders Live win / Kakamega training. |
| R3 | digital extension vs traditional extension | Informational | Global | Agrilinks/CGIAR typology, CGSpace, Organic Farmer newsletter | H | Article A1 | P1 | Answer-first definition article → links to `/solutions/digital-extension`. |
| R4 | agricultural extension officer ratio Kenya | Informational (stat) | KE | Standard FarmKenya, The New Humanitarian, Nation, WFP Innovation | H | Article A1 (stat section) | P1 | Strong AEO stat query; sources disagree (1:400 FAO vs 1:600 Nakuru draft; 1:1,143 to 1:5,000 reported) — present range with dates, don't pick one. |
| R5 | Kenya agricultural extension policy (KASEP 2023) digital | Informational | KE | Kenya News Agency, EANSO journal, gaa.go.ke | M | Article A1 | P2 | Cite only after reading the policy text itself. |
| R6 | farmer data protection Kenya Data Protection Act agriculture | Informational | KE | kilimo.go.ke Data Governance Framework 2022, Down to Earth/The Conversation, Business Daily | M-H | Article A11 + `/privacy-policy` | P2 | Trust-building for NGO buyers; legal review required. |
| R7 | accuracy of AI plant disease detection apps in the field | Informational | Global | arXiv preprints, Scientific American, AI4D | M | Article A2 / feature page FAQ | P2 | Explain lab-vs-field gap honestly; do not quote an AgriScanAI accuracy figure without validated data. |

Queries reviewed but deprioritised: "PlantVillage Nuru app" and "iShamba DigiFarm" (navigational competitor terms), "AgriScanAI" brand (monitor in Search Console; should already rank — confirm).

## 4. Volume / difficulty status

| Item | Status |
|---|---|
| Monthly search volume (all queries) | unknown — not verified |
| Keyword difficulty (all queries) | unknown — not verified |
| Third-party figures seen in sources | Context only, not search data (e.g. KIAMIS 4.3 million farmers registered in phase 1 per Capital FM; ~95 digital agri services in Kenya in 2020 per GSMA as cited by The Conversation). Re-verify at source before quoting. |

**Next step:** after 6–8 weeks of Search Console data, add an "impressions" column and re-rank priorities on real data.

## 5. Keyword-to-URL map (one primary intent per URL)

| URL | Status | Primary intent / keyword | Secondary (supporting, same intent) | Must NOT target (avoid cannibalisation) |
|---|---|---|---|---|
| `/` | Existing | Brand + "AI-powered digital extension platform for agriculture programmes in Kenya" | AgriScanAI app, Swahili farming advisory app | Specific disease how-tos; M&E detail |
| `/solutions` | Existing — rewrite | **digital agriculture solutions Kenya** | features overview; farm records & yield tracking; cooperatives & agribusiness; AgriPay; climate monitoring | "digital extension" definition (→ new page); disease detection detail |
| `/solutions/digital-extension` | **New** | **digital extension services Kenya** (for programmes/agencies) | local-language (Swahili) advisory, Mwanedu AI recommendations, extension officer reach | Generic "what is digital extension" (→ article A1) |
| `/solutions/crop-disease-detection` | **New** | **crop disease identification app Kenya** / AI pest & disease detection | plant disease detection from photo, offline scanning, APK download | Individual pest/disease how-to guides (→ articles) |
| `/solutions/programme-monitoring` | **New** | **farmer programme monitoring and evaluation tool** / M&E platform for agriculture programmes | farmer profiling & digital records, offline field data collection, dashboards, FSC performance tracking | Indicator theory (→ article A3) |
| `/pilot-program` | Existing | **AgriScanAI pilot programme for organisations** (transactional: request pilot) | digital agriculture pilot Kenya | Feature descriptions |
| `/about` | Existing | Brand / E-E-A-T: Good Partners, team, awards (Founders Live Nairobi 2025) | AI agritech company Nairobi | — |
| `/events`, `/events/<slug>` | Existing | Event-name queries (FINAS 2026, AgriFin Learning Event 2025, Kakamega training) | — | Product keywords |
| `/resources` | Existing — becomes hub | Resource hub: guides, brochure, newsletter | — | — |
| `/resources/<slug>` | **New articles** | One informational query each (see roadmap) | — | Product/commercial terms owned by `/solutions/*` |
| `/contact` | Existing | "contact AgriScanAI", demo request | — | — |
| `/privacy-policy` | Existing | Policy (supports trust; article A11 links here) | — | — |

**Rules:** each article links up to exactly one primary solutions page; no two articles share a primary keyword; event pages never carry product feature copy as their main topic.

## 6. Questions people ask (AEO targets)

Derived from sub-topics of top-ranking pages and recurring gaps (validate against google.co.ke PAA boxes). Answer each in a 40–60 word direct paragraph under a question-format H2/H3, then expand.

**Farmers / extension**
1. How do I identify fall armyworm in maize? (KALRO: inverted-Y head mark, four dots in a square on rear segment, window-pane leaf damage)
2. What are the symptoms of maize lethal necrosis, and what causes it? (MCMV + a potyvirus co-infection)
3. How can I tell MLN apart from maize streak virus or nutrient deficiency?
4. What are the most common maize diseases in Kenya?
5. Can an app identify crop diseases from a photo, and how accurate is it in the field?
6. Do crop disease apps work offline / without internet?
7. Is there a farming advice app in Swahili?
8. What should I do after an app identifies a disease — who confirms it? (plant clinic / KALRO / county extension officer)
9. How do I stop cassava mosaic disease from spreading? (clean cuttings, roguing, whitefly management)

**Organisations / programmes**
10. What is digital extension, and how is it different from traditional extension?
11. What is the ratio of extension officers to farmers in Kenya?
12. How do NGOs monitor and evaluate smallholder farmer programmes? What indicators should they use?
13. What is KIAMIS and how does farmer registration in Kenya work?
14. What is a Farmer Service Centre and how is its performance measured?
15. KoBoToolbox/ODK vs a dedicated farmer management platform — which does a programme need?
16. How can field data be collected in areas with poor connectivity?
17. How is farmer data protected under Kenya's Data Protection Act 2019?

**Agribusiness / policy**
18. How are farmers paid through mobile money, and does it reduce costs for buyers/cooperatives?
19. How is AI being used to support smallholder farmers in Kenya?
20. What does climate-smart agriculture mean in Kenya, and what is KCSAP?
21. How is soil carbon monitored (MRV) on smallholder farms?

## 7. Sources consulted (selection)

- KALRO — Identification and Management of Fall Armyworm in Kenya: https://website.kalro.org/?p=1529
- KALRO — KCSAP project: https://kalro.org/research-projects/kenya-climate-smart-agriculture-project-kcsap
- KALRO KIAMIS: https://kiamis.kalro.org/kiamis
- FAO — Integrated Management of the Fall Armyworm on Maize: a guide for Farmer Field Schools in Africa (2018): https://openknowledge.fao.org/items/7ffcc2f2-940d-4c84-a560-82f86665ad2b
- FAO — FFS MEL resources: https://www.fao.org/family-farming/detail/en/c/1637407/
- CIMMYT — MLN resources / technical manual: https://mln.cimmyt.org/mln-resources/reports-publications
- Alliance Bioversity-CIAT — CSA in Kenya: https://alliancebioversityciat.org/publications-data/climate-smart-agriculture-kenya
- IITA — PlantVillage Nuru: https://iita.org/news-item/plantvillage-nuruai-app-among-key-innovations-supporting-poor-farmers-to-cope-with-climate-change/
- Safaricom — FarmerAI press release (Feb 2025): https://safaricom.co.ke/media-center-landing/press-releases/opportunity-international-safaricom-launch-new-ai-chatbot-for-smallholder-farmers
- The Conversation — digital solutions in Kenyan agriculture: https://theconversation.com/digital-solutions-are-boosting-agriculture-in-kenya-but-its-time-to-scale-up-heres-how-192422
- Sustainable Food Lab — smallholder performance measurement indicators: https://sustainablefoodlab.org/towards-a-shared-approach-for-smallholder-performance-measurement-common-indicators-and-metrics/
- Ministry of Agriculture — Data Governance Framework 2022: https://kilimo.go.ke/wp-content/uploads/2024/08/MoALFC-Data-Governance-Framework-2022.pdf
- GIZ — Farmer Service Centre factsheet (2024): https://giz.de/de/downloads/giz2024_FSC_FactSheet.pdf
- Mozilla Foundation — Swahili farm chatbots (Imarika): https://www.mozillafoundation.org/en/blog/chatbots-local-weather-reports-and-a-boon-for-kenyas-smallholder-farmers/
- Agrilinks — Digital extension typology: https://agrilinks.org/comment/11251
- Western Kenya cassava pests/diseases survey (PMC): https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11437512/
