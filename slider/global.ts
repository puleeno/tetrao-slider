declare global {
    interface Window { TetraoSlider: any; }
}

interface TetraoSliderAbstract {
    originHtml?: string,

    mount: Function,
    destroy: Function,
    getOriginSelector: Function,
}

interface TetraoSliderElement extends Element {
    tetrao?: TetraoSliderAbstract,
    mountSlider?(): void,
    destroySlider?(): void
}

export {
    TetraoSliderAbstract,
    TetraoSliderElement,
}
export default global

