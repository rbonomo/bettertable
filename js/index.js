import BetterTable from '../src/better-table.js';

var tableData = [
    ['Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rb+onomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
    ['Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'],
];
var tableDataShort = [
    ['Ryan', 'Bonomo', 'rbonomo'],
    ['Ryan', 'Bonomo', 'rbonomo'],
    ['Ryan', 'Bonomo', 'rbonomo'],
    ['Ryan', 'Bonomo', 'rbonomo'],
    ['Ryan', 'Bonomo', 'rbonomo'],
    ['Ryan', 'Bonomo', 'rbonomo'],
];
var tableHeaders = ['Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo', 'Ryan', 'Bonomo', 'rbonomo'];
var tableHeadersShort = ['Ryan', 'Bonomo', 'rbonomo'];
var betterTableContainerElement = $('#betterTable1');
var betterTable1 = new BetterTable(betterTableContainerElement, tableHeaders, tableData);
var betterTableContainerElement = $('#betterTable2');
var betterTable1 = new BetterTable(betterTableContainerElement, tableHeadersShort, tableDataShort);
var betterTableContainerElement = $('#betterTable3');
var betterTable1 = new BetterTable(betterTableContainerElement, tableHeaders, tableData);