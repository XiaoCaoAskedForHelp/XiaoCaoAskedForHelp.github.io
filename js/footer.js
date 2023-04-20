/* 页脚计时器 start */
var now = new Date();
function createtime() {
    // 当前时间
    now.setTime(now.getTime() + 1000);
    var start = new Date("2023-4-8 00:00:00"); // mos的宇宙飞船开始计算的时间
    var dis = Math.trunc(23400000000 + ((now - start) / 1000) * 17); // 距离=秒数*速度 记住转换毫秒
    var unit = (dis / 149600000).toFixed(6);  // 天文单位
    // 网站诞生时间
    var grt = new Date("2023-4-8 00:00:00");
    var days = (now - grt) / 1e3 / 60 / 60 / 24,
        dnum = Math.floor(days),
        hours = (now - grt) / 1e3 / 60 / 60 - 24 * dnum,
        hnum = Math.floor(hours);
    1 == String(hnum).length && (hnum = "0" + hnum);
    var minutes = (now - grt) / 1e3 / 60 - 1440 * dnum - 60 * hnum,
        mnum = Math.floor(minutes);
    1 == String(mnum).length && (mnum = "0" + mnum);
    var seconds = (now - grt) / 1e3 - 86400 * dnum - 3600 * hnum - 60 * mnum,
        snum = Math.round(seconds);
    1 == String(snum).length && (snum = "0" + snum);
    let currentTimeHtml = "";
    (currentTimeHtml =
        hnum < 18 && hnum >= 9
            ? `<img class='boardsign' src='https://img.shields.io/badge/mos的小屋-科研、工作ing-brightgreen?style=social&logo=cakephp' title='零星地变得优秀，也能拼凑出星河！'><br> 
                <div style="font-size:13px;font-weight:bold">本站居然运行了 ${dnum} 天 ${hnum} 小时 ${mnum} 分 ${snum} 秒 <i class="fa-solid fa-heart-pulse fa-beat-fade" style="color: #f42525;"></i> <br> 
                mos的宇宙飞船已经飞行了 ${dis} 千米，约为 ${unit} 个天文单位 🚀</div>`
            : `<img class='boardsign' src='https://img.shields.io/badge/mos的小屋-科研、工作ing-brightgreen?style=social&logo=coffeescript' title='下班了就该开开心心地玩耍~'><br> 
                <div style="font-size:13px;font-weight:bold">本站居然运行了 ${dnum} 天 ${hnum} 小时 ${mnum} 分 ${snum} 秒 <i class="fa-solid fa-heart-pulse fa-beat-fade" style="color: #f42525;"></i> <br> 
                mos的宇宙飞船已经飞行了 ${dis} 千米，约为 ${unit} 个天文单位 🚀</div>`),
    document.getElementById("workboard") &&
    (document.getElementById("workboard").innerHTML = currentTimeHtml);
}
// 设置重复执行函数，周期1000ms
setInterval(() => {
    createtime();
}, 1000);
/*页脚计时器 end */
