import { TetraoSliderAbstract, TetraoSliderElement } from '../slider/global';
import { generateSelectorByHtmlElement } from '../lib/helper';

class TetraoSlider implements TetraoSliderAbstract {
    tetrao: any; // This case use in call method direct HTML Element
    originSelector: string;
    originHtml: string;

    constructor(ele:TetraoSliderElement|string|null, options: any) {
        if (typeof ele === 'string') {
            this.originSelector = new String(ele).toString();
            ele = document.querySelector(this.originSelector);
        } else {
            this.originSelector = generateSelectorByHtmlElement(ele);
        }
        if ([undefined, null].indexOf(ele) < 0) {
            this.originHtml = ele.innerHTML;
            ele.mountSlider = this.mount;
            ele.destroySlider = this.destroy;
            ele.tetrao = this;
        } else {
            this.originHtml = undefined;
        }
    }

    mount() {
        const tetao = this instanceof Element ? this.tetrao as TetraoSliderAbstract : this as TetraoSliderAbstract;
        const sliderEle = document.querySelector(tetao.getOriginSelector());
        if (sliderEle !== undefined) {
            sliderEle.innerHTML = 'test';
        }
    }

    destroy() {
        const tetao = this instanceof Element ? this.tetrao as TetraoSliderAbstract : this as TetraoSliderAbstract;
        const sliderEle = document.querySelector(tetao.getOriginSelector());

        if (sliderEle !== undefined) {
            sliderEle.innerHTML = tetao.getOriginHtml();
        }
    }

    getOriginSelector(): string|undefined {
        return this.originSelector;
    }

    getOriginHtml(): string|undefined {
        return this.originHtml;
    }
}

export default TetraoSlider;
