const axios = require("axios");
class CoinMarketcapServices {
  API_KEY;
  URL;
  END_POINT_BASE;
  constructor({ API_KEY, URL }) {
    if (!API_KEY)
      return console.log(
        "[Node Services Error] You need to privede an api key."
      );
    if (!URL)
      return console.log(
        "[Node Services Error You need to privede an base url."
      );
    this.API_KEY = API_KEY;
    this.URL = URL;
    this.END_POINT_BASE = axios.default.create({
      baseURL: URL,
      headers: {
        "X-CMC_PRO_API_KEY": API_KEY,
      },
    });
  }

  getCurrency = async ({ symbol }) => {
    if (!symbol) throw new Error("You need to provide a symbol.");

    const currencys = await this.END_POINT_BASE.get(
      `/v1/cryptocurrency/quotes/latest?symbol=${symbol}`
    )
      .then((res) => res.data)
      .catch((err) => {
        /* console.log("[Node Services Error]", err.message); */
        return {
          status: 404,
          error: true,
          errorMessage: "Token Not Found.",
        };
      });
    return currencys;
  };
}

module.exports = CoinMarketcapServices;
