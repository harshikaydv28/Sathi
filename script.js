/* Sathi – Senior Companion */
'use strict';

/* ---------- Translations (missing keys fall back to English) ---------- */
const T = {
  en: {
    gm:'Good morning', ga:'Good afternoon', ge:'Good evening',
    sosHint:'Press for help', imOk:"I'm OK", meds:'Medicines', callFamily:'Call family', emergency:'Emergency',
    health:'Health', more:'More', home:'Home', call:'Call',
    addMed:'Add a medicine', medName:'Medicine name', medDose:'Dose', medTime:'Time', medNote:'When to take',
    anytime:'Any time', beforeFood:'Before food', afterFood:'After food', add:'Add',
    addContact:'Add a contact', name:'Name', phone:'Phone number', relation:'Relation',
    n112:'All emergencies', n108:'Ambulance', n14567:'Elderline – senior citizens helpline', n100:'Police', n101:'Fire',
    n181:'Women helpline', n1930:'Cyber fraud helpline',
    medCard:'My medical card', fullName:'Full name', age:'Age', blood:'Blood group', conditions:'Health conditions',
    allergies:'Allergies', doctor:'Doctor name & phone', address:'Home address', save:'Save',
    logReading:'Note a reading', bpTop:'BP upper', bpLow:'BP lower', sugar:'Sugar', weight:'Weight (kg)', history:'Past readings',
    appts:'Doctor visits', water:'Drink water', whereAmI:'Where am I?', fakeCall:'Fake phone call', brain:'Brain game',
    settings:'Settings', apptWhat:'Appointment', date:'Date', gameHelp:'Tap two cards to find matching pairs.', newGame:'New game',
    language:'Language', textSize:'Text size', theme:'Theme', light:'Light', dark:'Dark', contrast:'High contrast',
    speakOn:'Read things aloud', fallOn:'Fall detection', holdSos:'Hold SOS for 2 seconds (avoids accidental press)',
    checkinBy:'Daily "I\'m OK" time', waterEvery:'Water reminder', off:'Off', allowNotif:'Allow notifications',
    backup:'Save backup file', restore:'Restore from backup', wipe:'Erase all my data',
    taken:'I took it', snooze:'Remind in 10 min',
    fallTitle:'Did you fall? Are you OK?', fallSecs:'seconds, then help is sent', fallOk:"I'm OK", fallHelp:'I need help',
    sosConfirm:'Send an emergency message to your family?', yesHelp:'Yes, send help', cancel:'Cancel',
    incoming:'Incoming call…', answer:'Answer', decline:'Decline',
    okDone:'Checked in at ', okNone:'Tap to tell family you are fine', nextMed:'Next: ', noMeds:'No medicines added', allDone:'All done today',
    glasses:'glasses today', sosNoContact:'No family contact saved. Add one, or call 112.', sosLocating:'Getting your location…',
    sosSent:'Message ready – press Send. Then call:', missedAsk:"You haven't checked in today. Alert your family?",
    medDue:'Time for your medicine', empty:'Nothing here yet', waterTime:'Time to drink a glass of water',
    fallSent:'No reply – sending help', locFail:'Could not get location. Please turn on GPS.', shareLoc:'Share my location',
    savedOk:'Saved', bpHigh:'This BP is very high. Please call your doctor now.', sugHigh:'Sugar is very high. Please call your doctor.',
    sugLow:'Sugar is low. Eat something sweet and call your doctor.', bpLowWarn:'BP is low. Sit down, drink water and call your doctor.',
    normal:'Reading saved', apptToday:'You have a doctor visit today', apptTomorrow:'You have a doctor visit tomorrow',
    confirmWipe:'Erase everything saved in this app?', importOk:'Backup restored', importBad:'That file is not a Sathi backup',
    notifOk:'Notifications allowed', notifNo:'Notifications blocked in browser settings', fallNeedsSensor:'Fall detection needs motion sensor permission',
    delete:'Delete', iAm:'I am'
  },
  hi: {
    gm:'सुप्रभात', ga:'नमस्कार', ge:'शुभ संध्या',
    sosHint:'मदद के लिए दबाएँ', imOk:'मैं ठीक हूँ', meds:'दवाइयाँ', callFamily:'परिवार को फ़ोन', emergency:'आपातकाल',
    health:'सेहत', more:'और', home:'होम', call:'फ़ोन',
    addMed:'दवा जोड़ें', medName:'दवा का नाम', medDose:'मात्रा', medTime:'समय', medNote:'कब लेनी है',
    anytime:'कभी भी', beforeFood:'खाने से पहले', afterFood:'खाने के बाद', add:'जोड़ें',
    addContact:'संपर्क जोड़ें', name:'नाम', phone:'फ़ोन नंबर', relation:'रिश्ता',
    n112:'सभी आपातकाल', n108:'एम्बुलेंस', n14567:'एल्डरलाइन – वरिष्ठ नागरिक हेल्पलाइन', n100:'पुलिस', n101:'दमकल',
    n181:'महिला हेल्पलाइन', n1930:'साइबर ठगी हेल्पलाइन',
    medCard:'मेरा मेडिकल कार्ड', fullName:'पूरा नाम', age:'उम्र', blood:'ब्लड ग्रुप', conditions:'बीमारियाँ',
    allergies:'एलर्जी', doctor:'डॉक्टर का नाम व फ़ोन', address:'घर का पता', save:'सहेजें',
    logReading:'रीडिंग लिखें', bpTop:'BP ऊपर', bpLow:'BP नीचे', sugar:'शुगर', weight:'वज़न (kg)', history:'पुराना रिकॉर्ड',
    appts:'डॉक्टर / अपॉइंटमेंट', water:'पानी पिएँ', whereAmI:'मैं कहाँ हूँ?', fakeCall:'नकली फ़ोन कॉल', brain:'दिमागी खेल',
    settings:'सेटिंग्स', apptWhat:'अपॉइंटमेंट', date:'तारीख़', gameHelp:'दो कार्ड दबाकर जोड़ी मिलाइए।', newGame:'नया खेल',
    language:'भाषा', textSize:'अक्षर का आकार', theme:'थीम', light:'हल्का', dark:'गहरा', contrast:'तेज़ कंट्रास्ट',
    speakOn:'बोलकर सुनाएँ', fallOn:'गिरने की पहचान', holdSos:'SOS 2 सेकंड दबाकर रखें',
    checkinBy:'रोज़ "मैं ठीक हूँ" का समय', waterEvery:'पानी की याद', off:'बंद', allowNotif:'नोटिफ़िकेशन की अनुमति',
    backup:'बैकअप फ़ाइल सहेजें', restore:'बैकअप से वापस लाएँ', wipe:'मेरा सारा डेटा मिटाएँ',
    taken:'ले ली', snooze:'10 मिनट बाद याद दिलाएँ',
    fallTitle:'क्या आप गिर गए? आप ठीक हैं?', fallSecs:'सेकंड, फिर मदद भेजी जाएगी', fallOk:'मैं ठीक हूँ', fallHelp:'मदद चाहिए',
    sosConfirm:'परिवार को आपातकालीन संदेश भेजें?', yesHelp:'हाँ, मदद भेजें', cancel:'रद्द करें',
    incoming:'कॉल आ रही है…', answer:'उठाएँ', decline:'काटें',
    okDone:'ठीक हूँ बताया: ', okNone:'परिवार को बताने के लिए दबाएँ', nextMed:'अगली: ', noMeds:'कोई दवा नहीं जोड़ी', allDone:'आज की सब हो गईं',
    glasses:'गिलास आज', sosNoContact:'कोई संपर्क नहीं है। संपर्क जोड़ें या 112 मिलाएँ।', sosLocating:'लोकेशन ली जा रही है…',
    sosSent:'संदेश तैयार है – भेजें दबाएँ। फिर फ़ोन करें:', medDue:'दवा का समय हो गया', waterTime:'एक गिलास पानी पीने का समय',
    savedOk:'सहेजा गया', delete:'हटाएँ'
  },
  pa: {
    gm:'ਸ਼ੁਭ ਸਵੇਰ', ga:'ਸਤ ਸ੍ਰੀ ਅਕਾਲ', ge:'ਸ਼ੁਭ ਸ਼ਾਮ', sosHint:'ਮਦਦ ਲਈ ਦਬਾਓ', imOk:'ਮੈਂ ਠੀਕ ਹਾਂ', meds:'ਦਵਾਈਆਂ',
    callFamily:'ਪਰਿਵਾਰ ਨੂੰ ਫ਼ੋਨ', emergency:'ਐਮਰਜੈਂਸੀ', health:'ਸਿਹਤ', more:'ਹੋਰ', home:'ਘਰ', call:'ਫ਼ੋਨ',
    taken:'ਲੈ ਲਈ', snooze:'10 ਮਿੰਟ ਬਾਅਦ', save:'ਸੰਭਾਲੋ', add:'ਜੋੜੋ', cancel:'ਰੱਦ ਕਰੋ', settings:'ਸੈਟਿੰਗਾਂ', language:'ਭਾਸ਼ਾ',
    fallTitle:'ਕੀ ਤੁਸੀਂ ਡਿੱਗ ਪਏ? ਤੁਸੀਂ ਠੀਕ ਹੋ?', fallOk:'ਮੈਂ ਠੀਕ ਹਾਂ', fallHelp:'ਮਦਦ ਚਾਹੀਦੀ ਹੈ', yesHelp:'ਹਾਂ, ਮਦਦ ਭੇਜੋ',
    sosConfirm:'ਪਰਿਵਾਰ ਨੂੰ ਮਦਦ ਦਾ ਸੁਨੇਹਾ ਭੇਜੀਏ?', water:'ਪਾਣੀ', appts:'ਡਾਕਟਰ / ਮੁਲਾਕਾਤ', brain:'ਦਿਮਾਗੀ ਖੇਡ', medDue:'ਦਵਾਈ ਦਾ ਸਮਾਂ ਹੋ ਗਿਆ'
  },
  bn: {
    gm:'সুপ্রভাত', ga:'নমস্কার', ge:'শুভ সন্ধ্যা', sosHint:'সাহায্যের জন্য চাপুন', imOk:'আমি ভালো আছি', meds:'ওষুধ',
    callFamily:'পরিবারকে ফোন', emergency:'জরুরি', health:'স্বাস্থ্য', more:'আরও', home:'হোম', call:'ফোন',
    taken:'খেয়েছি', snooze:'১০ মিনিট পরে', save:'সংরক্ষণ', add:'যোগ করুন', cancel:'বাতিল', settings:'সেটিংস', language:'ভাষা',
    fallTitle:'আপনি কি পড়ে গেছেন? আপনি ঠিক আছেন?', fallOk:'আমি ঠিক আছি', fallHelp:'সাহায্য চাই', yesHelp:'হ্যাঁ, সাহায্য পাঠান',
    sosConfirm:'পরিবারকে জরুরি বার্তা পাঠাবেন?', water:'জল', appts:'ডাক্তার / অ্যাপয়েন্টমেন্ট', brain:'মস্তিষ্কের খেলা', medDue:'ওষুধ খাওয়ার সময় হয়েছে'
  },
  ta: {
    gm:'காலை வணக்கம்', ga:'வணக்கம்', ge:'மாலை வணக்கம்', sosHint:'உதவிக்கு அழுத்தவும்', imOk:'நான் நலம்', meds:'மருந்துகள்',
    callFamily:'குடும்பத்தை அழை', emergency:'அவசரம்', health:'ஆரோக்கியம்', more:'மேலும்', home:'முகப்பு', call:'அழை',
    taken:'சாப்பிட்டேன்', snooze:'10 நிமிடம் கழித்து', save:'சேமி', add:'சேர்', cancel:'ரத்து', settings:'அமைப்புகள்', language:'மொழி',
    fallTitle:'நீங்கள் விழுந்தீர்களா? நலமா?', fallOk:'நான் நலம்', fallHelp:'உதவி வேண்டும்', yesHelp:'ஆம், உதவி அனுப்பு',
    sosConfirm:'குடும்பத்திற்கு அவசர செய்தி அனுப்பவா?', water:'தண்ணீர்', appts:'மருத்துவர் சந்திப்பு', brain:'மூளை விளையாட்டு', medDue:'மருந்து சாப்பிடும் நேரம்'
  },
  te: {
    gm:'శుభోదయం', ga:'నమస్కారం', ge:'శుభ సాయంత్రం', sosHint:'సహాయం కోసం నొక్కండి', imOk:'నేను బాగున్నాను', meds:'మందులు',
    callFamily:'కుటుంబానికి కాల్', emergency:'అత్యవసరం', health:'ఆరోగ్యం', more:'మరిన్ని', home:'హోమ్', call:'కాల్',
    taken:'వేసుకున్నాను', snooze:'10 నిమిషాల తర్వాత', save:'సేవ్', add:'చేర్చు', cancel:'రద్దు', settings:'సెట్టింగ్‌లు', language:'భాష',
    fallTitle:'మీరు పడిపోయారా? బాగున్నారా?', fallOk:'నేను బాగున్నాను', fallHelp:'సహాయం కావాలి', yesHelp:'అవును, సహాయం పంపు',
    sosConfirm:'కుటుంబానికి అత్యవసర సందేశం పంపాలా?', water:'నీళ్లు', appts:'డాక్టర్ అపాయింట్‌మెంట్', brain:'బ్రెయిన్ గేమ్', medDue:'మందు వేసుకునే సమయం'
  },
  mr: {
    gm:'सुप्रभात', ga:'नमस्कार', ge:'शुभ संध्याकाळ', sosHint:'मदतीसाठी दाबा', imOk:'मी ठीक आहे', meds:'औषधे',
    callFamily:'कुटुंबाला फोन', emergency:'आपत्कालीन', health:'आरोग्य', more:'अधिक', home:'होम', call:'फोन',
    taken:'घेतले', snooze:'१० मिनिटांनी', save:'जतन करा', add:'जोडा', cancel:'रद्द करा', settings:'सेटिंग्ज', language:'भाषा',
    fallTitle:'तुम्ही पडलात का? तुम्ही ठीक आहात?', fallOk:'मी ठीक आहे', fallHelp:'मदत हवी', yesHelp:'हो, मदत पाठवा',
    sosConfirm:'कुटुंबाला आपत्कालीन संदेश पाठवायचा?', water:'पाणी', appts:'डॉक्टर भेट', brain:'मेंदूचा खेळ', medDue:'औषधाची वेळ झाली'
  },
  gu: {
    gm:'સુપ્રભાત', ga:'નમસ્તે', ge:'શુભ સંધ્યા', sosHint:'મદદ માટે દબાવો', imOk:'હું ઠીક છું', meds:'દવાઓ',
    callFamily:'પરિવારને ફોન', emergency:'ઇમરજન્સી', health:'આરોગ્ય', more:'વધુ', home:'હોમ', call:'ફોન',
    taken:'લઈ લીધી', snooze:'૧૦ મિનિટ પછી', save:'સાચવો', add:'ઉમેરો', cancel:'રદ કરો', settings:'સેટિંગ્સ', language:'ભાષા',
    fallTitle:'શું તમે પડી ગયા? તમે ઠીક છો?', fallOk:'હું ઠીક છું', fallHelp:'મદદ જોઈએ', yesHelp:'હા, મદદ મોકલો',
    sosConfirm:'પરિવારને ઇમરજન્સી સંદેશ મોકલવો?', water:'પાણી', appts:'ડૉક્ટર મુલાકાત', brain:'મગજની રમત', medDue:'દવાનો સમય થયો'
  }
};
const LOCALE = {en:'en-IN',hi:'hi-IN',pa:'pa-IN',bn:'bn-IN',ta:'ta-IN',te:'te-IN',mr:'mr-IN',gu:'gu-IN'};

