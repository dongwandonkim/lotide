const findKeyByValue = (obj, str) => {
  for (let genre in obj) {
    if (str === obj[genre]) return genre;
  }
};
module.exports = findKeyByValue;
