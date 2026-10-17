(function(){
var nav=document.getElementById('nav');addEventListener('scroll',function(){nav.classList.toggle('on',scrollY>24)},{passive:true});
document.getElementById('th').addEventListener('click',function(){var r=document.documentElement,n=r.getAttribute('data-theme')==='light'?'dark':'light';r.setAttribute('data-theme',n);try{localStorage.setItem('spruce.theme',n)}catch(e){}});
})();
window.$=function(id){return document.getElementById(id)};
window.esc=function(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})};
window.favs={get:function(){try{return JSON.parse(localStorage.getItem('spruce.favs')||'[]')}catch(e){return[]}},has:function(i){return this.get().indexOf(i)>-1},
 toggle:function(i){var f=this.get(),k=f.indexOf(i);k>-1?f.splice(k,1):f.push(i);try{localStorage.setItem('spruce.favs',JSON.stringify(f))}catch(e){}return k<0}};
window.iconHTML=function(a){return '<span class="ic">'+esc((a.n||a.name||'?')[0])+(a.ic||a.icon?'<img src="'+esc(a.ic||a.icon)+'" alt="" loading="lazy" onerror="this.remove()">':'')+'</span>'};

/* loadData: fetch over http; when opened from a file:// folder, load the matching .js twin via <script> instead */
window.__sp={};window.__sd=function(p,d){var r=window.__sp[p];if(r){delete window.__sp[p];r(d)}};
window.loadData=function(path){
 if(location.protocol!=='file:')return fetch(path).then(function(r){if(!r.ok)throw new Error(path);return r.json()});
 return new Promise(function(res,rej){window.__sp[path]=res;var s=document.createElement('script');s.src=path.replace(/\.json$/,'.js');s.onerror=function(){rej(new Error(path))};document.head.appendChild(s)})};
