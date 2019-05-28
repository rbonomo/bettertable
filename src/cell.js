function Cell(containerElement, cellData) {
    this.containerElement = containerElement;
    this.cellData = cellData;

    this.rootElement = undefined;
    this.measurerElement = undefined;
    this.contentElement = undefined;

    this.initialize();
}

Cell.prototype.initialize = function () {
    this.rootElement = $('<td></td>');
    this.measurerElement = $('<div class="cell-measurer"></div>');
    this.contentElement = $('<div class="cell-content"></div>');
    this.contentElement.html(this.cellData);

    this.contentElement.appendTo(this.measurerElement);
    this.measurerElement.appendTo(this.rootElement);
    this.rootElement.appendTo(this.containerElement);
}

Cell.prototype.getMeasurerElement = function () {
    return this.measurerElement;
}

export default Cell;