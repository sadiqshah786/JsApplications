setInterval(() => {
    d = new Date()
    Hrtime = d.getHours();
    mtime = d.getMinutes();
    sectime = d.getSeconds();

    hrotation = 30 * Hrtime + mtime / 2;
    mrotation = 6 * mtime;
    sroation = 6 * sectime;

    // hr.style.transform = 'rotate(${Hrrotation}deg)';
    // min.style.transform = "rotate(${mrotation}deg)"
    // sec.style.transform = "rotation(${srotation}deg)"
    hr.style.transform = `rotate(${hrotation}deg)`;
    min.style.transform = `rotate(${mrotation}deg)`;
    sec.style.transform = `rotate(${sroation}deg)`;





}, 1000);