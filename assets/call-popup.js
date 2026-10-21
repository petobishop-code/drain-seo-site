/* Lightweight, non-modal callback prompt for the 80-page drain site. */
(function(){
  'use strict';
  if (window.__drainPhonePromptLoaded) return;
  window.__drainPhonePromptLoaded = true;
  var KEY = 'drain-phone-popup-closed';
  function wasClosed(){try{return window.sessionStorage.getItem(KEY)==='1';}catch(e){return false;}}
  function rememberClosed(){try{window.sessionStorage.setItem(KEY,'1');}catch(e){}}
  function start(){
    if(wasClosed() || document.querySelector('.phone-nudge'))return;
    var box=document.createElement('aside');
    box.className='phone-nudge';
    box.setAttribute('role','region');
    box.setAttribute('aria-label','전화 상담 바로가기');
    box.innerHTML = '<button class="phone-nudge__dismiss" type="button" aria-label="전화 안내 닫기" title="닫기">&times;</button>'
      +'<p class="phone-nudge__eyebrow"><span class="phone-nudge__phoneicon" aria-hidden="true">&#9742;</span>바로 연결되는 전화 상담</p>'
      +'<p class="phone-nudge__title">배관 문제, 전화로 문의하세요</p>'
      +'<p class="phone-nudge__text">하수구 · 싱크대 · 변기 · 세면대 막힘<br>버튼을 누르면 전화 앱으로 연결돼요.</p>'
      +'<a class="phone-nudge__cta" href="tel:01076011156" aria-label="010-7601-1156으로 전화 걸기">'
      +'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.56 3.57.56A1 1 0 0121 16.5V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.25 1.02z"/></svg>'
      +'<span>010-7601-1156</span><span aria-hidden="true">↗</span></a>'
      +'<small class="phone-nudge__small">닫기 버튼을 누르면 이 방문 동안 다시 뜨지 않아요.</small>';
    box.querySelector('.phone-nudge__dismiss').addEventListener('click',function(){rememberClosed();box.remove();});
    document.body.appendChild(box);
  }
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',start,{once:true});}
  else start();
})();