/* ---------- State ---------- */
const KEY = 'sathi.v1';
const DEFAULT = {
  lang:'en', fs:120, theme:'light', speakOn:false, fallOn:false, holdSos:false,
  checkinTime:'10:00', waterGap:0,
  contacts:[], meds:[], taken:{}, profile:{}, readings:[], appts:[],
  checkin:'', checkinAt:'', water:{date:'', n:0}, snooze:{}, flags:{}
};
let S = load();
function load(){
  try { return Object.assign({}, DEFAULT, JSON.parse(localStorage.getItem(KEY) || '{}')); }
  catch(e){ return Object.assign({}, DEFAULT); }
}
function save(){ try { localStorage.setItem(KEY, JSON.stringify(S)); } catch(e){} }

/* ---------- Helpers ---------- */
const $ = id => document.getElementById(id);
const tr = k => (T[S.lang] && T[S.lang][k]) || T.en[k] || k;
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const pad = n => String(n).padStart(2,'0');
const todayStr = () => { const d = new Date(); return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate()); };
const hhmm = (d = new Date()) => pad(d.getHours())+':'+pad(d.getMinutes());
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2,6);
const phoneClean = p => String(p).replace(/[^\d+]/g,'');

function toast(msg){
  const t = $('toast'); t.textContent = msg; t.classList.add('show');
  clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove('show'), 3500);
}
function speak(text, force){
  if (!('speechSynthesis' in window)) return;
  if (!force && !S.speakOn) return;
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = LOCALE[S.lang] || 'en-IN'; u.rate = 0.9;
    speechSynthesis.speak(u);
  } catch(e){}
}
let audioCtx;
function beep(freq = 880, ms = 300){
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    const o = audioCtx.createOscillator(), g = audioCtx.createGain();
    o.frequency.value = freq; o.connect(g); g.connect(audioCtx.destination);
    g.gain.value = 0.4; o.start(); o.stop(audioCtx.currentTime + ms/1000);
  } catch(e){}
}
function buzz(p){ try { navigator.vibrate && navigator.vibrate(p); } catch(e){} }
function notify(title, body){
  try {
    if (!('Notification' in window) || Notification.permission !== 'granted') return;
    if (navigator.serviceWorker && navigator.serviceWorker.ready) {
      navigator.serviceWorker.ready.then(r => r.showNotification(title, {body, icon:'icon.svg', vibrate:[300,150,300], tag:title}));
    } else { new Notification(title, {body}); }
  } catch(e){}
}

