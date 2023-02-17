const superagent = require("superagent");
const Currencies = require("../db/models/currencyModel");
const callAPI = async () => {
    await Currencies.deleteMany({}).then(()=>{
        console.log("all previos data cleared")
    }).catch((err)=>{
        console.log(err)
    })
  await superagent
    .get("https://api.wazirx.com/api/v2/tickers")
    .then((res) => {
      Object.values(res.body)
        .slice(0, 10)
        .map((item) => {
          const data = {
            name: item?.name,
            last: item?.last,
            buy: item?.buy,
            sell: item?.sell,
            volume: item?.volume,
            base_unit: item?.base_unit,
          };
          const cur = new Currencies(data);
          cur.save((error,result) => {
            if (error) {
              console.log(error);
            } else {
              console.log("data saved in database");
            }
          });
        });
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = callAPI;
