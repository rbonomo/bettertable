import Primitive from '/src/Primitive.js';

class Component extends Primitive {
    constructor(options) {
        super(options);
        if (!HTMLElement.prototype.hasBeenInitializedWithExtensions) {
            this.initializeHTMLElementPrototypeExtensions();
        }
    }

    initializeHTMLElementPrototypeExtensions() {
        HTMLElement.prototype.hasBeenInitializedWithExtensions = true;

        HTMLElement.prototype.html = function(renderable) {
            const render = rendering => {
                if (rendering instanceof HTMLElement) return this.appendChild(rendering);
                if (typeof rendering === 'function') return render(rendering());
                this.innerHTML = rendering;
            };
            render(renderable);
        };
    }
}

export default Component;