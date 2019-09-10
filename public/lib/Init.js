// 用于绑定类中的this
function selfish(target) {
    const cache = new WeakMap();
    const handler = {
        get(target, key) {
            const value = Reflect.get(target, key);
            if (typeof value !== 'function') {
                return value;
            }
            if (!cache.has(value)) {
                cache.set(value, value.bind(target));
            }
            return cache.get(value);
        }
    };
    const proxy = new Proxy(target, handler);
    return proxy;
}

function initPage(canvas, stage, exportRoot, num) {
    let app = selfish(new pageApp(canvas, stage, exportRoot));
    const intervalTime = 300;
    app.getPage(num);
    app.init();
    // app.bindPageBtnEvent();
    // app.pages.init();
    app.pages.stopPlay();
    setTimeout(function () {
        app.pages.startPlay();
        $(".loading").remove();
    }, intervalTime);
    if ($) {
        $.ajaxSetup({
            async: false
        });
    }
}

