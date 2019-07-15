import BetterTable from '../src/BetterTable.js';
import Column from '../src/Column.js';

var tableData = [
    ['1', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['2', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['3', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['4', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['5', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['6', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['7', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['8', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['9', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['10', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['11', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['12', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['13', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['14', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['15', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['16', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['17', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['18', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['19', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['20', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['21', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['22', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['23', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['24', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['25', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['26', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['27', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['28', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['29', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['30', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['31', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['32', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['33', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
];
var tableDataShort = [
    ['1', 'Bonomo', 'rbonomo'],
    ['2', 'Bonomo', 'rbonomo'],
    ['3', 'Bonomo', 'rbonomo'],
    ['4', 'Bonomo', 'rbonomo'],
    ['5', 'Bonomo', 'rbonomo'],
    ['6', 'Bonomo', 'rbonomo'],
];

const columns = [
    new Column({ headerRender: '#', isFixed: true }),
    ...Array.apply(null, {length: 23})
        .map((e, i) => new Column({ headerRender: `<span style="white-space: nowrap">Column ${i + 2}</span>` }))
];

const betterTable1 = new BetterTable({ columns, tableData });
betterTable1.appendTo(document.getElementById('betterTable1'));

const betterTable2 = new BetterTable({ columns: columns.slice(0, 3), tableData: tableDataShort });
betterTable2.appendTo(document.getElementById('betterTable2'));

const betterTable3 = new BetterTable({ columns, tableData });
betterTable3.appendTo(document.getElementById('betterTable3'));