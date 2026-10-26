const tabs=[...document.querySelectorAll('[role=tab]')];
function show(id){tabs.forEach(t=>{const on=t.id==='t-'+id;t.setAttribute('aria-selected',on);document.getElementById(t.getAttribute('aria-controls')).hidden=!on})}
tabs.forEach(t=>t.addEventListener('click',()=>{show(t.id.slice(2));document.getElementById('cerita').scrollIntoView({behavior:'smooth'})}));
// Napas 4-4-6
const orb=document.getElementById('orb'),bt=document.getElementById('bt'),bb=document.getElementById('bbtn');
let on=false,timer;
const steps=[['in','Tarik napas…',4000],['hold','Tahan…',4000],['out','Hembuskan perlahan…',6000]];
function run(i=0){if(!on)return;const[c,txt,ms]=steps[i%3];orb.className='orb '+c;bt.textContent=txt;timer=setTimeout(()=>run(i+1),ms)}
bb.addEventListener('click',()=>{on=!on;clearTimeout(timer);bb.textContent=on?'Berhenti':'Mulai napas';if(on)run();else{orb.className='orb';bt.textContent='Bagus. Lanjutkan perjalananmu.'}});
