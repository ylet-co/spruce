
(function(){
var apps=[["Blender", "3D and animation", "https://dl.flathub.org/media/org/blender/Blender/c6b07403115901571923d99f1b725b0e/icons/128x128/org.blender.Blender.png", "blender"], ["GIMP", "Photo editing", "https://dl.flathub.org/media/org/gimp/GIMP/95e6d7d59d33a0f9364535dbe023d807/icons/128x128/org.gimp.GIMP.png", "gimp"], ["Inkscape", "Vector graphics", "https://dl.flathub.org/media/org/inkscape/Inkscape/d06b79da7ad6df73032683fbcf8c4d56/icons/128x128/org.inkscape.Inkscape.png", "inkscape"], ["Krita", "Digital painting", "https://dl.flathub.org/media/org/kde/krita/1348962dcc0842250c4ce6876acc36cc/icons/128x128/org.kde.krita.png", "krita"], ["OBS Studio", "Record and stream", "https://dl.flathub.org/media/com/obsproject/Studio/b24d8f7f7f9672e48342e70759b01e5e/icons/128x128/com.obsproject.Studio.png", "obs-studio"], ["Kdenlive", "Video editing", "https://dl.flathub.org/media/org/kde/kdenlive.desktop/ed746a0f36b42446cedf1605b1c4f0cb/icons/128x128/org.kde.kdenlive.desktop.png", "kdenlive"], ["Audacity", "Audio editing", "https://dl.flathub.org/media/org/audacityteam/Audacity/0ad4a24524b6c06220649dc83a08ae81/icons/128x128/org.audacityteam.Audacity.png", "audacity"], ["Firefox", "Web browser", "https://dl.flathub.org/media/icons/128x128/org.mozilla.firefox.png", "firefox"], ["LibreOffice", "Office suite", "https://dl.flathub.org/media/org/libreoffice/LibreOffice/6a06e0ec2876ffc989b0e2a1340d3331/icons/128x128/org.libreoffice.LibreOffice.png", "libreoffice"], ["Bitwarden", "Password manager", "https://dl.flathub.org/media/com/bitwarden/desktop/6395d4cb0239961fcd685ccbf637556e/icons/128x128/com.bitwarden.desktop.png", "bitwarden"], ["Nextcloud", "Your own cloud", "https://f-droid.org/repo/com.nextcloud.client/en-US/icon_uMFXKXpFQnnVroYp_Oxtrb4w_rVoRJ4Zi85v0NPY1ZY=.png", "nextcloud-android"], ["Godot Engine", "Game engine", "https://dl.flathub.org/media/org/godotengine/Godot.desktop/7d0473583b3a7a60927f7e289669a20c/icons/128x128/org.godotengine.Godot.desktop.png", "godot"], ["HandBrake", "Video converter", "https://dl.flathub.org/media/fr/handbrake/ghb/ba64e7a37b2b3270d6065fdca313dfa3/icons/128x128/fr.handbrake.ghb.png", "handbrake"], ["darktable", "RAW photos", "https://dl.flathub.org/media/org/darktable/Darktable/1b5cfd7af8bcd84fc939759726f1ba7d/icons/128x128/org.darktable.Darktable.png", "darktable"], ["Ardour", "Music production", "https://dl.flathub.org/media/org/ardour/Ardour/86d74e929c58446380c839eb12b20846/icons/128x128/org.ardour.Ardour.png", "ardour"], ["Thunderbird", "Email", "https://dl.flathub.org/media/icons/128x128/org.mozilla.Thunderbird.png", "thunderbird"], ["Joplin", "Notes that sync", "https://dl.flathub.org/media/net/cozic/joplin_desktop/0400efd10f68aa1b55f521ff7c205f74/icons/128x128/net.cozic.joplin_desktop.png", "joplin"], ["Calibre", "E-book library", "https://dl.flathub.org/media/com/calibre_ebook/calibre/42df4cc1fa6830a00f75081dbbda07cd/icons/128x128/com.calibre_ebook.calibre.png", "calibre"], ["KeePassXC", "Offline passwords", "https://dl.flathub.org/media/org/keepassxc/KeePassXC.desktop/4c36ed73b0a57050b7fda2be02da09f1/icons/128x128/org.keepassxc.KeePassXC.desktop.png", "keepassxc"], ["FreeCAD", "3D modeling", "https://dl.flathub.org/media/org/freecad/FreeCAD/147bb7390e51b88c0e4e7c461019b230/icons/128x128/org.freecad.FreeCAD.png", "freecad"], ["Jellyfin", "Media server", "https://github.com/jellyfin.png?size=256", "jellyfin"]];
function tile(a){return '<a class="tile" href="app.html?id='+a[3]+'"><i>'+a[0][0]+(a[2]?'<img src="'+a[2]+'" alt="" loading="lazy" onerror="this.remove()">':'')+'</i><div><b>'+a[0]+'</b><span>'+a[1]+'</span></div></a>'}
var mq=document.getElementById('mq');[apps.slice(0,12),apps.slice(12)].forEach(function(s){var h=s.map(tile).join('');mq.insertAdjacentHTML('beforeend','<div class="row">'+h+h+'</div>')});

var sw=[["Photoshop","GIMP","Layers, brushes and RAW import"],["Illustrator","Inkscape","Vector drawing, SVG native"],["Maya","Blender","Model, sculpt, rig, render"],["Premiere Pro","Kdenlive","Multi-track editing"],["Microsoft Office","LibreOffice","Opens your old files"],["1Password","Bitwarden","Vault you can self-host"],["Dropbox","Syncthing","Sync with no middleman"]];
document.getElementById('sws').innerHTML=sw.map(function(s){return '<a class="sw rv" href="browse.html?q='+encodeURIComponent(s[1])+'"><s>'+s[0]+'</s><svg viewBox="0 0 24 24"><path d="M4 12h16M14 6l6 6-6 6"/></svg><div><b>'+s[1]+'</b><span>'+s[2]+'</span></div></a>'}).join('');

var ua=navigator.userAgent,me=/Win/.test(ua)?'Windows':/Android/.test(ua)?'Android':/Mac/.test(ua)?'macOS':'Linux';

var cmds={Linux:['$ flatpak install flathub org.kde.krita','Installing org.kde.krita...'],Windows:['> winget install KDE.Krita','Found Krita. Installing...'],macOS:['$ brew install --cask krita','Downloading Krita...'],Android:['Open F-Droid','Tap Krita, then Install']};
var osEl=document.getElementById('os');
osEl.innerHTML=Object.keys(cmds).map(function(k){return '<button data-k="'+k+'" class="'+(k===me?'me':'')+'">'+k+'<small>detected</small></button>'}).join('');
var tp=document.getElementById('tp'),tm;
function type(k){clearInterval(tm);var c=cmds[k][0],f=cmds[k][1],i=0;[].forEach.call(osEl.children,function(b){b.classList.toggle('on',b.dataset.k===k)});
 tm=setInterval(function(){i++;var t=c.slice(0,i);tp.innerHTML='<span class="pr">'+t.slice(0,1)+'</span>'+t.slice(1)+(i<c.length?'<span class="caret"></span>':'');
 if(i>=c.length){clearInterval(tm);setTimeout(function(){tp.innerHTML+='\n'+f+'\n<span class="ok">Done. Krita is ready.</span>'},450)}},38)}
osEl.addEventListener('click',function(e){var b=e.target.closest('button');if(b)type(b.dataset.k)});type(me);

var cnt=document.getElementById('n'),target=9000+Math.floor(Math.random()*1001);(function(){var t0=performance.now();(function f(t){var p=Math.min((t-t0)/3200,1),e=1-Math.pow(1-p,4);cnt.textContent=Math.round(target*e).toLocaleString('en-US');if(p<1)requestAnimationFrame(f)})(t0)})();

var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll('.rv').forEach(function(el,i){el.style.transitionDelay=(i%3)*80+'ms';io.observe(el)});
var nav=document.getElementById('nav');addEventListener('scroll',function(){nav.classList.toggle('on',scrollY>24)},{passive:true});
document.getElementById('th').addEventListener('click',function(){var r=document.documentElement,n=r.getAttribute('data-theme')==='light'?'dark':'light';r.setAttribute('data-theme',n);try{localStorage.setItem('spruce.theme',n)}catch(e){}});

/* smooth, techy scroll: eased wheel, progress line, readout, parallax, velocity skew, scrambled labels */
var rm=matchMedia('(prefers-reduced-motion: reduce)').matches,touch=matchMedia('(pointer: coarse)').matches;
var cur=scrollY,tgt=scrollY,busy=false,last=scrollY,vel=0;
var pgb=document.getElementById('pgb'),hp=document.getElementById('hp'),hs=document.getElementById('hs'),num=document.querySelector('.num'),mqEl=document.getElementById('mq');
var secs=[['top','HERO'],['swaps','SWAPS'],['install','INSTALL'],['sources','SOURCES']].map(function(s){return [document.getElementById(s[0]),s[1]]});
function mx(){return document.documentElement.scrollHeight-innerHeight}
function loop(){
 if(busy){cur+=(tgt-cur)*.09;if(Math.abs(tgt-cur)<.5){cur=tgt;busy=false}scrollTo(0,cur)}else{cur=tgt=scrollY}
 var y=scrollY,m=mx(),p=m>0?y/m:0;
 vel+=((y-last)-vel)*.12;last=y;
 pgb.style.width=(p*100)+'%';hp.textContent=String(Math.round(p*100)).padStart(3,'0');
 var a='HERO';secs.forEach(function(s){if(s[0].offsetTop-innerHeight*.5<=y)a=s[1]});hs.textContent=a;
 if(!rm){num.style.transform='translate3d(0,'+(y*.22)+'px,0)';mqEl.style.transform='skewX('+Math.max(-8,Math.min(8,-vel*.3))+'deg)'}
 requestAnimationFrame(loop)}
loop();
if(!rm&&!touch)addEventListener('wheel',function(e){if(e.ctrlKey)return;e.preventDefault();if(!busy)tgt=scrollY;tgt=Math.max(0,Math.min(mx(),tgt+e.deltaY*(e.deltaMode===1?32:1)));busy=true},{passive:false});
document.querySelectorAll('a[href^="#"]').forEach(function(a){a.addEventListener('click',function(e){var el=document.getElementById(a.getAttribute('href').slice(1));if(!el)return;e.preventDefault();var y=Math.max(0,Math.min(mx(),el.getBoundingClientRect().top+scrollY-(el.id==='top'?0:70)));if(rm||touch){scrollTo({top:y,behavior:rm?'auto':'smooth'});return}tgt=y;busy=true})});
var ch='01<>/_#$%&';
document.querySelectorAll('.k').forEach(function(el){var t=el.textContent,o=new IntersectionObserver(function(es){if(!es[0].isIntersecting)return;o.disconnect();if(rm)return;var s=performance.now();(function f(n){var q=Math.min((n-s)/700,1),k=Math.floor(q*t.length);el.textContent=t.slice(0,k)+t.slice(k).replace(/[^ ]/g,function(){return ch[Math.floor(Math.random()*ch.length)]});if(q<1)requestAnimationFrame(f)})(s)});o.observe(el)});
})();
