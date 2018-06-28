const listToArray = ({ value, rest }) => rest === null ? [value] : [value].concat(listToArray(rest));
const arrayToList = arr => arr.length === 0 ? null : { value: arr.shift(), rest: arrayToList(arr) };
const prepend = (value, list) => { value, rest: list };
const nth = (list, index) => listToArray(list)[index];
