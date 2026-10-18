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
- **Wrong bird? Press and hold it** for about a second, then tap **Hide**. It's removed from today and never shown again on that device (handy for a "Ring-necked Pheasant" that is really clanging dishes or a fountain). Hidden birds are listed on the start screen, with **Show them again** to undo.
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
3. **Add file › Upload files**, then select **all 29 files in this folder** (Cmd+A) and drag them in. There are no subfolders, and every file is under GitHub's 25 MB limit. Click **Commit changes**. If it stalls, upload in two batches: the `group1-shard…` files first, then the rest.
4. **Settings › Pages**, set Source to **Deploy from a branch**, choose **main** and **/ (root)**, then **Save**.
5. After a minute or two, the link appears on that page, e.g. `https://yourname.github.io/birdcollage/`.

To update later, upload the changed file with the same name and commit. iPads pick it up on their next reload.

## Credits and licences

- Bird identification: **BirdNET** by the K. Lisa Yang Center for Conservation Bioacoustics (Cornell Lab of Ornithology) and Chemnitz University of Technology. Engine code from **BirdNET Live** (github.com/birdnet-team/real-time-pwa), MIT License, see `BIRDNET-LIVE-LICENSE.txt`. The worker was lightly modified (a compact `detect` message). Model files are distributed by that project under CC BY-SA 4.0.
- Bird illustrations: 40 common Western Canada species were **AI-generated with Canva** (Magic Media) for this project. The rest come from the **AvianVisitors** project (github.com/Twarner491/AvianVisitors), CC BY-NC-SA 4.0, for non-commercial use only. All are resized and bundled into `birds.json`.
  - Never add images from Canva's stock library (marked with a crown). Their licence doesn't allow sharing them as separate files on a website.
  - When `birds.json` changes, increase the `?v=` number in index.html (`birds.json?v=3`) so iPads fetch the new pictures.
- Weather: **Open-Meteo** (open-meteo.com), free and keyless, CC BY 4.0 data.
- TensorFlow.js: Apache License 2.0.

Because of the illustrations' licence, this collage is for personal, non-commercial use.