/* ---------- i18n & display ---------- */
function applyI18n(){
  document.documentElement.lang = S.lang;
  document.querySelectorAll('[data-t]').forEach(el => { el.textContent = tr(el.dataset.t); });
  renderHome();
}
function applyLook(){
  document.documentElement.style.setProperty('--fs', S.fs + '%');
  document.documentElement.setAttribute('data-theme', S.theme);
}
function greeting(){
  const h = new Date().getHours();
  const g = h < 12 ? tr('gm') : h < 17 ? tr('ga') : tr('ge');
  return g + (S.profile.name ? ', ' + S.profile.name.split(' ')[0] : '');
}
function tickClock(){
  const d = new Date();
  $('greet').textContent = greeting();
  $('clock').textContent = d.toLocaleDateString(LOCALE[S.lang], {weekday:'long', day:'numeric', month:'long'}) + ' · ' +
    d.toLocaleTimeString(LOCALE[S.lang], {hour:'numeric', minute:'2-digit'});
}

/* ---------- Navigation ---------- */
function go(name){
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  $('s-' + name).classList.add('active');
  document.querySelectorAll('.nav button').forEach(b => b.classList.toggle('on', b.dataset.go === name));
  window.scrollTo(0,0);
  if (name === 'meds') renderMeds();
  if (name === 'call') renderContacts();
  if (name === 'health') { fillProfile(); renderReadings(); }
  if (name === 'appt') renderAppts();
  if (name === 'game') newGame();
  if (name === 'settings') fillSettings();
  if (name === 'more') renderWater();
}
document.addEventListener('click', e => {
  const b = e.target.closest('[data-go]');
  if (b) go(b.dataset.go);
});

