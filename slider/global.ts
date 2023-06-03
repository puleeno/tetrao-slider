declare global {
    interface Window { TetraoSlider: any; }
}

interface TetraoSliderAbstract {
    mount: Function,
    destroy: Function,
    getOriginHtml: Function,
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

