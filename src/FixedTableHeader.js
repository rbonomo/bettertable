import Component from '/src/Component.js';
import TableCell from '/src/TableCell.js';

class FixedHeaderContainer extends Component {
    constructor(options) {
        super(options);

        this.element = $(`
            <table class="fixed-table-header">
                <thead>
                    <tr></tr>
                </thead>
            </table>
        `).get()[0];

        this.tableHeaderCellsContainer = this.element.querySelector('tr');

        this.table = this.options.table;

        this.tableHeaderCells = this.options.tableHeaderCellRenders
            .map((tableHeaderCellRender, index) => new TableCell({
                render: tableHeaderCellRender,
                type: 'th'
            }));

        this.tableHeaderCells.forEach(tableHeaderCell =>
            this.tableHeaderCellsContainer.appendChild(tableHeaderCell.element));
    }

    getColumnWidth(index) {
        return this.tableHeaderCells[index].getWidth();
    }

    setColumnWidth(index, width) {
        this.tableHeaderCells[index].setWidth(width);
    }

    getRowHeight(index) {
        return this.tableHeaderCells[0].getHeight();
    }

    setRowHeight(index, height) {
        this.tableHeaderCells.forEach(tableHeaderCell => tableHeaderCell.setHeight(height));
    }
}

export default FixedHeaderContainer;