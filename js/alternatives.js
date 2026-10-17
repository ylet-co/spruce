(function(){
var A=window.ALTS||[],P=new URLSearchParams(location.search),type='',cat='',list=$('list'),q=$('q');
q.value=P.get('q')||'';$('ct').textContent=A.length+' popular apps and games';
var cats={};A.forEach(function(r){(cats[r.t]=cats[r.t]||{})[r.c]=1});
function chips(){var cs=Object.keys(type?cats[type]||{}:Object.assign({},cats.app,cats.game)).sort();
 $('cats').innerHTML='<button data-c="" class="'+(cat?'':'on')+'">All</button>'+cs.map(function(c){return '<button data-c="'+esc(c)+'" class="'+(c===cat?'on':'')+'">'+esc(c)+'</button>'}).join('')}
function chip(a){return '<a class="achip" href="app.html?id='+encodeURIComponent(a.i)+'"><span class="ic s">'+esc(a.n[0])+(a.ic?'<img src="'+esc(a.ic)+'" alt="" loading="lazy" onerror="this.remove()">':'')+'</span>'+esc(a.n)+'</a>'}
function run(){var t=q.value.trim().toLowerCase(),n=0,h='';
 A.forEach(function(r){if(type&&r.t!==type)return;if(cat&&r.c!==cat)return;
  if(t&&r.n.toLowerCase().indexOf(t)<0&&!r.a.some(function(a){return a.n.toLowerCase().indexOf(t)>-1})&&r.c.toLowerCase().indexOf(t)<0)return;
  n++;h+='<div class="ar"><div class="old"><s>'+esc(r.n)+'</s><small>'+(r.t==='game'?'Game':'App')+' &middot; '+esc(r.c)+'</small></div><svg viewBox="0 0 24 24"><path d="M4 12h16M14 6l6 6-6 6"/></svg><div class="alts">'+r.a.map(chip).join('')+'</div></div>'});
 list.innerHTML=h||'<div class="empty">Nothing here yet. Try a shorter name, or <a href="browse.html?q='+encodeURIComponent(q.value)+'" style="color:var(--ac)">search the full catalog</a>.</div>'}
$('seg').addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;type=b.dataset.t;cat='';[].forEach.call($('seg').children,function(x){x.classList.toggle('on',x===b)});chips();run()});
$('cats').addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;cat=b.dataset.c;chips();run()});
var tm;q.addEventListener('input',function(){clearTimeout(tm);tm=setTimeout(run,120)});
chips();run();
})();
