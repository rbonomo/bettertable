import Model from '/src/Model.js';

class Column extends Model {
    constructor(options) {
        super(options);
    }

    setWidth(width) {
        this.tableCells[0].setWidth(width);
    }

    getWidth() {
        return this.tableCells[0].getWidth();
    }
}

export default Column;