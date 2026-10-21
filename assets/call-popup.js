/* Compact, dismissible phone contact box. */
(function(){
  'use strict';
  if(window.__drainPhonePromptLoaded)return;
  window.__drainPhonePromptLoaded=true;
  var KEY='drain-phone-popup-closed';
  function closed(){try{return window.sessionStorage.getItem(KEY)==='1';}catch(e){return false;}}
  function show(){
    if(closed()||document.querySelector('.phone-nudge'))return;
    var panel=document.createElement('aside');
    panel.className='phone-nudge';
    panel.setAttribute('role','region');
    panel.setAttribute('aria-label','전화 상담 바로가기');
    panel.innerHTML='<button type="button" class="phone-nudge__dismiss" aria-label="전화 팝업 닫기" title="닫기">&times;</button>'+
      '<p class="phone-nudge__line">하수구 · 싱크대 · 변기 · 세면대<br>막힘 상담요청</p>'+
      '<a class="phone-nudge__call" href="tel:01076011156" aria-label="010-7601-1156 전화 연결">'+
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.56 3.57.56A1 1 0 0121 16.5V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.25 1.02z"/></svg>'+
      '<span>010-7601-1156</span></a>';
    panel.querySelector('.phone-nudge__dismiss').addEventListener('click',function(){
      try{window.sessionStorage.setItem(KEY,'1');}catch(e){} panel.remove();
    });
    document.body.appendChild(panel);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',show,{once:true});else show();
})();
