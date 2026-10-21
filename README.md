# Bird Collage

An iPad listens for birds through a microphone and shows who's singing around a big clock, with live weather and colours that shift through the day. Bird identification runs **on the iPad itself** with BirdNET. No audio is uploaded, and there are no accounts.

Tested target: iPad Air 3 (or any iPad on iPadOS 16.4 or later), in Safari.

## What each friend needs

- An iPad on iPadOS 16.4 or later, on a stand near a window, **plugged in**
- Ideally a wired lavalier mic and the right adapter (Lightning for iPad Air 3), with the mic poked outside a slightly open window. The built-in mic works too, but hears much less through glass.
- The link to this site

## Setting up an iPad (about 5 minutes)

1. Open the link in **Safari**.
2. Tap **Start listening**. Allow the **microphone** and **location** when asked.
   - Location is rounded to about 10 km the moment the iPad provides it, and only that rough position is kept. It's used on the iPad to hide birds that don't live in your area, and to get the weather. You can tap Don't Allow and add your town's coordinates to the end of the link instead, like `?lat=49.3&lon=-123.1`.
   - The first load downloads about 65 MB once. Give it a minute on Wi-Fi.
3. Tap **Share**, then **Add to Home Screen**. Open it from the new icon from now on: it runs full screen with no Safari bars. (In a Safari tab, tapping Start also asks for full screen.) The layout fills any screen, in landscape or portrait.
4. **Settings › Display & Brightness › Auto-Lock › Never.**
5. Let **only this site** use the mic without asking: in Safari, open the collage link, tap the page-settings button at the left of the address bar, choose **Website Settings**, and set **Microphone** to **Allow**. Do **not** change Settings › Apps › Safari › Microphone; leave that on **Ask**, or every website could use the mic.
6. Optional: **Guided Access** with a passcode locks the iPad to the collage (Settings › Accessibility › Guided Access). Without it, remember the iPad sits unlocked all day, so it's best used as a spare iPad that isn't signed in to email or holding personal photos.
7. Keep the iPad **out of direct sun** in the window and check it now and then for heat or a bulging screen, since it's plugged in and working all day. If a mic cable runs outside, make sure the window can still close and lock.

If the iPad ever shows "Tap to start", just tap. Safari needs a tap before it can use the mic again after a restart, update or long pause.

## What you'll see

- Up to five recent birds around the clock. The newest is biggest.
- **See every bird heard today:** tap the arrow tab on the right edge. A drawer slides out listing all of today's species, newest first, with how many times each was heard and when. Tap the arrow or the collage to close it; it also closes by itself after a minute.
- **Check a bird by ear (optional, off by default):** on the start screen, switch on **Save bird sounds for checking**. The iPad then keeps the best 3-second clip of each bird heard today. Birds with a saved sound show a small ▶; **tap the bird** on the collage, or its row in the drawer, to hear it (tap again to stop).
  - Privacy: clips stay **only on this iPad** and are never uploaded. A clip may also catch other sounds nearby, such as voices, and anyone using the iPad can play them. All clips are deleted at midnight, when a bird is hidden, or straight away when the switch is turned off. About 150 KB per bird.
- **Wrong bird? Press and hold it** (on the collage or in the drawer) for about a second, then tap **Hide**. It's removed from today and never shown again on that device (handy for a "Ring-necked Pheasant" that is really clanging dishes or a fountain). Hidden birds are listed on the start screen, with **Show them again** to undo.
- Besides birds, it can show some local animals: dog, coyote, gray wolf, red and gray squirrels, white-tailed deer, wood frog, chorus frogs, toads, bullfrog, green frog and field/tree crickets.
- Only animals. BirdNET can also recognise people, engines, sirens, guns, fireworks, power tools and noise; those are never shown or counted.
- "N detections today · M species". A bird singing on and off counts once until it has been quiet for 15 seconds.
- Bottom left: a green dot and a sound-level bar while it's listening.
- Everything resets at midnight. Today's birds survive a reload, but are kept only on that iPad.

## Tuning (add to the end of the link)

