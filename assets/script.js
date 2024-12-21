function generateHtml(key,code,keyCode) {
    return `
            <div class="key-container">
                <h1>key</h1>
                <div>${key === " " ? "Space" : key}</div>
            </div>

            <div class="key-container">
                <h1>Code</h1>
                <div>${code}</div>
            </div>

            <div class="key-container">
                <h1>key</h1>
                <div class="key-content" onClick="copyClipboard('${keyCode}')">
                <span class="copyable">${keyCode}</span>
                </div>
            </div>
    `;    
}
function copyClipboard(text) {
    navigator.clipboard.writeText(text).then(()=>{
        showCopyNotification();
    }).catch(Error =>{
        console.error('Failed to copy text: ', Error);
        alert('Failed to copy text')
    });
}

function showCopyNotification() {
    const notification = document.createElement('div');
    notification.textContent = 'Copied!';
    notification.className = 'copy-notification';

    document.body.appendChild(notification);

    setTimeout(()=>{
        notification.remove();
    },9000000);
}
const container = document.getElementById("keyContainer");
const asciiInput = document.getElementById("asciiInput")

container.innerHTML = generateHtml("-","-","-");

window.addEventListener("keydown",(e)=>{
    container.innerHTML = generateHtml(e.key,e.code,e.key.charCodeAt(0));

    document.querySelectorAll('.key-container').forEach((el)=>{
        el.style.opacity = '0';
    
        requestAnimationFrame(()=>{
            el.style.animation = 'slideIn 0.8s ease-out forwards';
        })
    })
});

function isMobileOrTablet() {
    return /Android|iphone|ipad|ipod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (isMobileOrTablet()) {
    asciiInput.style.display = "block";
}