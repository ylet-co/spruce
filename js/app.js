(function(){
var id=new URLSearchParams(location.search).get('id'),root=$('app');
var NAMES={linux:'Linux',windows:'Windows',macos:'macOS',android:'Android',docker:'Docker',web:'Web',source:'Source'};
function fail(m){root.innerHTML='<div class="empty">'+m+' <a href="browse.html" style="color:var(--ac)">Back to browse</a></div>'}
if(!id)return fail('No app selected.');
loadData('data/apps/'+id[0]+'/'+id+'.json').then(show).catch(function(){fail('That app could not be loaded.')});
var LAB={apk:'Download APK',direct:'Download installer'};
function big(m){if(!m)return '';return m.command?'<button class="btn p wide" data-c="'+esc(m.command)+'">Copy install command</button>':(m.url?'<a class="btn p wide" target="_blank" rel="noopener" href="'+esc(m.url)+'">'+(LAB[m.manager]||'Open '+esc(m.label))+'</a>':'')}
function detect(){var u=navigator.userAgent;return /Android|iPhone|iPad/i.test(u)?'android':/Win/i.test(u)?'windows':/Mac/i.test(u)?'macos':'linux'}
function show(a){document.title=a.name+' — Spruce';
 var plats=[];(a.install||[]).forEach(function(m){if(plats.indexOf(m.platform)<0)plats.push(m.platform)});
 var cur=plats.indexOf(detect())>-1?detect():plats[0];
 var shots=(a.screenshots||[]).map(function(s){return '<a href="'+esc(s.full)+'" target="_blank" rel="noopener"><img src="'+esc(s.thumb||s.full)+'" alt="'+esc(a.name)+' screenshot" loading="lazy"></a>'}).join('');
 var desc=(a.description||a.blurb||'').split(/\n\s*\n/).map(function(p){return '<p>'+esc(p)+'</p>'}).join('');
 var rep=(a.replaces||[]).map(function(r){return '<a href="browse.html?q='+encodeURIComponent(r)+'">'+esc(r)+'</a>'}).join('');
 var facts=[a.license,a.version&&'v'+a.version,a.stars&&a.stars.toLocaleString('en-US')+' stars',a.developer].filter(Boolean).map(function(f){return '<span class="tag">'+esc(f)+'</span>'}).join('');
 root.innerHTML='<a class="back" href="browse.html" id="bk">&larr; Back to browsing</a><div class="hd">'+iconHTML(a)+'<div><h1>'+esc(a.name)+'</h1><p>'+esc(a.blurb||a.tagline)+'</p></div></div><div class="facts meta">'+facts+'</div>'+
 '<div class="cols"><div>'+(shots?'<div class="shots">'+shots+'</div>':'')+'<div class="desc">'+desc+'</div>'+(rep?'<h2 class="s">Replaces</h2><div class="rep">'+rep+'</div>':'')+
 '<div class="links"><a class="btn p" href="#ins" id="get"></a><button class="btn" id="fv"></button>'+'<div class="vote" id="vt"><button id="vu" aria-label="Upvote" title="Upvote"><svg viewBox="0 0 24 24"><path d="M12 19V6M6 12l6-6 6 6"/></svg></button><span id="vs">0</span><button id="vd" aria-label="Downvote" title="Downvote"><svg viewBox="0 0 24 24"><path d="M12 5v13M6 12l6 6 6-6"/></svg></button></div>'+(a.homepage?'<a class="btn" target="_blank" rel="noopener" href="'+esc(a.homepage)+'">Website</a>':'')+(a.repo?'<a class="btn" target="_blank" rel="noopener" href="'+esc(a.repo)+'">Source</a>':'')+'</div></div>'+
 '<aside class="panel" id="ins"><h2 class="s" style="margin-top:0">Install</h2><div class="tabs" id="tabs"></div><div id="ms"></div><small style="color:var(--mut)">Spruce never hosts binaries. Commands and links point at the project or its official store.</small></aside></div>';
 function fv(){$('fv').textContent=favs.has(a.id)?'Saved':'Save for later'}fv();$('fv').onclick=function(){favs.toggle(a.id);fv()}; if(window.initVote)initVote(a.id);
 function tabs(){$('tabs').innerHTML=plats.map(function(p){return '<button class="'+(p===cur?'on':'')+'" data-p="'+p+'">'+(NAMES[p]||p)+'</button>'}).join('');
  var ml=(a.install||[]).filter(function(m){return m.platform===cur}),pm=ml.filter(function(m){return m.recommended})[0]||ml[0];$('get').textContent='Get for '+(NAMES[cur]||cur);$('ms').innerHTML=big(pm)+ml.map(function(m){
   return '<div class="m"><b>'+esc(m.label)+(m.recommended?' (recommended)':'')+'</b>'+(m.note?'<small>'+esc(m.note)+'</small>':'')+
   (m.command?'<div class="cmd"><code>'+esc(m.command)+'</code><button data-c="'+esc(m.command)+'">Copy</button></div>':(m.url?'<a class="btn p sm" target="_blank" rel="noopener" href="'+esc(m.url)+'">Open</a>':''))+'</div>'}).join('')||'<div class="m"><small>No install method listed. Try the website.</small></div>'}
 tabs();
 $('get').onclick=function(e){e.preventDefault();$('ins').scrollIntoView({behavior:'smooth',block:'start'})};
 $('bk').onclick=function(e){if(history.length>1&&document.referrer.indexOf(location.host)>-1){e.preventDefault();history.back()}};
 loadData('data/index.json').then(function(d){var c=(a.categories||[])[0];if(!c)return;var rel=d.apps.filter(function(x){return x.i!==a.id&&x.c.indexOf(c)>-1}).sort(function(x,y){return (y.s||0)-(x.s||0)}).slice(0,6);if(!rel.length)return;root.insertAdjacentHTML('beforeend','<h2 class="s" style="margin-top:56px">More in '+esc(c)+'</h2><div class="grid">'+rel.map(function(x){return '<a class="card" href="app.html?id='+encodeURIComponent(x.i)+'"><div class="top">'+iconHTML(x)+'<h3>'+esc(x.n)+'</h3></div><p>'+esc(x.t)+'</p></a>'}).join('')+'</div>')}).catch(function(){});
 root.addEventListener('click',function(e){var t=e.target;if(t.dataset.p){cur=t.dataset.p;tabs()}
  if(t.dataset.c){var c=t.dataset.c,o=t.dataset.o||(t.dataset.o=t.textContent);(navigator.clipboard?navigator.clipboard.writeText(c):Promise.reject()).then(function(){t.textContent='Copied'},function(){t.textContent='Select it'});setTimeout(function(){t.textContent=o},1500)}});
}
})();