| Add | Effect |
|---|---|
| `?conf=0.8` | Stricter: fewer false birds, may miss quiet ones (default 0.7) |
| `?conf=0.6` | Looser: catches more, with more mistakes |
| `?lat=49.3&lon=-123.1` (example: your town's coordinates) | Set the location by hand instead of asking |
| `?clock=24` | 24-hour clock |
| `?debug=1` | Shows the engine's current best guess and speed at the bottom |

Combine with `&`, e.g. `?conf=0.8&clock=24`.

## Putting it on GitHub Pages

1. Make a free account at github.com.
2. **+ › New repository**, name it `birdcollage`, set it to **Public**, tick **Add a README file**, then **Create repository**.
3. **Add file › Upload files**, then select **all 31 files in this folder** (Cmd+A) and drag them in. There are no subfolders, and every file is under GitHub's 25 MB limit. Click **Commit changes**. If it stalls, upload in two batches: the `group1-shard…` files first, then the rest.
4. **Settings › Pages**, set Source to **Deploy from a branch**, choose **main** and **/ (root)**, then **Save**.
5. After a minute or two, the link appears on that page, e.g. `https://yourname.github.io/birdcollage/`.

To update later, upload the changed file with the same name and commit. iPads pick it up on their next reload.

## Credits and licences

Full credits, licence links and changes made are in **credits.html** (linked from the bottom of the collage). Full licence texts for the bundled software are in **THIRD-PARTY-NOTICES.txt**.

- **Bird identification: BirdNET** by the K. Lisa Yang Center for Conservation Bioacoustics (Cornell Lab of Ornithology) and Chemnitz University of Technology.
  - Models: used under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/), as stated by [BirdNET-Analyzer](https://github.com/birdnet-team/BirdNET-Analyzer) (BirdNET Live lists CC BY-SA 4.0; this site follows the stricter non-commercial terms). Redistributed unmodified from [BirdNET Live](https://github.com/birdnet-team/real-time-pwa); the location model's `model.json` is renamed `area-model.json`.
  - Engine code: from BirdNET Live, Copyright (c) 2025 BirdNET-Team, MIT License (`BIRDNET-LIVE-LICENSE.txt`). `birdnet-worker.js` is modified (flat paths, a compact `detect` message).
- **Bird illustrations:**
  - 40 common Western Canada species were **AI-generated by the site owner with Canva's AI tools** (listed in credits.html).
  - All others come from [AvianVisitors](https://github.com/Twarner491/AvianVisitors) by Twarner491, [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Changes: trimmed, resized to fit 320 × 320, converted to WebP, bundled into `birds.json`. These adapted illustrations are shared under the same licence.
  - Never add images from Canva's stock library (marked with a crown). Their licence doesn't allow sharing them as separate files on a website.
  - When `birds.json` changes, increase the `?v=` number in index.html (`birds.json?v=3`) so iPads fetch the new pictures.
- **Weather:** data by [Open-Meteo.com](https://open-meteo.com/), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), linked next to the weather on screen.
- **TensorFlow.js** 4.22.0, Copyright 2024 Google LLC, Apache License 2.0, unmodified. It bundles long.js (Apache 2.0) and core-js, regenerator-runtime and seedrandom (MIT). See `THIRD-PARTY-NOTICES.txt`.

Because the BirdNET models and the AvianVisitors illustrations are licensed for **non-commercial use only**, this collage must stay free and personal: never charge for it or use it in a business.

## If you copy or reuse this project

This is a free, personal, non-commercial project. It combines materials from other people under their own licences, listed above and in credits.html. If you copy or reuse any part of it, you are responsible for following those licences yourself. In particular, **the BirdNET models and the AvianVisitors illustrations are licensed for non-commercial use only**, so they must not be used in anything sold or used for business.

The collage page and the AI-generated illustrations are the site owner's own work and are **not** licensed for reuse; please ask first. Everything here is provided "as is", without warranty of any kind. Bird identifications are automatic and can be wrong. This project is not affiliated with or endorsed by BirdNET, the Cornell Lab of Ornithology, Chemnitz University of Technology, AvianVisitors, Open-Meteo, Canva, Google or GitHub.
