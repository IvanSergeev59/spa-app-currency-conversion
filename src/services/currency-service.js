export default class CurrencyService {
    apiBase = 'https://www.cbr-xml-daily.ru/daily_json.js'

    async getCurrency(url) {

    const res = await fetch(this.apiBase);
        
    if (!res.ok) {
        // eslint-disable-next-line no-useless-concat
        throw new Error (`Could not fetch ${this.apiBase}` + ` , received ${res.status}`)
      }
      

    return res.json()

    }

    getCurrencies = async () => {
        const res = await this.getCurrency()
        const valutes = {
          usd:res.Valute.USD.Value,
          euro: res.Valute.EUR.Value
        }
       
        return valutes
      }

 
    }