const express = require("express");
const addDays = require("date-fns/addDays");

const expressInstance = express();
expressInstance.get("/", (request, response) => {
  const afterHundredDays = addDays(new Date(), 100);
  response.send(
    `${afterHundredDays.getDate()}/${
      afterHundredDays.getMonth() + 1
    }/${afterHundredDays.getFullYear()}`
  );
});

expressInstance.listen(3000);

module.exports = expressInstance;
