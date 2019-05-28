import Row from './row.js';

function Table(containerElement, tableData) {
    this.containerElement = containerElement;
    this.tableData = tableData;

    this.rootElement = undefined;
    this.rows = undefined;

    this.initialize();
}

Table.prototype.initialize = function () {
    this.rootElement = $('<table><tbody></tbody></table>');

    this.rows = [];
    for (var i = 0; i < this.tableData.length; i++) {
        var row = new Row(this.rootElement, this.tableData[i]);
        this.rows.push(row);
    }

    this.rootElement.appendTo(this.containerElement);
}

Table.prototype.getRowMeasurerElements = function (row) {
    return this.rows[row].getCellMeasurerElements();
}

export default Table;