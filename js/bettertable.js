// Filename: bettertable.js
// Author: Ryan Bonomo

/*----------------------------------------------------------------------------*/
function BetterTable(containerElement, tableHeaders, tableData) {
  this.containerElement = containerElement;
  this.tableHeaders = tableHeaders;
  this.tableData = tableData;

  this.rootElement = undefined;
  this.fixedHeader = undefined;
  this.table = undefined;

  this.initialize();
}

BetterTable.prototype.initialize = function() {
  this.rootElement = $('<div class="better-table"></div>');
  this.fixedHeaderContainerElement = $('<div class="fixed-header-container"></div>');
  this.tableContainerElement = $('<div class="table-container"></div>');

  this.table = new Table(this.tableContainerElement, this.tableData);

  var tableCellMeasureElements = this.table.getRowMeasurerElements(0);
  console.log(tableCellMeasureElements);
  this.fixedHeader = new FixedHeader(this.fixedHeaderContainerElement, tableCellMeasureElements, this.tableHeaders);

  this.fixedHeaderContainerElement.appendTo(this.rootElement);
  this.tableContainerElement.appendTo(this.rootElement);
  this.rootElement.appendTo(this.containerElement);
}

/*----------------------------------------------------------------------------*/
function FixedHeader(containerElement, colHeaderSizerElements, colHeaderNames) {
  this.containerElement = containerElement;
  this.colHeaderSizerElements = colHeaderSizerElements;
  this.colHeaderNames = colHeaderNames;

  this.rootElement = undefined;
  this.colHeaders = undefined;

  this.initialize();
}

FixedHeader.prototype.initialize = function() {
  this.rootElement = $(
    '<table class="fixed-header">' +
    '  <thead>' +
    '    <tr></tr>' +
    '  </thead>' +
    '</div>'
  );

  // Create the ColHeaders.
  this.colHeaders = [];
  var colHeaderContainer = this.rootElement.find('thead tr');
  for (var i = 0; i < this.colHeaderNames.length; i++) {
    this.colHeaders.push(new ColHeader(colHeaderContainer, this.colHeaderSizerElements[i], this.colHeaderNames[i]));
  }

  this.rootElement.appendTo(this.containerElement);

  setTimeout(function() {
    this.update();
    this.containerElement.height(this.rootElement.height());
    this.rootElement.css('visibility', 'visible');
  }.bind(this), 50);

  $(window).resize(function() {
    setTimeout(function() {
      this.update();
    }.bind(this), 50);
  }.bind(this));
}

FixedHeader.prototype.update = function() {
  for (var i = 0; i < this.colHeaders.length; i++) {
    this.colHeaders[i].updateWidth();
  }
}

/*----------------------------------------------------------------------------*/
function Table(containerElement, tableData) {
  this.containerElement = containerElement;
  this.tableData = tableData;

  this.rootElement = undefined;
  this.rows = undefined;

  this.initialize();
}

Table.prototype.initialize = function() {
  this.rootElement = $('<table><tbody></tbody></table>');

  this.rows = [];
  for (var i = 0; i < this.tableData.length; i++) {
    var row = new Row(this.rootElement, this.tableData[i]);
    this.rows.push(row);
  }

  this.rootElement.appendTo(this.containerElement);
}

Table.prototype.getRowMeasurerElements = function(row) {
  return this.rows[row].getCellMeasurerElements();
}

/*----------------------------------------------------------------------------*/
function Cell(containerElement, cellData) {
  this.containerElement = containerElement;
  this.cellData = cellData;

  this.rootElement = undefined;
  this.measurerElement = undefined;
  this.contentElement = undefined;

  this.initialize();
}

Cell.prototype.initialize = function() {
  this.rootElement = $('<td></td>');
  this.measurerElement = $('<div class="cell-measurer"></div>');
  this.contentElement = $('<div class="cell-content"></div>');
  this.contentElement.html(this.cellData);

  this.contentElement.appendTo(this.measurerElement);
  this.measurerElement.appendTo(this.rootElement);
  this.rootElement.appendTo(this.containerElement);
}

Cell.prototype.getMeasurerElement = function() {
  return this.measurerElement;
}

/*----------------------------------------------------------------------------*/
function Row(containerElement, rowData) {
  this.containerElement = containerElement;
  this.rowData = rowData;

  this.rootElement = undefined;
  this.cells = undefined;

  this.initialize();
}

Row.prototype.initialize = function() {
  this.rootElement = $('<tr></tr>');

  this.cells = [];
  for (var i = 0; i < this.rowData.length; i++) {
    var cell = new Cell(this.rootElement, this.rowData[i]);
    this.cells.push(cell);
  }

  this.rootElement.appendTo(this.containerElement);
};

Row.prototype.getCellMeasurerElements = function() {
  var cellMeasurerElements = [];
  for (var i = 0; i < this.cells.length; i++) {
    cellMeasurerElements.push(this.cells[i].getMeasurerElement());
  }
  return cellMeasurerElements;
}

/*----------------------------------------------------------------------------*/
function ColHeader(containerElement, sizerReferenceElement, name) {
  this.containerElement = containerElement;
  this.sizerReferenceElement = sizerReferenceElement;
  this.name = name;

  this.rootElement = undefined;
  this.sizerElement = undefined;

  this.initialize();
}

ColHeader.prototype.initialize = function() {
  this.rootElement = $('<th></th>');
  this.sizerElement = $('<div class="col-header-content"></div>');
  this.sizerElement.appendTo(this.rootElement);
  this.sizerElement.html(this.name);
  this.rootElement.appendTo(this.containerElement);
}

ColHeader.prototype.updateWidth = function() {
  console.log('Width: ' + this.sizerReferenceElement.width());
  this.sizerElement.css('width', this.sizerReferenceElement.width());
}
