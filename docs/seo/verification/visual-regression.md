# Visual regression: original (main) vs seo/technical-foundation

Full-page screenshots in headless Chrome. Desktop is 1440×900 @1x; mobile is 390×844 @2x with touch emulation. Both builds were served by Apache 2.4.58. Animations were frozen and third-party LinkedIn iframes hidden. Diff = % of pixels whose RGB distance is > 30. Full-page captures redraw the fixed navbar, so the hero strip inflates the numbers on long event pages; the above-the-fold viewport captures are 0–0.08% on the final build (see README §7).

| Route | Viewport | Page height orig → new | Pixels differing | Broken images | Console errors (new) |
|---|---|---|---|---|---|
| / | desktop | 7144 → 7144 ✅ | 0.181% | 0 | 0 |
| /about | desktop | 4468 → 4468 ✅ | 0.03% | 0 | 0 |
| /solutions | desktop | 6117 → 6117 ✅ | 0.103% | 0 | 0 |
| /pilot-program | desktop | 3612 → 3612 ✅ | 0.063% | 0 | 0 |
| /events | desktop | 4951 → 4951 ✅ | 0.237% | 0 | 0 |
| /resources | desktop | 6100 → 6100 ✅ | 0.442% | 0 | 0 |
| /contact | desktop | 2611 → 2611 ✅ | 0.051% | 0 | 0 |
| /privacy-policy | desktop | 5654 → 5654 ✅ | 0% | 0 | 0 |
| /terms-of-use | desktop | 6500 → 6500 ✅ | 0% | 0 | 0 |
| /events/finas-2026 | desktop | 18115 → 18115 ✅ | 2.755% | 0 | 0 |
| /events/nairobi-startup-summit-2026 | desktop | 7110 → 7110 ✅ | 0% | 0 | 0 |
| /events/agriscanai-farmer-training-kakamega-2026 | desktop | 8506 → 8506 ✅ | 2.157% | 0 | 0 |
| /events/amref-2nd-phc-congress-2026 | desktop | 10435 → 10435 ✅ | 1.25% | 0 | 0 |
| /events/iccf-2025 | desktop | 9425 → 9425 ✅ | 2.131% | 0 | 0 |
| /events/kenya-software-ai-summit-2025 | desktop | 7866 → 7866 ✅ | 2.353% | 0 | 0 |
| /events/agrifin-2025 | desktop | 7281 → 7281 ✅ | 0.81% | 0 | 0 |
| /events/founders-live-2025 | desktop | 4608 → 4608 ✅ | 0.011% | 0 | 0 |
| /events/finas-2025 | desktop | 8186 → 8186 ✅ | 0.414% | 0 | 0 |
| /events/ai-kigali-2025 | desktop | 6300 → 6300 ✅ | 0.105% | 0 | 0 |
| / | mobile | 9765 → 9765 ✅ | 0.217% | 0 | 0 |
| /about | mobile | 5854 → 5854 ✅ | 0.045% | 0 | 0 |
| /solutions | mobile | 6392 → 6392 ✅ | 0.109% | 0 | 0 |
| /pilot-program | mobile | 4477 → 4477 ✅ | 0.043% | 0 | 0 |
| /events | mobile | 7469 → 7469 ✅ | 0.16% | 0 | 0 |
| /resources | mobile | 10081 → 10081 ✅ | 0.793% | 0 | 0 |
| /contact | mobile | 3526 → 3526 ✅ | 0.053% | 0 | 0 |
| /privacy-policy | mobile | 8941 → 8941 ✅ | 0% | 0 | 0 |
| /terms-of-use | mobile | 10168 → 10168 ✅ | 0% | 0 | 0 |
| /events/finas-2026 | mobile | 23706 → 23706 ✅ | 1.847% | 0 | 0 |
| /events/nairobi-startup-summit-2026 | mobile | 9259 → 9259 ✅ | 0% | 0 | 0 |
| /events/agriscanai-farmer-training-kakamega-2026 | mobile | 10352 → 10352 ✅ | 2.053% | 0 | 0 |
| /events/amref-2nd-phc-congress-2026 | mobile | 8638 → 8638 ✅ | 3.506% | 0 | 0 |
| /events/iccf-2025 | mobile | 10736 → 10736 ✅ | 1.135% | 0 | 0 |
| /events/kenya-software-ai-summit-2025 | mobile | 8186 → 8186 ✅ | 1.423% | 0 | 0 |
| /events/agrifin-2025 | mobile | 7507 → 7507 ✅ | 2.106% | 0 | 0 |
| /events/founders-live-2025 | mobile | 5198 → 5198 ✅ | 0.004% | 0 | 0 |
| /events/finas-2025 | mobile | 9455 → 9455 ✅ | 0.303% | 0 | 0 |
| /events/ai-kigali-2025 | mobile | 6970 → 6970 ✅ | 0.121% | 0 | 0 |
