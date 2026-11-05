Sathi (Hindi for “companion”) is a free, offline-capable web app that helps senior citizens stay safe, healthy and connected with their families. It is built around the needs of older users: large text, big buttons, simple screens, voice prompts and regional languages.

Problem
Many elderly people live alone or spend long hours without family nearby. They often forget medicines, struggle with small text and complicated apps, and can’t quickly call for help after a fall or a medical emergency. Most health and safety apps aren’t designed for them.

Solution
Sathi puts the most important tools on one simple home screen:

SOS alert: a single large button sends an emergency text to family with a GPS location link and the person’s medical details (blood group, conditions, allergies, doctor).
Fall detection: the phone’s motion sensor spots a possible fall and starts a 30-second “Are you OK?” countdown. If there’s no reply, an SOS goes out automatically.
Medicine reminders: a full-screen alarm with sound, vibration and spoken voice, plus “I took it” and snooze buttons.
Daily “I’m OK” check-in: if the person doesn’t check in, the app offers to alert the family.
Health log: blood pressure, sugar and weight records with warnings for dangerous readings.
Emergency numbers: one-tap calling to 112, 108, 14567 (Elderline), 100, 101, 181 and 1930 (cyber-fraud helpline).
Extras: doctor-visit reminders, a water tracker, a “Where am I?” location share, a fake call and a memory game for brain exercise.

Accessibility

Adjustable text size, with light, dark and high-contrast themes.
Read-aloud support.
8 languages: English, Hindi, Punjabi, Bengali, Tamil, Telugu, Marathi and Gujarati.

Technology
HTML, CSS and JavaScript, built as a Progressive Web App (installable on the phone and works offline). It uses the Geolocation, DeviceMotion, Web Speech, Notification and Service Worker APIs. All data is stored on the user’s device in localStorage, so there is no server and no account, and private health information is never uploaded.

Limitations and future scope

Reminders ring only while the app is open or in the background, so a native Android version would make them fully reliable.
SOS opens a prefilled text message that the user must send.
Planned: a family dashboard, automatic SMS or WhatsApp alerts, voice commands, and a complete translation of every label.