/* ---------- Home ---------- */
function renderHome(){
  tickClock();
  $('okSub').textContent = S.checkin === todayStr() ? tr('okDone') + S.checkinAt : tr('okNone');
  const t = todayStr(), list = S.meds.slice().sort((a,b) => a.time.localeCompare(b.time));
  if (!list.length) { $('medSub').textContent = tr('noMeds'); return; }
  const pending = list.filter(m => !(S.taken[t] && S.taken[t][m.id]));
  if (!pending.length) { $('medSub').textContent = tr('allDone'); return; }
  const now = hhmm();
  const next = pending.find(m => m.time >= now) || pending[0];
  $('medSub').textContent = tr('nextMed') + next.name + ' ' + next.time;
}
$('okBtn').addEventListener('click', () => {
  S.checkin = todayStr(); S.checkinAt = hhmm(); save(); renderHome();
  toast('✅ ' + tr('okDone') + S.checkinAt);
  const c = S.contacts[0];
  if (c) {
    const msg = (S.profile.name || '') + ' ✅ ' + tr('imOk');
    $('sosStatus').innerHTML = '<a href="' + smsHref([c.phone], msg) + '">💬 ' + esc(c.name) + '</a>';
  }
  speak(tr('imOk'));
});

/* ---------- SOS ---------- */
function smsHref(nums, body){
  const sep = /iPhone|iPad|iPod/.test(navigator.userAgent) ? '&' : '?';
  return 'sms:' + nums.map(phoneClean).join(',') + sep + 'body=' + encodeURIComponent(body);
}
function medicalSummary(){
  const p = S.profile, parts = [];
  if (p.name) parts.push(p.name + (p.age ? ' (' + p.age + ')' : ''));
  if (p.blood) parts.push('Blood: ' + p.blood);
  if (p.conditions) parts.push('Conditions: ' + p.conditions);
  if (p.allergies) parts.push('Allergies: ' + p.allergies);
  if (p.doctor) parts.push('Doctor: ' + p.doctor);
  if (p.address) parts.push('Address: ' + p.address);
  return parts.join(' | ');
}
function getPos(){
  return new Promise(res => {
    if (!navigator.geolocation) return res(null);
    navigator.geolocation.getCurrentPosition(p => res(p.coords), () => res(null), {enableHighAccuracy:true, timeout:8000, maximumAge:30000});
  });
}
async function triggerSOS(reason){
  buzz([400,200,400]);
  const st = $('sosStatus');
  if (!S.contacts.length) {
    st.innerHTML = esc(tr('sosNoContact')) + ' <a href="tel:112">📞 112</a>';
    speak(tr('sosNoContact'), true); return;
  }
  st.textContent = tr('sosLocating');
  const pos = await getPos();
  let msg = '🆘 EMERGENCY – ' + (S.profile.name || 'Your family member') + ' needs help' + (reason ? ' (' + reason + ')' : '') + '.\n';
  msg += pos ? 'Location: https://maps.google.com/?q=' + pos.latitude.toFixed(6) + ',' + pos.longitude.toFixed(6) + '\n' : '(Location not available)\n';
  const med = medicalSummary(); if (med) msg += med;
  const nums = S.contacts.map(c => c.phone);
  const first = S.contacts[0];
  st.innerHTML = esc(tr('sosSent')) + '<br><a href="tel:' + esc(phoneClean(first.phone)) + '">📞 ' + esc(first.name) + '</a> · <a href="tel:112">📞 112</a>';
  $('sosBtn').classList.add('alert');
  setTimeout(() => $('sosBtn').classList.remove('alert'), 8000);
  window.location.href = smsHref(nums, msg);
}
/* tap or hold */
(function(){
  const btn = $('sosBtn'); let timer, started = 0, raf;
  const fillEl = document.createElement('div'); fillEl.className = 'fill'; btn.prepend(fillEl);
  function start(e){
    if (!S.holdSos) return;
    e.preventDefault(); started = Date.now(); buzz(40);
    const step = () => { const p = Math.min(1, (Date.now() - started) / 2000); fillEl.style.width = (p*100) + '%'; if (p < 1) raf = requestAnimationFrame(step); };
    step();
    timer = setTimeout(() => { fillEl.style.width = '0'; confirmMode = 'sos'; triggerSOS('SOS button'); }, 2000);
  }
  function cancel(){ clearTimeout(timer); cancelAnimationFrame(raf); fillEl.style.width = '0'; }
  btn.addEventListener('touchstart', start, {passive:false});
  btn.addEventListener('mousedown', start);
  ['touchend','touchcancel','mouseup','mouseleave'].forEach(ev => btn.addEventListener(ev, cancel));
  btn.addEventListener('click', () => { if (!S.holdSos) openConfirm('sos'); else toast(tr('sosHint')); });
})();

