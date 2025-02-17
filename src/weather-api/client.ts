import axios from "axios";

async function sendRequest(city: string) : Promise<WeatherResult> {
    let apiKey = "XHJXYUH9YCKY7QSN8KFJ4AUCM";
    let apiUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
    try {
        const response = await axios.get(`${apiUrl}${city}?unitGroup=metric&key=${apiKey}&contentType=json`);
        const data = response.data; // данные из тела ответа
       // console.log(response);
        return new WeatherResult(data.address,
            Math.round(Number(data.currentConditions.temp)),
            data.currentConditions.humidity,
            data.currentConditions.pressure,
            data.currentConditions.icon
        );    // собрать ответ
    } catch (err: any) {
        return new err("city not found")
    }
}
export async function getWeather(city: string) : Promise<WeatherResult> {
    return await sendRequest(city);
}

export class WeatherResult {
    public constructor(
        public address: string="",
        public temp: number=0,
        public humidity: string="",
        public pressure: string="",
        public icon: string=""
    ) {}
}