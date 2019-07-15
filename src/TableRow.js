import Component from './Component.js';

class Row extends Component {
    constructor(options) {
        super(options);

        this.element = $(`
            <tr></tr>
        `).get()[0];

        if (this.options.tableCells !== undefined) this.setTableCells(this.options.tableCells);
    }

    setTableCells(tableCells) {
        this.tableCells = tableCells;
        this.tableCells.forEach(tableCell => this.element.appendChild(tableCell.element));
    }

    getTableCellWidth(index) {
        return this.tableCells[index].getWidth();
    }

    setTableCellWidth(index, width) {
        this.tableCells[index].setWidth(width);
    }

    getHeight() {
        return Math.max(...this.tableCells.map(tableCell => tableCell.getHeight()));
    }

    setHeight(height) {
        this.tableCells.forEach(tableCell => tableCell.setHeight(height));
    }
}

export default Row;