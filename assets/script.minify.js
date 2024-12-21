function generateHtml(e,i,t){return`
            <div class="key-container">
                <h1>key</h1>
                <div>${" "===e?"Space":e}</div>
            </div>

            <div class="key-container">
                <h1>Code</h1>
                <div>${i}</div>
            </div>

            <div class="key-container">
                <h1>key</h1>
                <div class="key-content" onClick="copyClipboard('${t}')">
                <span class="copyable">${t}</span>
                </div>
            </div>
    `}function copyClipboard(e){navigator.clipboard.writeText(e).then(()=>{showCopyNotification()}).catch(e=>{console.error("Failed to copy text: ",e),alert("Failed to copy text")})}function showCopyNotification(){let e=document.createElement("div");e.textContent="Copied!",e.className="copy-notification",document.body.appendChild(e),setTimeout(()=>{e.remove()},9e6)}const container=document.getElementById("keyContainer"),asciiInput=document.getElementById("asciiInput");function isMobileOrTablet(){return/Android|iphone|ipad|ipod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}container.innerHTML=generateHtml("-","-","-"),window.addEventListener("keydown",e=>{container.innerHTML=generateHtml(e.key,e.code,e.key.charCodeAt(0)),document.querySelectorAll(".key-container").forEach(e=>{e.style.opacity="0",requestAnimationFrame(()=>{e.style.animation="slideIn 0.8s ease-out forwards"})})}),isMobileOrTablet()&&(asciiInput.style.display="block");