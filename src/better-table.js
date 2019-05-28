import Table from './table.js';
import FixedHeader from './fixed-header.js';

function BetterTable(containerElement, tableHeaders, tableData) {
    this.containerElement = containerElement;
    this.tableHeaders = tableHeaders;
    this.tableData = tableData;

    this.rootElement = undefined;
    this.fixedHeader = undefined;
    this.table = undefined;

    this.initialize();
}

BetterTable.prototype.initialize = function () {
    this.rootElement = $('<div class="better-table"></div>');
    this.headerContainerElement = $('<div class="header-container"></div>');
    this.fixedHeaderContainerElement = $('<div class="fixed-header-container"></div>');
    this.headerSpacerElement = $('<div class="header-spacer"></div>');
    this.tableContainerContainerElement = $('<div class="table-container-container"></div>');
    this.tableContainerElement = $('<div class="table-container"></div>');

    // BORDERS
    this.leftBorderElement = $('<div class="left-border"></div>');
    this.bottomBorderElement = $('<div class="bottom-border"></div>');
    this.rightBorderElement = $('<div class="right-border"></div>');

    this.table = new Table(this.tableContainerElement, this.tableData);

    var tableCellMeasureElements = this.table.getRowMeasurerElements(0);
    this.fixedHeader = new FixedHeader(this.fixedHeaderContainerElement, tableCellMeasureElements, this.tableHeaders);

    this.tableContainerElement.scroll(this.onTableScroll.bind(this));

    this.fixedHeaderContainerElement.appendTo(this.headerContainerElement);
    this.headerSpacerElement.appendTo(this.headerContainerElement);
    this.headerContainerElement.appendTo(this.rootElement);

    this.tableContainerElement.appendTo(this.tableContainerContainerElement);
    this.rightBorderElement.appendTo(this.tableContainerContainerElement);
    this.tableContainerContainerElement.appendTo(this.rootElement);

    this.leftBorderElement.appendTo(this.rootElement);
    this.bottomBorderElement.appendTo(this.rootElement);

    this.rootElement.appendTo(this.containerElement);

    this.resizeHeaderSpacer();
}

BetterTable.prototype.onTableScroll = function (event) {
    this.fixedHeaderContainerElement.scrollLeft(event.target.scrollLeft);
}

BetterTable.prototype.resizeHeaderSpacer = function () {
    const width = this.getBodyScrollbarWidth();
    console.log(width);
    this.headerSpacerElement.css('flex-basis', width);
}

BetterTable.prototype.getBodyScrollbarWidth = function () {
    const tableContainerHTMLElement = this.tableContainerElement.get()[0];
    return tableContainerHTMLElement.offsetWidth - tableContainerHTMLElement.clientWidth;
}

export default BetterTable;