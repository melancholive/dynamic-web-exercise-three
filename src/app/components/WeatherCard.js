"use-client"
import styles from "./WeatherCard.module.css";

const WeatherCard = ({cityName, weatherType, currentTemperature, highTemperature, lowTemperature, cloudiness, humidity, windSpeed}) => (
    <div className={styles.weatherCardWrapper}>
        <h2>{cityName}</h2>

        <p>Weather Type: {weatherType}</p>
        <p>Current Temperature: {currentTemperature}°F</p>
        <p>High Temperature: {highTemperature}°F</p>
        <p>Low Temperature: {lowTemperature}°F</p>
        <p>Cloudiness: {cloudiness}%</p>
        <p>Humidity: {humidity}%</p>
        <p>Wind Speed: {windSpeed} mph</p>
    </div>
);

export default WeatherCard;