let confirmMode = 'sos';
function openConfirm(mode){
  confirmMode = mode;
  const t = mode === 'missed' ? tr('missedAsk') : tr('sosConfirm');
  document.querySelector('#confirm h2').textContent = t;
  $('confirm').classList.add('show'); speak(t, true); beep(660, 250);
}
$('confirmYes').addEventListener('click', () => {
  $('confirm').classList.remove('show');
  triggerSOS(confirmMode === 'missed' ? 'missed daily check-in' : 'SOS button');
});
$('confirmNo').addEventListener('click', () => $('confirm').classList.remove('show'));

/* ---------- Medicines ---------- */
function isTaken(id){ const t = S.taken[todayStr()]; return !!(t && t[id]); }
function markTaken(id){
  const t = todayStr(); S.taken[t] = S.taken[t] || {}; S.taken[t][id] = hhmm();
  Object.keys(S.taken).forEach(d => { if (d < t && Object.keys(S.taken).length > 14) delete S.taken[d]; });
  save(); renderMeds(); renderHome();
}
function renderMeds(){
  const list = S.meds.slice().sort((a,b) => a.time.localeCompare(b.time));
  $('medList').innerHTML = list.length ? list.map(m => {
    const done = isTaken(m.id);
    const note = m.note === 'before' ? tr('beforeFood') : m.note === 'after' ? tr('afterFood') : '';
    return '<div class="item' + (done ? ' done' : '') + '"><div class="info"><b>' + esc(m.time) + ' – ' + esc(m.name) +
      (done ? '<span class="pill">✓</span>' : '') + '</b><small>' + esc([m.dose, note].filter(Boolean).join(' · ')) + '</small></div>' +
      '<div class="acts">' + (done ? '' : '<button class="mini" data-take="' + m.id + '" aria-label="' + esc(tr('taken')) + '">✓</button>') +
      '<button class="mini del" data-delmed="' + m.id + '" aria-label="' + esc(tr('delete')) + '">🗑</button></div></div>';
  }).join('') : '<div class="card center">' + esc(tr('noMeds')) + '</div>';
}
$('medList').addEventListener('click', e => {
  const t = e.target.closest('[data-take]'), d = e.target.closest('[data-delmed]');
  if (t) markTaken(t.dataset.take);
  if (d) { S.meds = S.meds.filter(m => m.id !== d.dataset.delmed); save(); renderMeds(); renderHome(); }
});
$('addMed').addEventListener('click', () => {
  const name = $('medName').value.trim();
  if (!name) { $('medName').focus(); return; }
  S.meds.push({id:uid(), name, dose:$('medDose').value.trim(), time:$('medTime').value || '08:00', note:$('medNote').value});
  save(); $('medName').value = ''; $('medDose').value = ''; renderMeds(); renderHome(); toast(tr('savedOk'));
});

/* medicine alarm */
let alarmId = null, alarmLoop = null;
function fireAlarm(m){
  if ($('alarm').classList.contains('show')) return;
  alarmId = m.id;
  $('alarmTitle').textContent = tr('medDue');
  const note = m.note === 'before' ? tr('beforeFood') : m.note === 'after' ? tr('afterFood') : '';
  $('alarmText').textContent = [m.name, m.dose, note].filter(Boolean).join(' · ');
  $('alarm').classList.add('show');
  const ring = () => { beep(880, 250); setTimeout(() => beep(1100, 250), 350); buzz([300,150,300]); };
  ring(); clearInterval(alarmLoop); alarmLoop = setInterval(ring, 3000);
  speak(tr('medDue') + '. ' + m.name, true);
  notify(tr('medDue'), m.name + ' ' + (m.dose || ''));
}
function closeAlarm(){ clearInterval(alarmLoop); $('alarm').classList.remove('show'); try { speechSynthesis.cancel(); } catch(e){} }
$('alarmTaken').addEventListener('click', () => { if (alarmId) markTaken(alarmId); closeAlarm(); });
$('alarmSnooze').addEventListener('click', () => { if (alarmId) { S.snooze[alarmId] = Date.now() + 10*60*1000; save(); } closeAlarm(); });

