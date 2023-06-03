import { TetraoSliderAbstract, TetraoSliderOptionsAbstract, TetraoSliderElement, TetraoSliderModule, TetraoSliderModuleAbstract } from '../slider/global';
import { parseSliderOptions, generateSelectorByHtmlElement } from '../lib/helper';

import { ContextMenuModule } from './modules/index';

class TetraoSlider implements TetraoSliderAbstract {
    tetrao: any; // This case use in call method direct HTML Element

    options: TetraoSliderOptionsAbstract;

    builtInModules: Array<TetraoSliderModuleAbstract> = new Array();

    modules: Array<TetraoSliderModuleAbstract> = new Array();

    originSelector: string;
    originHtml: string;

    constructor(ele:TetraoSliderElement|string|null, options: any = {}) {
        this.options = parseSliderOptions(options);

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

        // Setup default modules
        this.builtInModules.push(new ContextMenuModule(this));
    }

    mount() {
        const tetao = this instanceof Element ? this.tetrao as TetraoSliderAbstract : this as TetraoSliderAbstract;
        const sliderEle = document.querySelector(tetao.getOriginSelector()) as TetraoSliderElement;
        if (sliderEle !== undefined) {
            // Load modules
            const modules = tetao.getModules() as Array<TetraoSliderModuleAbstract>;

            // Init slider events
            const initModules = modules.filter((module) => typeof module.onInit === 'function');
            initModules.forEach((module) => module.onInit());

            // Init Tetrao DOM Structure
            document.querySelectorAll(tetao.getOriginSelector() + ' > *').forEach(function(slideItem){
                if (!slideItem.classList.contains('tetrao-slide')) {
                    slideItem.classList.add('tetrao-slide');
                }
            })
        }
    }

    destroy() {
        const tetao = this instanceof Element ? this.tetrao as TetraoSliderAbstract : this as TetraoSliderAbstract;
        const sliderEle = document.querySelector(tetao.getOriginSelector());

        if (sliderEle !== undefined) {
            sliderEle.innerHTML = tetao.originHtml;

            // Load modules
            const modules = tetao.getModules() as Array<TetraoSliderModuleAbstract>;

            // Destroy slider events
            const destroyModules = modules.filter((module) => typeof module.onDestroy === 'function');
            destroyModules.forEach((module) => module.onDestroy());
        }
    }

    getOptions(): TetraoSliderOptionsAbstract {
        return this.options;
    }

    getModules(): Array<TetraoSliderModuleAbstract> {
        return this.builtInModules.concat(this.modules);
    }

    getOriginSelector(): string|undefined {
        return this.originSelector;
    }
}

export default TetraoSlider;
