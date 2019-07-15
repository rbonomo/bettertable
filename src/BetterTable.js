import Component from '/src/Component.js';
import Table from '/src/Table.js';
import FixedTableHeader from '/src/FixedTableHeader.js';

class BetterTable extends Component {
    constructor(options) {
        super(options);

        this.columns = this.options.columns;
        this.tableData = this.options.tableData;

        this.element = $(`
            <div class="better-table">
                <div class="header-container">
                    <div class="fixed-table-column-headers-container"></div>
                    <div class="fixed-header-container"></div>
                    <div class="header-spacer"></div>
                </div>
                <div class="table-container-container">
                    <div class="right-border"></div>
                    <div class="fixed-table-columns-container-container">
                        <div class="fixed-table-columns-container"></div>
                        <div class="fixed-table-columns-container-spacer"></div>
                    </div>
                    <div class="table-container"></div>
                </div>
            </div>
        `).get()[0];

        this.tableContainerElement = this.element.querySelector('.table-container');
        this.headerSpacerElement = this.element.querySelector('.header-spacer');
        this.fixedTableColumnsContainerSpacerElement = this.element.querySelector('.fixed-table-columns-container-spacer');
        this.fixedTableColumnsContainerElement = this.element.querySelector('.fixed-table-columns-container');
        this.fixedTableColumnHeadersContainerElement = this.element.querySelector('.fixed-table-column-headers-container');
        this.fixedHeaderContainerElement = this.element.querySelector('.fixed-header-container');

        this.tableContainerElement.addEventListener('scroll', this.handleTableScroll.bind(this));

        

        


        this.fixedColumns = this.options.columns.filter((column, index, columns) => // Set fixed columns => get each column in columns
            column.isFixed && // that is fixed and
            columns.slice(0, index).every(column => column.isFixed) // each previous column is fixed.
        );
        this.fixedTableColumnHeaders = new FixedTableHeader({
            table: this,
            tableHeaderCellRenders: this.fixedColumns.map(column => column.headerRender)
        });

        this.bodyColumns = this.options.columns.filter(column => !this.fixedColumns.includes(column));
        this.fixedTableHeader = new FixedTableHeader({
            table: this,
            tableHeaderCellRenders: this.bodyColumns.map(column => column.headerRender)
        });
        this.element.querySelector('.fixed-header-container').appendChild(this.fixedTableHeader.element);

        this.fixedTableColumnsBody = new Table({ tableData: this.options.tableData.map(row => row.slice(0,1)) });
        
        this.fixedTableColumnHeadersContainerElement.appendChild(this.fixedTableColumnHeaders.element);
        this.fixedTableColumnsContainerElement.appendChild(this.fixedTableColumnsBody.element);


        this.table = new Table({ tableData: this.options.tableData.map(tableRow => tableRow.slice(this.fixedColumns.length, this.options.columns.length)) });
        this.tableContainerElement.appendChild(this.table.element);


        this.updateColumnWidths();
        this.updateHeaderCellHeights();
        window.addEventListener('resize', this.updateColumnWidths.bind(this));
        window.addEventListener('resize', this.updateHeaderCellHeights.bind(this));
    }

    appendTo(htmlElement) {
        htmlElement.appendChild(this.element);
        this.resizeSpacers();
    }

    load(tableData) {
        this.table.load(tableData);
    }

    resizeSpacers() {
        this._resizeHeaderSpacer();
        this._resizeFixedTableColumnsContainerSpacer();
    }

    _resizeHeaderSpacer() {
        const width = this.getTableContainerScrollbarWidth();
        this.headerSpacerElement.setAttribute('style', `flex-basis: ${width}px`);
    }

    _resizeFixedTableColumnsContainerSpacer() {
        const height = this.getTableContainerScrollbarHeight();
        this.fixedTableColumnsContainerSpacerElement.setAttribute('style', `flex-basis: ${height}px`);
    }

    getTableContainerScrollbarWidth() {
        return this.tableContainerElement.offsetWidth - this.tableContainerElement.clientWidth;
    }

    getTableContainerScrollbarHeight() {
        return this.tableContainerElement.offsetHeight - this.tableContainerElement.clientHeight;
    }

    handleTableScroll(event) {
        this.fixedHeaderContainerElement.scrollLeft = event.target.scrollLeft;
        this.fixedTableColumnsContainerElement.scrollTop = event.target.scrollTop;
    }

    updateColumnWidths() {
        const _updateColumnWidths = () => {
            this.columns.slice(1, this.options.columns.length).forEach((column, index) => {
                if (this.table.getColumnWidth(index) < this.fixedTableHeader.getColumnWidth(index)) {
                    this.table.setColumnWidth(index, this.fixedTableHeader.getColumnWidth(index));
                } else {
                    this.fixedTableHeader.setColumnWidth(index, this.table.getColumnWidth(index));
                }
            });
        };
        const _updateFixedColumnWidths = () => {
            this.columns.slice(0, 1).forEach((column, index) => {
                if (this.fixedTableColumnsBody.getColumnWidth(index) < this.fixedTableColumnHeaders.getColumnWidth(index)) {
                    this.fixedTableColumnsBody.setColumnWidth(index, this.fixedTableColumnHeaders.getColumnWidth(index));
                } else {
                    this.fixedTableColumnHeaders.setColumnWidth(index, this.fixedTableColumnsBody.getColumnWidth(index));
                }
            });
        };
        setTimeout(_updateColumnWidths.bind(this), 5);
        setTimeout(_updateFixedColumnWidths.bind(this), 5);
    }

    updateHeaderCellHeights() {
        const _updateHeaderCellHeights = () => {
            if (this.fixedTableColumnHeaders.getRowHeight(0) < this.fixedTableHeader.getRowHeight(0)) {
                this.fixedTableColumnHeaders.setRowHeight(0, this.fixedTableHeader.getRowHeight(0));
            } else {
                this.fixedTableHeader.setRowHeight(0, this.fixedTableColumnHeaders.getRowHeight(0));
            }
        };

        setTimeout(_updateHeaderCellHeights.bind(this), 5);
    }
}

export default BetterTable;