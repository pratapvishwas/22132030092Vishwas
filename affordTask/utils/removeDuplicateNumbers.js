function removeDuplicateNumbers(numbers) {
    const uniqueMap = {};
    const uniqueNumbers = [];
    numbers.forEach((n) => {
      if (!uniqueMap[n]) {
        uniqueMap[n] = true;
        uniqueNumbers.push(n);
      }
    });
  
    return uniqueNumbers;
  }

  module.exports = removeDuplicateNumbers