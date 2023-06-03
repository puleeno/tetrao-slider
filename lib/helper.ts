import TetraoSliderOptions from '../slider/options';

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

const parseSliderOptions = (rawOptions: any): TetraoSliderOptions => {
    const options = new TetraoSliderOptions();

    if (typeof rawOptions !== 'object') {
         return options;
    }

    if (typeof rawOptions.disable_context !== 'undefined') {
        options.disableContextMenu = Boolean(rawOptions.disable_context);
    }

    return options;
}

export {
    parseSliderOptions,
    generateSelectorByHtmlElement,
}
