import TetraoSliderOptions from "./options";

declare global {
    interface Window { TetraoSlider: any; }
}

interface TetraoSliderAbstract {
    options: TetraoSliderOptionsAbstract,

    builtInModules: Array<TetraoSliderModuleAbstract>,
    modules: Array<TetraoSliderModuleAbstract>,

    originHtml?: string,

    mount: Function,
    destroy: Function,
    getOriginSelector: Function,
    getOptions: Function,
    getModules: Function,
}

interface TetraoSliderElement extends Element {
    tetrao?: TetraoSliderAbstract,
    mountSlider?(): void,
    destroySlider?(): void,
}

interface TetraoSliderOptionsAbstract {
    disableContextMenu: boolean,
}

interface TetraoSliderModuleAbstract {
    slider: TetraoSliderAbstract,
    onInit?: Function,
    onDestroy?: Function,
}

class TetraoSliderModule implements TetraoSliderModuleAbstract {
    slider: TetraoSliderAbstract;

    constructor(slider: TetraoSliderAbstract) {
        this.slider = slider;
    }
}


export {
    TetraoSliderAbstract,
    TetraoSliderElement,
    TetraoSliderOptionsAbstract,
    TetraoSliderModule,
    TetraoSliderModuleAbstract,
}
export default global

