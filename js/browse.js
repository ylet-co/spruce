(function(){
var P=new URLSearchParams(location.search),all=[],list=[],shown=0,STEP=48;
var grid=$('grid'),more=$('more'),q=$('q'),cat=$('cat'),plat=$('plat'),sort=$('sort'),fav=$('fav');
q.value=P.get('q')||'';fav.checked=P.get('fav')==='1';
grid.innerHTML=new Array(12+1).join('<div class="sk" style="height:150px"></div>');
loadData('data/index.json').then(function(d){
 all=d.apps;$('ct').textContent=d.count.toLocaleString('en-US')+' apps';
 var cs={},ps={};all.forEach(function(a){a.c.forEach(function(c){cs[c]=1});a.p.forEach(function(p){ps[p]=1})});
 Object.keys(cs).sort().forEach(function(c){cat.add(new Option(c,c))});Object.keys(ps).sort().forEach(function(p){plat.add(new Option(p[0].toUpperCase()+p.slice(1),p))});
 cat.value=P.get('cat')||'';plat.value=P.get('plat')||'';run();
}).catch(function(){grid.innerHTML='<div class="empty">Could not load the catalog. Check that the data folder is next to this page.</div>'});
function score(a,t){if(!t)return 1;var n=a.n.toLowerCase(),s=0;t.split(/\s+/).forEach(function(w){var h=0;
 if(n===w)h=100;else if(n.indexOf(w)===0)h=60;else if(n.indexOf(w)>-1)h=40;
 else if((a.r||[]).some(function(r){return r.toLowerCase().indexOf(w)>-1}))h=35;
 else if((a.tag||[]).some(function(r){return r.indexOf(w)>-1}))h=20;
 else if((a.t||'').toLowerCase().indexOf(w)>-1)h=10;
 s=h?s+h:-1e6});return s}
function run(){var t=q.value.trim().toLowerCase(),f=fav.checked?favs.get():null;
 list=all.map(function(a){return [a,score(a,t)]}).filter(function(x){var a=x[0];return x[1]>0&&(!cat.value||a.c.indexOf(cat.value)>-1)&&(!plat.value||a.p.indexOf(plat.value)>-1)&&(!f||f.indexOf(a.i)>-1)});
 if(sort.value==='stars')list.sort(function(x,y){return (y[0].s||0)-(x[0].s||0)});else if(sort.value==='name')list.sort(function(x,y){return x[0].n.localeCompare(y[0].n)});
 else list.sort(function(x,y){return y[1]-x[1]||(y[0].s||0)-(x[0].s||0)});
 list=list.map(function(x){return x[0]});grid.innerHTML='';shown=0;draw()}
function draw(){var h='';list.slice(shown,shown+STEP).forEach(function(a){
 h+='<a class="card" href="app.html?id='+encodeURIComponent(a.i)+'"><div class="top">'+iconHTML(a)+'<h3>'+esc(a.n)+'</h3></div><p>'+esc(a.t)+'</p><div class="meta">'+(a.s?'<span>'+a.s.toLocaleString('en-US')+' stars</span>':'')+a.p.slice(0,3).map(function(p){return '<span class="tag">'+esc(p)+'</span>'}).join('')+'</div></a>'});
 shown+=STEP;grid.insertAdjacentHTML('beforeend',h);
 if(!list.length)grid.innerHTML='<div class="empty">Nothing matches that. Try fewer words or clear a filter.</div>';
 more.hidden=shown>=list.length;more.textContent='Show more ('+Math.max(0,list.length-shown).toLocaleString('en-US')+' left)'}
var tm;q.addEventListener('input',function(){clearTimeout(tm);tm=setTimeout(run,160)});
[cat,plat,sort,fav].forEach(function(e){e.addEventListener('change',run)});more.addEventListener('click',draw);
})();
