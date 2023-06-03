import { TetraoSliderModule } from "../global";

class ContextMenuModule extends TetraoSliderModule {
    disableContextMenu(e: MouseEvent) {
        e.preventDefault();
        e.stopPropagation();

        return false;
    }

    onInit() {
        if (this.slider.getOptions().disableContextMenu) {
            const ele = document.querySelector(this.slider.getOriginSelector()) as Element;
            if (ele !== undefined) {
                ele.addEventListener('contextmenu', this.disableContextMenu);
            }
        }
    }

    onDestroy() {
        if (this.slider.getOptions().disableContextMenu) {
            const ele = document.querySelector(this.slider.getOriginSelector()) as Element;
            if (ele !== undefined) {
                ele.removeEventListener('contextmenu', this.disableContextMenu);
            }
        }
    }
}

export default ContextMenuModule;
