(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();(()=>{const n="is_open",s="mobile_menu",l="open_mobile_menu",e="close_mobile_menu",o="navigations__link_mb",i=document.getElementById(s),c=document.getElementById(l),u=document.getElementById(e),m=Array.from(document.getElementsByClassName(o)),d=()=>{i.classList.remove(n)},p=()=>{i.classList.add(n)},f=()=>{window.innerWidth>768&&d()};c.addEventListener("click",p),u.addEventListener("click",d),m.forEach(a=>{a.addEventListener("click",d)}),window.addEventListener("resize",f)})();new Swiper(".blog__list",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},slidesPerView:3,centeredSlides:!0,loop:!0,speed:700,breakpoints:{320:{spaceBetween:8},768:{spaceBetween:32}}});var r=document.querySelector(".swiper-wrapper");r.addEventListener("transitionEnd",function(){var t=r.querySelector(".swiper-slide-active");t.style.transform="scale(1)"});r.addEventListener("transitionStart",function(){var t=r.querySelector(".swiper-slide-prev");t.style.transform="scale(0.8)"});(()=>{const t={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};t.openModalBtn.addEventListener("click",n),t.closeModalBtn.addEventListener("click",n);function n(){t.modal.classList.toggle("is-hidden")}})();(()=>{const t={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};t.openModalBtn.addEventListener("click",n),t.closeModalBtn.addEventListener("click",n);function n(){console.log(t),t.modal.classList.toggle("is-hidden")}const s={openModa2lBtn:document.querySelector("[data-modal2-open]"),closeModa2lBtn:document.querySelector("[data-modal2-close]"),modal2:document.querySelector("[data-modal2]")};s.openModa2lBtn.addEventListener("click",l),s.closeModa2lBtn.addEventListener("click",l);function l(e){modal2.classList.toggle("show-modal-2"),e.preventDefault()}})();