/* ---------- Contacts ---------- */
function renderContacts(){
  $('contactList').innerHTML = S.contacts.length ? S.contacts.map(c =>
    '<div class="item"><div class="info"><b>' + esc(c.name) + '</b><small>' + esc([c.rel, c.phone].filter(Boolean).join(' · ')) + '</small></div>' +
    '<div class="acts"><a class="mini" style="display:flex;align-items:center;justify-content:center;text-decoration:none" href="tel:' + esc(phoneClean(c.phone)) + '" aria-label="Call">📞</a>' +
    '<button class="mini del" data-delc="' + c.id + '" aria-label="' + esc(tr('delete')) + '">🗑</button></div></div>'
  ).join('') : '<div class="card center">' + esc(tr('sosNoContact')) + '</div>';
}
$('contactList').addEventListener('click', e => {
  const d = e.target.closest('[data-delc]');
  if (d) { S.contacts = S.contacts.filter(c => c.id !== d.dataset.delc); save(); renderContacts(); }
});
$('addContact').addEventListener('click', () => {
  const name = $('cName').value.trim(), phone = $('cPhone').value.trim();
  if (!name || !phone) { (name ? $('cPhone') : $('cName')).focus(); return; }
  S.contacts.push({id:uid(), name, phone, rel:$('cRel').value.trim()});
  save(); ['cName','cPhone','cRel'].forEach(i => $(i).value = ''); renderContacts(); toast(tr('savedOk'));
});

/* ---------- Health ---------- */
const PF = {pName:'name', pAge:'age', pBlood:'blood', pCond:'conditions', pAllergy:'allergies', pDoctor:'doctor', pAddr:'address'};
function fillProfile(){ Object.keys(PF).forEach(id => { $(id).value = S.profile[PF[id]] || ''; }); }
$('saveProfile').addEventListener('click', () => {
  Object.keys(PF).forEach(id => { S.profile[PF[id]] = $(id).value.trim(); });
  save(); tickClock(); toast(tr('savedOk'));
});
function renderReadings(){
  const r = S.readings.slice().reverse().slice(0, 12);
  $('readingList').innerHTML = r.length ? r.map(x =>
    '<div class="item"><div class="info"><b>' + esc(x.date) + ' ' + esc(x.time) + '</b><small>' +
    [x.s ? 'BP ' + x.s + '/' + x.d : '', x.sugar ? tr('sugar') + ' ' + x.sugar : '', x.w ? x.w + ' kg' : ''].filter(Boolean).join(' · ') + '</small></div></div>'
  ).join('') : '<div class="center">' + esc(tr('empty')) + '</div>';
}
$('addReading').addEventListener('click', () => {
  const s = +$('bpS').value, d = +$('bpD').value, sug = +$('sugar').value, w = +$('weight').value;
  if (!s && !sug && !w) return;
  S.readings.push({date:todayStr(), time:hhmm(), s:s||'', d:d||'', sugar:sug||'', w:w||''});
  if (S.readings.length > 200) S.readings.shift();
  save();
  let msg = tr('normal'), warn = false;
  if (s >= 180 || d >= 120) { msg = tr('bpHigh'); warn = true; }
  else if (s && s < 90) { msg = tr('bpLowWarn'); warn = true; }
  if (sug >= 300) { msg = tr('sugHigh'); warn = true; }
  else if (sug && sug < 70) { msg = tr('sugLow'); warn = true; }
  $('readingMsg').textContent = (warn ? '⚠️ ' : '✅ ') + msg;
  $('readingMsg').style.color = warn ? 'var(--red)' : 'var(--green)';
  if (warn) { speak(msg, true); buzz([200,100,200]); }
  ['bpS','bpD','sugar','weight'].forEach(i => $(i).value = '');
  renderReadings();
});

/* ---------- Appointments ---------- */
function renderAppts(){
  const t = todayStr();
  S.appts = S.appts.filter(a => a.date >= t); save();
  const list = S.appts.slice().sort((a,b) => (a.date + a.time).localeCompare(b.date + b.time));
  $('apptList').innerHTML = list.length ? list.map(a => {
    const dt = new Date(a.date + 'T00:00:00').toLocaleDateString(LOCALE[S.lang], {weekday:'short', day:'numeric', month:'short'});
    return '<div class="item"><div class="info"><b>' + esc(a.what) + '</b><small>' + esc(dt + ' · ' + a.time) + '</small></div>' +
      '<div class="acts"><button class="mini del" data-dela="' + a.id + '" aria-label="' + esc(tr('delete')) + '">🗑</button></div></div>';
  }).join('') : '<div class="card center">' + esc(tr('empty')) + '</div>';
}
$('apptList').addEventListener('click', e => {
  const d = e.target.closest('[data-dela]');
  if (d) { S.appts = S.appts.filter(a => a.id !== d.dataset.dela); save(); renderAppts(); }
});
$('addAppt').addEventListener('click', () => {
  const what = $('apptWhat').value.trim(), date = $('apptDate').value;
  if (!what || !date) { (what ? $('apptDate') : $('apptWhat')).focus(); return; }
  S.appts.push({id:uid(), what, date, time:$('apptTime').value || '10:00'});
  save(); $('apptWhat').value = ''; renderAppts(); toast(tr('savedOk'));
});
function apptReminder(){
  const t = todayStr(), tm = new Date(Date.now() + 86400000), tom = tm.getFullYear()+'-'+pad(tm.getMonth()+1)+'-'+pad(tm.getDate());
  S.appts.forEach(a => {
    const k = 'appt' + a.id + (a.date === t ? 't' : 'm');
    if ((a.date === t || a.date === tom) && !S.flags[k]) {
      S.flags[k] = 1; save();
      const m = (a.date === t ? tr('apptToday') : tr('apptTomorrow')) + ': ' + a.what + ' ' + a.time;
      toast(m); notify('Sathi', m); speak(m);
    }
  });
}

