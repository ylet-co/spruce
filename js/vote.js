(function(){
var CFG=window.SPRUCE_CONFIG||{},LOCK='spruce.caplock';
function load(){try{return JSON.parse(localStorage.getItem('spruce.votes')||'{}')}catch(e){return{}}}
function save(v){try{localStorage.setItem('spruce.votes',JSON.stringify(v))}catch(e){}}
var dlg,code='',shown=0,fails=0,token='';
function draw(){var c=$('cc'),x=c.getContext('2d'),cs=getComputedStyle(document.documentElement),ink=cs.getPropertyValue('--tx').trim()||'#888',ac=cs.getPropertyValue('--ac').trim()||'#4ED396',A='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
 code='';for(var i=0;i<5;i++)code+=A[Math.floor(Math.random()*A.length)];
 x.clearRect(0,0,c.width,c.height);
 for(i=0;i<7;i++){x.strokeStyle=i%2?ac:ink;x.globalAlpha=.35;x.beginPath();x.moveTo(Math.random()*220,Math.random()*70);x.bezierCurveTo(Math.random()*220,Math.random()*70,Math.random()*220,Math.random()*70,Math.random()*220,Math.random()*70);x.stroke()}
 x.globalAlpha=1;x.textBaseline='middle';
 for(i=0;i<5;i++){x.save();x.translate(26+i*37,35+(Math.random()*14-7));x.rotate(Math.random()*.7-.35);x.font='700 '+(34+Math.floor(Math.random()*8))+'px Outfit,sans-serif';x.fillStyle=i%2?ac:ink;x.fillText(code[i],-12,0);x.restore()}
 for(i=0;i<70;i++){x.fillStyle=ink;x.globalAlpha=.4;x.fillRect(Math.random()*220,Math.random()*70,2,2)}
 x.globalAlpha=1;shown=Date.now();$('ci').value='';$('ce').textContent=''}
function build(){if(dlg)return;dlg=document.createElement('dialog');dlg.id='cap';
 dlg.innerHTML='<form method="dialog" id="cf"><h3 style="font:600 22px Outfit,sans-serif;margin-bottom:6px">Quick check</h3><p style="color:var(--mut);font-size:14px;margin-bottom:14px">Type the characters you see so we know you are not a bot.</p>'+
 (CFG.turnstileSiteKey?'<div id="ts"></div>':'<canvas id="cc" width="220" height="70" aria-label="Verification code"></canvas><button type="button" class="back" id="cr" style="all:unset;cursor:pointer;color:var(--mut);font-size:13px;margin:8px 0">New code</button><input id="ci" autocomplete="off" maxlength="5" aria-label="Characters from the image" placeholder="5 characters" style="width:100%;height:46px;border-radius:12px;border:1px solid var(--bd);background:var(--bg);color:var(--tx);padding:0 14px;font:500 16px JetBrains Mono,monospace;letter-spacing:.2em;text-transform:uppercase">')+
 '<input id="hp" name="website" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px;opacity:0"><p id="ce" role="alert" style="color:#e5736b;font-size:13px;min-height:20px;margin-top:6px"></p><div style="display:flex;gap:10px;justify-content:flex-end"><button type="button" class="btn sm" id="cx">Cancel</button><button type="submit" class="btn p sm" id="cok">Verify</button></div></form>';
 document.body.appendChild(dlg);$('cx').onclick=function(){dlg.close()};
 if(!CFG.turnstileSiteKey)$('cr').onclick=draw}
function ask(){return new Promise(function(res){build();var done=false;
 function ok(){if(done)return;done=true;dlg.close();res(true)}
 dlg.onclose=function(){if(!done)res(false)};
 $('cf').onsubmit=function(e){e.preventDefault();
  var lock=+localStorage.getItem(LOCK)||0;if(Date.now()<lock){$('ce').textContent='Too many tries. Wait a minute.';return}
  if($('hp').value)return;
  if(CFG.turnstileSiteKey){if(token)ok();else $('ce').textContent='Complete the check first.';return}
  if(Date.now()-shown<1200){$('ce').textContent='Slow down a little and try again.';draw();return}
  if($('ci').value.trim().toUpperCase()===code)ok();
  else{fails++;if(fails>=5){try{localStorage.setItem(LOCK,Date.now()+60000)}catch(x){}fails=0}$('ce').textContent='That did not match. Try the new code.';draw()}};
 dlg.showModal();
 if(CFG.turnstileSiteKey){var go=function(){token='';$('ts').innerHTML='';turnstile.render('#ts',{sitekey:CFG.turnstileSiteKey,callback:function(t){token=t}})};
  if(window.turnstile)go();else{var s=document.createElement('script');s.src='https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';s.onload=go;document.head.appendChild(s)}}
 else{draw();$('ci').focus()}})}
window.initVote=function(id){var u=$('vu'),d=$('vd'),s=$('vs');if(!u)return;s.hidden=!CFG.voteApi;
 function paint(){var v=load()[id]||0;u.classList.toggle('on',v===1);d.classList.toggle('on',v===-1);u.setAttribute('aria-pressed',v===1);d.setAttribute('aria-pressed',v===-1)}
 function score(){if(!CFG.voteApi)return;fetch(CFG.voteApi+(CFG.voteApi.indexOf('?')>-1?'&':'?')+'id='+encodeURIComponent(id)).then(function(r){return r.json()}).then(function(j){s.textContent=j.score}).catch(function(){})}
 function cast(val){var all=load(),v=all[id]===val?0:val;
  if(v)all[id]=v;else delete all[id];save(all);paint();
  if(CFG.voteApi)fetch(CFG.voteApi,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({id:id,value:v,token:token})}).then(function(r){return r.json()}).then(function(j){s.textContent=j.score}).catch(function(){})}
 function click(val){return function(e){if(!e.isTrusted)return;if((load()[id]||0)===val){cast(val);return}ask().then(function(ok){if(ok)cast(val)})}}
 u.onclick=click(1);d.onclick=click(-1);paint();score()};
})();
