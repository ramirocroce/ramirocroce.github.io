// Sheetrock.js 1.0 Example 3
// https://chriszarate.github.io/sheetrock/

// Let’s generate an ordered list by passing in a Handlebars template.
// This time we’ll rank the top five players by home runs.

// Define spreadsheet URL.
var hwRegulars = 'https://docs.google.com/spreadsheets/d/1JjJTL_wG4p1YFF6VkRWBQxf3ioFivD5lwZ-kbMtvFSI/edit#gid=0';
var hwTreasures = 'https://docs.google.com/spreadsheets/d/1JjJTL_wG4p1YFF6VkRWBQxf3ioFivD5lwZ-kbMtvFSI/edit#gid=2105842102';

// Compile the Handlebars template for HR leaders.
var hwrTemplate = Handlebars.compile($('#hr-template').html());
var hwtTemplate = Handlebars.compile($('#hr-template2').html());

// Load top five HR leaders.
$('#hr2').sheetrock({
  url: hwRegulars,
  rowTemplate: hwrTemplate
});

// Load top five HR leaders.
$('#hr').sheetrock({
  url: hwTreasures,
  rowTemplate: hwtTemplate
});
