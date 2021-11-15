export default class CurrencyService {
    apiBase = 'https://www.cbr-xml-daily.ru/daily_json.js'

    async getCurrency() {

      const res = await fetch(this.apiBase);
          
      if (!res.ok) {
          // eslint-disable-next-line no-useless-concat
          throw new Error (`Could not fetch ${this.apiBase}` + ` , received ${res.status}`)
        }return res.json()

    }

    getCurrencies = async () => {
        const res = await this.getCurrency()
        const usdToRub= res.Valute.USD.Value.toFixed(4);
        const euroToRub = res.Valute.EUR.Value.toFixed(4);
        const valutes = {
          usdToRub: usdToRub,
          euroToRub: euroToRub,
          usdToEuro: (usdToRub/euroToRub).toFixed(4),
          euroToUsd: (euroToRub/usdToRub).toFixed(4),
          rubToEuro: (1/euroToRub).toFixed(4),
          rubToUsd: (1/usdToRub).toFixed(4)          
        }
        return valutes
      }

 
}