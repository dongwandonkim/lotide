const tail = (arr) => {
  if (arr.length <= 1) return [];

  const tails = arr.slice(1);
  console.log(tails, arr);
};

module.exports = tail;
