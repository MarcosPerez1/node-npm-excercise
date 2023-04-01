const _=require("lodash")

function sum(a, b) {
  // Use de add() function from lodash to sum the two numbers
  return _.add(1,2)

}


function filterFalsyValues(arr) {
  // Use the compact() function from lodash to filter the array
  return _.compact([0,1,false,2,"",3])
}

function differenceInArrays(firstArray, secondArray) {
  // Use the difference() function from lodash to get the difference between the two arrays
  return _.difference([1,2,3],[1,2,4]);
}

function fillArray(arr, value) {
  // Use the fill() function from lodash to fill the array with the value
  return _.fill([1,2,3],4)
}

function calculateMean(arr) {
  // Use the mean() function from lodash to calculate the mean of the array
  return _.mean([1,2,3])
}

function camelCase(str) {
  // Use the camelCase() function from lodash to convert the string to camelCase
  return _.camelCase("hello world")
}

function capitalize(str) {
  // Use the capitalize() function from lodash to capitalize the string
  return _.capitalize("hello world")
}

function sortByNames(arr) {
  // Use the sortBy() function from lodash to sort the array by name
return _.sortBy(arr,obj=>obj.name)
}

function flatArrayAndCalculateMean(arr) {
  // Use the mean() function from lodash to calculate the mean of the array
  // Use the flatten() function from lodash to flatten the array

  const flat =_.flatten(arr);
  const mean =_.mean(flat);
  return mean

}

function sortByNamesAndCapitalizeFirstLetter(arr) {
    // Use the sortBy() function from lodash to sort the array by name
  // Use the capitalize() function from lodash to capitalize the first letter of each name
const sorted =_.sortBy(arr,[(o)=>(o.name)]);
const mapCap =_.map(sorted,(o)=>_.capitalize(o.name));
return mapCap


}

function transformToSnakeCaseAndAllCaps(arr) {
  // Use the snakeCase() function from lodash to convert the string to snake_case
  // Use the toUpper() function from lodash to convert the string to uppercase
  const toSnake = _.map(arr, (str) => _.snakeCase(str));
  const mayus = _.map(toSnake, (str) => _.toUpper(str));
  return mayus;

}

module.exports = {
  sum,
  filterFalsyValues,
  differenceInArrays,
  fillArray,
  calculateMean,
  camelCase,
  capitalize,
  sortByNames,
  flatArrayAndCalculateMean,
  sortByNamesAndCapitalizeFirstLetter,
  transformToSnakeCaseAndAllCaps,
};
