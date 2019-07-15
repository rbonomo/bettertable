import Component from '/src/Component.js';
import Table from '/src/Table.js';

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
                    <div class="bottom-border"></div>
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
        this.fixedTableColumnHeaders = new Table({
            tableData: [this.fixedColumns.map(column => column.headerRender)]
        });

        this.bodyColumns = this.options.columns.filter(column => !this.fixedColumns.includes(column));
        this.fixedTableHeader = new Table({
            tableData: [this.bodyColumns.map(column => column.headerRender)]
        });
        this.element.querySelector('.fixed-header-container').appendChild(this.fixedTableHeader.element);

        this.fixedTableColumnsBody = new Table({
            tableData: this.options.tableData.map(row => row.slice(0,1))
        });
        
        this.fixedTableColumnHeadersContainerElement.appendChild(this.fixedTableColumnHeaders.element);
        this.fixedTableColumnsContainerElement.appendChild(this.fixedTableColumnsBody.element);


        this.table = new Table({
            tableData: this.options.tableData.map(tableRow => tableRow.slice(this.fixedColumns.length, this.options.columns.length))
        });
        this.tableContainerElement.appendChild(this.table.element);


        this.updateCellDimensions();
        this.updateHeaderCellHeights();
        window.addEventListener('resize', this.updateCellDimensions.bind(this));
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

    _fitTables(isXDirection, tableA, tableB) {
        const key = isXDirection ? "columns" : "rows";

        // Validation
        const enumerableACount = tableA[key].length;
        const enumerableBCount = tableB[key].length;
        if (enumerableACount !== enumerableBCount) {
            throw `fitTables(tableA, tableB) EXCEPTION:
                    "tableA ${key} count must be equal to tableB ${key} count."`;
        }

        for (let i = 0; i < enumerableACount; i++) {
            const enumerableA = isXDirection ? tableA.getColumn(i) : tableA.getRow(i);
            const enumerableB = isXDirection ? tableB.getColumn(i) : tableB.getRow(i);
            const enumerableASize = isXDirection ? enumerableA.getWidth() : enumerableA.getHeight();
            const enumerableBSize = isXDirection ? enumerableB.getWidth() : enumerableB.getHeight();
            if (enumerableASize < enumerableBSize) isXDirection ? enumerableA.setWidth(enumerableBSize) : enumerableA.setHeight(enumerableBSize);
            else isXDirection ? enumerableB.setWidth(enumerableASize) : enumerableB.setHeight(enumerableASize);
        }
    }

    fitTablesY(tableA, tableB) {
        this._fitTables(0, tableA, tableB);
    }

    fitTablesX(tableA, tableB) {
        this._fitTables(1, tableA, tableB);
    }

    fitTables(tableA, tableB) {
        this._fitTables(1, tableA, tableB);
        this._fitTables(0, tableA, tableB);
    }

    updateCellDimensions() {
        setTimeout(() => this.fitTablesX(this.fixedTableColumnHeaders, this.fixedTableColumnsBody), 5);
        setTimeout(() => this.fitTablesX(this.fixedTableHeader, this.table), 5);
        setTimeout(() => this.fitTablesY(this.fixedTableColumnHeaders, this.fixedTableHeader), 5);
        setTimeout(() => this.fitTablesY(this.fixedTableColumnsBody, this.table), 5);
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