/* ---------- Water ---------- */
function renderWater(){
  if (S.water.date !== todayStr()) { S.water = {date:todayStr(), n:0}; save(); }
  $('waterSub').textContent = S.water.n + ' ' + tr('glasses');
}
$('waterBtn').addEventListener('click', () => { renderWater(); S.water.n++; save(); renderWater(); toast('💧 ' + S.water.n + ' ' + tr('glasses')); });
let lastWater = Date.now();
function waterCheck(){
  const gap = +S.waterGap; if (!gap) return;
  const h = new Date().getHours(); if (h < 7 || h > 21) return;
  if (Date.now() - lastWater >= gap * 60000) {
    lastWater = Date.now(); toast('💧 ' + tr('waterTime')); notify('Sathi', tr('waterTime')); speak(tr('waterTime')); beep(700, 200);
  }
}

/* ---------- Where am I ---------- */
$('whereBtn').addEventListener('click', async () => {
  $('whereMsg').textContent = tr('sosLocating');
  const p = await getPos();
  if (!p) { $('whereMsg').textContent = tr('locFail'); return; }
  const link = 'https://maps.google.com/?q=' + p.latitude.toFixed(6) + ',' + p.longitude.toFixed(6);
  const body = (S.profile.name || '') + ' – ' + link;
  const nums = S.contacts.map(c => c.phone);
  $('whereMsg').innerHTML = '<a href="' + esc(link) + '" target="_blank" rel="noopener">📍 Map</a>' +
    (nums.length ? ' · <a href="' + esc(smsHref(nums, body)) + '">💬 ' + esc(tr('shareLoc')) + '</a>' : '');
});

/* ---------- Fake call ---------- */
let fakeLoop;
$('fakeBtn').addEventListener('click', () => {
  toast(tr('incoming')); 
  setTimeout(() => {
    $('fakeName').textContent = (S.contacts[0] && S.contacts[0].name) || tr('callFamily');
    $('fake').classList.add('show');
    const ring = () => { beep(520, 400); buzz([500,300,500]); };
    ring(); fakeLoop = setInterval(ring, 1500);
  }, 5000);
});
function endFake(){ clearInterval(fakeLoop); $('fake').classList.remove('show'); }
$('fakeAnswer').addEventListener('click', endFake);
$('fakeEnd').addEventListener('click', endFake);

/* ---------- Brain game ---------- */
let gFirst = null, gLock = false, gPairs = 0, gMoves = 0;
function newGame(){
  const em = ['🌸','🐘','🍎','🚗','⭐','🐟'];
  const deck = em.concat(em).sort(() => Math.random() - 0.5);
  gFirst = null; gLock = false; gPairs = 0; gMoves = 0; $('gameMsg').textContent = '';
  $('gameGrid').innerHTML = deck.map((e,i) => '<button class="gcard" data-i="' + i + '" data-e="' + e + '" aria-label="card">?</button>').join('');
}
$('gameGrid').addEventListener('click', e => {
  const c = e.target.closest('.gcard');
  if (!c || gLock || c.classList.contains('up') || c.classList.contains('matched')) return;
  c.classList.add('up'); c.textContent = c.dataset.e;
  if (!gFirst) { gFirst = c; return; }
  gMoves++; gLock = true;
  if (gFirst.dataset.e === c.dataset.e) {
    [gFirst, c].forEach(x => { x.classList.remove('up'); x.classList.add('matched'); });
    gFirst = null; gLock = false; gPairs++;
    if (gPairs === 6) { $('gameMsg').textContent = '🎉 ' + gMoves + ' moves!'; speak('Well done', false); beep(1000, 300); }
  } else {
    const a = gFirst; gFirst = null;
    setTimeout(() => { [a, c].forEach(x => { x.classList.remove('up'); x.textContent = '?'; }); gLock = false; }, 900);
  }
});
$('gameNew').addEventListener('click', newGame);

/* ---------- Fall detection ---------- */
let fallTimer, fallLeft = 30, motionOn = false, impactAt = 0, samples = [];
function onMotion(e){
  const a = e.accelerationIncludingGravity; if (!a || !S.fallOn) return;
  const mag = Math.sqrt((a.x||0)**2 + (a.y||0)**2 + (a.z||0)**2), now = Date.now();
  if (!impactAt && mag > 30 && !$('fall').classList.contains('show')) { impactAt = now; samples = []; return; }
  if (impactAt) {
    const dt = now - impactAt;
    if (dt > 800 && dt < 3800) samples.push(mag);
    if (dt >= 3800) {
      const still = samples.length > 5 && samples.every(m => Math.abs(m - 9.8) < 2.5);
      impactAt = 0; samples = [];
      if (still) showFall();
    }
  }
}
function setMotion(on){
  if (on && !motionOn) { window.addEventListener('devicemotion', onMotion); motionOn = true; }
  if (!on && motionOn) { window.removeEventListener('devicemotion', onMotion); motionOn = false; }
}
function showFall(){
  fallLeft = 30; $('fallCount').textContent = fallLeft; $('fall').classList.add('show');
  speak(tr('fallTitle'), true);
  clearInterval(fallTimer);
  fallTimer = setInterval(() => {
    fallLeft--; $('fallCount').textContent = fallLeft; beep(900, 200); buzz(300);
    if (fallLeft <= 0) { clearInterval(fallTimer); $('fall').classList.remove('show'); toast(tr('fallSent')); triggerSOS('possible fall'); }
  }, 1000);
}
$('fallOk').addEventListener('click', () => { clearInterval(fallTimer); $('fall').classList.remove('show'); try { speechSynthesis.cancel(); } catch(e){} });
$('fallHelp').addEventListener('click', () => { clearInterval(fallTimer); $('fall').classList.remove('show'); triggerSOS('asked for help after fall'); });

