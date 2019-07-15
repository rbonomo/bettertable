import Component from '/src/Component.js';
import TableRow from '/src/TableRow.js';
import TableCell from '/src/TableCell.js';
import Column from '/src/Column.js';

class Table extends Component {
    constructor(options) {
        super(options);

        this.element = $(`
            <table>
                <tbody></tbody>
            </table>
        `).get()[0];

        this.tableBodyElement = this.element.querySelector('tbody');

        if (this.options.tableRows !== undefined) this.setTableRows(this.options.tableRows);
        if (this.options.columns !== undefined) this.setColumns(this.options.columns);
        if (this.options.tableData !== undefined) this.load(this.options.tableData);
    }

    getRow(index) {
        return this.rows[index];
    }

    getColumn(index) {
        return this.columns[index];
    }

    setColumns(columns) {
        this.columns = columns;
    }

    setTableRows(tableRows) {
        this.tableRows = tableRows;
        this.rows = tableRows;
        this.tableRows.forEach(tableRow => this.tableBodyElement.appendChild(tableRow.element));
    }

    getColumnWidth(index) {
        if (this.tableRows && this.tableRows.length > 0) {
            return this.tableRows[0].getTableCellWidth(index);
        }
    }

    setColumnWidth(index, width) {
        this.tableRows.forEach(tableRow => tableRow.setTableCellWidth(index, width));
    }

    getRowHeight(index) {
        return this.tableRows[index].getHeight();
    }

    setRowHeight(index, height) {
        this.tableRows[index].setHeight(height);
    }

    load(tableData) {
        const tableRows = [];
        const columns = [];

        tableData.forEach(tableRowData => {
            const tableCells = tableRowData.map(tableCellData => new TableCell({ render: tableCellData }));
            tableRows.push(new TableRow({ tableCells }));
        });
        tableRows[0].tableCells.forEach((tableCell, index) => {
            columns.push(new Column({
                tableCells: tableRows.map(tableRow => tableRow.tableCells[index])
            }));
        });

        this.setTableRows(tableRows);
        this.setColumns(columns);
    }
}

export default Table;