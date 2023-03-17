const date = new Date();

const year = date.getFullYear();
const month = ('0' + (date.getMonth() + 1)).slice(-2);
const day = ('0' + (date.getDate() - 1)).slice(-2);
const dateStr = year + '-' + month + '-' + day;

console.log(dateStr);

console.log('118\nyoungman2815');