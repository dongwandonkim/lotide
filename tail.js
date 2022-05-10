const tail = (arr) => {
  if (arr.length <= 1) return [];

  const tails = arr.slice(1);

  return tails;
};

module.exports = tail;
