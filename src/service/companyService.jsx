import http from "./httpService";
import config from "../config.json";

const CompanyService = {
  getCompanies: async search => {
    const Companies = await http.get(
      `/query?function=SYMBOL_SEARCH&keywords=${search}&apikey=${config.apikey}`
    );

    console.log(Companies.data);
    return Companies.data["bestMatches"];
  },

  getCards: async symbol => {
    const Cards = await http.get(
      `query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${config.apikey}`
    );

    console.log(Cards.data);
    return Cards.data["Time Series (Daily)"];
  },
  getGraph: async symbol => {
    const Cards = await http.get(
      `query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${config.apikey}`
    );

    console.log(Cards.data);
    return Cards.data["Time Series (5min)"];
  }
};

export default CompanyService;
