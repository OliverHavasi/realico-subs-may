I’ll correct only the developer/person image positioning in the homepage section shown in your screenshot.

Plan:
1. In `src/routes/index.tsx`, update the inline style on the `photo_developeri.png` image in the “Developerov, banky a finančné inštitúcie” section.
2. Keep the image size at the current enlarged 20% value (`height: 1042px`) and keep width/object-fit unchanged.
3. Move the image higher by increasing the vertical bottom offset so the head/upper body sits closer to the reference screenshot, while preserving its right-side placement and not touching text, background icons, separators, or other sections.

Technical detail:
- Current image top is controlled indirectly by `marginBottom: "120px"` inside a bottom-aligned flex container.
- I’ll raise it further by adjusting only that vertical offset value on the image style.