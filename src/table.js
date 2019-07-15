import Component from '/src/Component.js';
import TableRow from '/src/TableRow.js';
import TableCell from '/src/TableCell.js';

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
        if (this.options.tableData !== undefined) this.load(this.options.tableData);
    }

    setTableRows(tableRows) {
        this.tableRows = tableRows;
        this.tableRows.forEach(tableRow => this.element.appendChild(tableRow));
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
        this.tableRows = tableData.map(tableRowData => new TableRow({
            tableCells: tableRowData.map(tableCellData => new TableCell({
                render: tableCellData
            }))
        }));

        this.tableRows.forEach(tableRow => this.tableBodyElement.appendChild(tableRow.element));
    }
}

export default Table;