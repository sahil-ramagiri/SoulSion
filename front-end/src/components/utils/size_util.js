function get_inner_width() {
    let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    return w;
}

function get_inner_height() {
    let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    return h;
}

export { get_inner_height, get_inner_width };