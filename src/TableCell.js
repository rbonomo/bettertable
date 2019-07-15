import Component from '/src/Component.js';

class TableCell extends Component {
    constructor(options) {
        super(options);

        this.element = $(`
            <${this.options.type || 'td'}>
                <div class="cell-measurer">
                    <div class="cell-content"></div>
                </div>
            </${this.options.type || 'td'}>
        `).get()[0];

        this.measurerElement = this.element.querySelector('.cell-measurer');
        this.contentElement = this.element.querySelector('.cell-content');

        if (this.options.render !== undefined) this.contentElement.html(this.options.render);
    }

    getWidth() {
        return $(this.measurerElement).width();
    }

    setWidth(width) {
        this.measurerElement.style.width = `${width}px`;
    }

    getHeight() {
        return $(this.measurerElement).height();
    }

    setHeight(height) {
        this.measurerElement.style.height = `${height}px`;
    }
}

export default TableCell;