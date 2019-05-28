import Cell from './cell.js';

function Row(containerElement, rowData) {
    this.containerElement = containerElement;
    this.rowData = rowData;

    this.rootElement = undefined;
    this.cells = undefined;

    this.initialize();
}

Row.prototype.initialize = function () {
    this.rootElement = $('<tr></tr>');

    this.cells = [];
    for (var i = 0; i < this.rowData.length; i++) {
        var cell = new Cell(this.rootElement, this.rowData[i]);
        this.cells.push(cell);
    }

    this.rootElement.appendTo(this.containerElement);
};

Row.prototype.getCellMeasurerElements = function () {
    var cellMeasurerElements = [];
    for (var i = 0; i < this.cells.length; i++) {
        cellMeasurerElements.push(this.cells[i].getMeasurerElement());
    }
    return cellMeasurerElements;
}

export default Row;