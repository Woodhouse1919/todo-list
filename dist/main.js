(()=>{"use strict";(()=>{const e=document.querySelector("input");document.addEventListener("click",(e=>{e.target.classList.contains("delBtn")&&e.target.parentElement.remove()})),e.addEventListener("keypress",(t=>{"Enter"===t.key&&((()=>{const t=document.createElement("div");document.querySelector(".content").appendChild(t),t.classList.add("item"),t.textContent=e.value;const n=document.createElement("button");t.appendChild(n),n.textContent="X",n.classList.add("delBtn")})(),e.value="")})),e.addEventListener("click",(()=>{e.value=""})),e.addEventListener("focusout",(()=>{e.value="Add todo..."}))})()})();