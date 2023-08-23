const axios = require("axios");

const removeDuplicateNumbers = require("../utils/removeDuplicateNumbers")
const sortNumbers = require("../utils/sortNumbers")


// storing all the numbers
let mergedNumbers = [];


// resolving all the urls and returing the promises
function fetchNumbers(url) {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(url);
      mergedNumbers.push(...res.data.numbers);
      resolve(res.data.numbers);
    } catch (err) {
      reject(err);
    }
  });
}


async function NumberController(req, res) {
  // handling the errors using try catch
  try {

    // gettting the url query params from the url
    const _urls = req.query.url;


    const results = _urls.map(async (url) => await fetchNumbers(url));


    // resolving all the requests promises
    await Promise.all(results);

    // removing the duplicates using hasMap technique
    const uniqueNumbers = removeDuplicateNumbers(mergedNumbers);

    // sorting the unique numbers using bubble sort
    sortNumbers(uniqueNumbers);
   

    // sending the response to the url
    return res.json({ numbers: uniqueNumbers || [] });

  } catch (err) {
    // sending the response that something wrong is happening
    return res.json({ error: "Something went wrong!" });
  }
}

module.exports = NumberController;
