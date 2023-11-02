


setInterval(() => {
    const date = new Date()

    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds();

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    console.log(`${h}:${m}:${s}`);

}, 1000)

