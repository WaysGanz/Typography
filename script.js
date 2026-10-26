const $=id=>document.getElementById(id);
const ph=(p,cls='',alt='')=>`<div class="ph ${cls}" style="${p?`--img:url('${p}')`:''}" ${alt?`role="img" aria-label="${alt}"`:''}></div>`;
const C=SITE,T=C.theme,r=document.documentElement.style;
// tema & meta
r.setProperty('--sky',T.sky);r.setProperty('--forest',T.forest);r.setProperty('--moss',T.moss);r.setProperty('--sun',T.sun);
document.title=C.title;document.querySelector('meta[name=description]').content=C.description;
// nav & hero
$('logo').textContent=C.nav.logo;$('chip').textContent=C.nav.chip;
$('hero-title').setAttribute('aria-label',C.hero.title.join(''));
$('hero-title').innerHTML=C.hero.title.map(t=>`<span>${t}</span>`).join('');
$('kicker').textContent=C.hero.kicker;$('headline').innerHTML=C.hero.headline;$('hero-btn').innerHTML=`${C.hero.button} <span>»</span>`;
$('floaters').innerHTML=C.hero.floaters.map(f=>`<b>${f}</b>`).join('');
// panel
const A=C.adventure,J=C.journey,H=C.healing;
$('cerita').innerHTML=`
<section id="p-journey" role="tabpanel" aria-labelledby="t-journey" hidden>
  <h2 class="h">${J.heading}</h2>
  <div class="route glass"><div class="km"><strong>${J.km}</strong><span>${J.kmText}</span></div>
  <ol>${J.stops.map(s=>`<li><b>${s.name}</b>${s.text}</li>`).join('')}</ol></div>
  <div class="bento">${J.photos.map(p=>ph(p.src,p.wide?'w2':'',p.alt||'')).join('')}</div>
</section>
<section id="p-adventure" role="tabpanel" aria-labelledby="t-adventure" hidden>
  <h2 class="h">${A.heading}</h2>
  <div class="cards">${A.mountains.map(m=>`<article class="card glass ${m.tall?'tall':''}">${ph(m.photo,'',m.name)}<h3>${m.name}</h3><p class="meta">${m.meta}</p><p>${m.text}</p></article>`).join('')}</div>
</section>
<section id="p-healing" role="tabpanel" aria-labelledby="t-healing" hidden>
  <blockquote class="quote">${H.quote}</blockquote>
  <div class="breath glass"><div class="orb" id="orb" aria-hidden="true"></div>
  <div><p class="serif">${H.lead}</p><p id="bt" class="bt" aria-live="polite">${H.hint}</p>
  <button class="pill dark" id="bbtn">${H.startBtn}</button></div></div>
  <p class="note">${H.note}</p>
</section>`;
// dump & footer
$('dump-h').textContent=C.dump.heading;
$('dump').innerHTML=C.dump.photos.map(p=>ph(p.src,p.wide?'w2':'',p.alt||'')).join('');
$('foot-big').innerHTML=C.footer.big;
$('foot-copy').innerHTML=`Arsip oleh <b>${C.owner}</b> · © ${C.year}`;
// tab
const names=['journey','adventure','healing'];
$('tabs').innerHTML=names.map(n=>`<button role="tab" id="t-${n}" aria-controls="p-${n}" aria-selected="false">${C.nav.tabs[n]}</button>`).join('');
const tabs=[...document.querySelectorAll('[role=tab]')];
function show(id){tabs.forEach(t=>{const on=t.id==='t-'+id;t.setAttribute('aria-selected',on);$(t.getAttribute('aria-controls')).hidden=!on})}
tabs.forEach(t=>t.addEventListener('click',()=>{show(t.id.slice(2));$('cerita').scrollIntoView({behavior:'smooth'})}));
show(C.defaultTab);
// napas 4-4-6
const orb=$('orb'),bt=$('bt'),bb=$('bbtn');let on=false,timer;
const steps=[['in','Tarik napas…',4000],['hold','Tahan…',4000],['out','Hembuskan perlahan…',6000]];
function run(i=0){if(!on)return;const[c,txt,ms]=steps[i%3];orb.className='orb '+c;bt.textContent=txt;timer=setTimeout(()=>run(i+1),ms)}
bb.addEventListener('click',()=>{on=!on;clearTimeout(timer);bb.textContent=on?H.stopBtn:H.startBtn;if(on)run();else{orb.className='orb';bt.textContent=H.doneText}});
