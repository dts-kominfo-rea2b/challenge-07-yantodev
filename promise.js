const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme

const getData = (data, findData) => {
  return new Promise((resolve, reject) => {
    if (findData == undefined) {
      reject("Data is undefined")
    } else {
      let result = 0;
      for (let i = 0; i < data.length; i++) {
        if (findData == data[i]['hasil']) {
          result++;
        }
      }
      resolve(result);
    }
  })
}

const promiseOutput = async (findData) => {
  const countTheaterIXX = await promiseTheaterIXX()
    .then((hasilSetelahMenonton) => getData(hasilSetelahMenonton, findData))
  const countTheaterVGC = await promiseTheaterVGC()
    .then((hasilSetelahMenonton) => getData(hasilSetelahMenonton, findData))
  return countTheaterIXX + countTheaterVGC
}

module.exports = {
  promiseOutput,
};