/* ---------- Daily check-in watcher ---------- */
function checkinWatch(){
  const t = todayStr(); if (S.checkin === t) return;
  const now = hhmm(), [h, m] = S.checkinTime.split(':').map(Number);
  const due = pad(h) + ':' + pad(m), lateMin = h*60 + m + 30, nowMin = new Date().getHours()*60 + new Date().getMinutes();
  if (now >= due && !S.flags['rem' + t]) {
    S.flags['rem' + t] = 1; save(); toast('✅ ' + tr('okNone')); notify('Sathi', tr('okNone')); speak(tr('okNone'));
  }
  if (nowMin >= lateMin && nowMin < lateMin + 120 && S.contacts.length && !S.flags['miss' + t]) {
    S.flags['miss' + t] = 1; save(); openConfirm('missed');
  }
}

/* ---------- Settings ---------- */
function fillSettings(){
  $('lang').value = S.lang; $('fontSize').value = S.fs; $('theme').value = S.theme;
  $('speakOn').checked = S.speakOn; $('fallOn').checked = S.fallOn; $('holdSos').checked = S.holdSos;
  $('checkinTime').value = S.checkinTime; $('waterGap').value = String(S.waterGap);
}
$('lang').addEventListener('change', e => { S.lang = e.target.value; save(); applyI18n(); });
$('fontSize').addEventListener('input', e => { S.fs = +e.target.value; save(); applyLook(); });
$('theme').addEventListener('change', e => { S.theme = e.target.value; save(); applyLook(); });
$('speakOn').addEventListener('change', e => { S.speakOn = e.target.checked; save(); });
$('holdSos').addEventListener('change', e => { S.holdSos = e.target.checked; save(); });
$('checkinTime').addEventListener('change', e => { S.checkinTime = e.target.value || '10:00'; save(); });
$('waterGap').addEventListener('change', e => { S.waterGap = +e.target.value; lastWater = Date.now(); save(); });
$('fallOn').addEventListener('change', async e => {
  const on = e.target.checked;
  if (on && typeof DeviceMotionEvent !== 'undefined' && typeof DeviceMotionEvent.requestPermission === 'function') {
    try { const r = await DeviceMotionEvent.requestPermission(); if (r !== 'granted') { e.target.checked = false; toast(tr('fallNeedsSensor')); return; } }
    catch(err){ e.target.checked = false; toast(tr('fallNeedsSensor')); return; }
  }
  if (on && typeof DeviceMotionEvent === 'undefined') { e.target.checked = false; toast(tr('fallNeedsSensor')); return; }
  S.fallOn = on; save(); setMotion(on);
});
$('notifBtn').addEventListener('click', async () => {
  if (!('Notification' in window)) return toast(tr('notifNo'));
  const r = await Notification.requestPermission();
  toast(r === 'granted' ? tr('notifOk') : tr('notifNo'));
});
$('exportBtn').addEventListener('click', () => {
  const blob = new Blob([JSON.stringify({app:'sathi', data:S}, null, 2)], {type:'application/json'});
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'sathi-backup-' + todayStr() + '.json';
  document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 2000);
});
$('importBtn').addEventListener('click', () => $('importFile').click());
$('importFile').addEventListener('change', e => {
  const f = e.target.files[0]; if (!f) return;
  const r = new FileReader();
  r.onload = () => {
    try {
      const j = JSON.parse(r.result);
      if (j.app !== 'sathi' || !j.data) throw 0;
      S = Object.assign({}, DEFAULT, j.data); save(); applyLook(); applyI18n(); fillSettings(); setMotion(S.fallOn); toast(tr('importOk'));
    } catch(err){ toast(tr('importBad')); }
  };
  r.readAsText(f); e.target.value = '';
});
$('wipeBtn').addEventListener('click', () => {
  if (!confirm(tr('confirmWipe'))) return;
  localStorage.removeItem(KEY); S = Object.assign({}, DEFAULT); setMotion(false); applyLook(); applyI18n(); fillSettings(); go('home');
});

/* ---------- Read aloud ---------- */
$('speakBtn').addEventListener('click', () => {
  const scr = document.querySelector('.screen.active');
  speak(greeting() + '. ' + (scr ? scr.innerText.replace(/\s+/g, ' ').slice(0, 450) : ''), true);
});

/* ---------- Scheduler ---------- */
function medCheck(){
  const now = hhmm(), t = todayStr();
  for (const m of S.meds) {
    if (isTaken(m.id)) continue;
    const key = 'med' + m.id + t;
    if (m.time === now && !S.flags[key]) { S.flags[key] = 1; save(); fireAlarm(m); return; }
    if (S.snooze[m.id] && Date.now() >= S.snooze[m.id]) { delete S.snooze[m.id]; save(); fireAlarm(m); return; }
  }
}
function tick(){ tickClock(); medCheck(); checkinWatch(); waterCheck(); }

/* ---------- Boot ---------- */
applyLook(); applyI18n(); fillSettings(); setMotion(S.fallOn);
// prune old flags
Object.keys(S.flags).forEach(k => { if (!k.includes(todayStr()) && !k.startsWith('appt')) delete S.flags[k]; }); save();
setInterval(tick, 15000);
setTimeout(() => { tick(); apptReminder(); }, 1200);
document.addEventListener('visibilitychange', () => { if (!document.hidden) { tick(); renderHome(); } });
if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});