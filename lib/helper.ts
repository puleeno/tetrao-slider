const generateSelectorByHtmlElement = (el: Element | HTMLElement): string => {
    if (el.tagName.toLowerCase() == "html")
        return "html";
    var str = el.tagName.toLowerCase();
    str += (el.id != "") ? "#" + el.id : "";
    if (el.className) {
        var classes = el.className.trim().split(/\s+/);
        for (var i = 0; i < classes.length; i++) {
            str += "." + classes[i]
        }
    }

    if (document.querySelectorAll(str).length == 1)
        return str;
};

export {
    generateSelectorByHtmlElement,
}