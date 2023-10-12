"use-client"
import styles from "./WeatherCard.module.css";
import WeatherIcon from "./WeatherIcon.js";

const WeatherCard = ({cityName, weatherType, currentTemperature, highTemperature, lowTemperature, cloudiness, humidity, weatherIcon, windSpeed}) => (
    <div className={styles.weatherCardWrapper} style={{backgroundColor: `rgba(0, 0, 0, 0.${cloudiness})`}}>
        <div className={styles.weatherStatisticsWrapper}>
            <div>
                <h2>{cityName}</h2>
                <div className={styles.weatherCardImage}>
                    <WeatherIcon weatherType={weatherType}/>
                </div>
            </div>
            
            <div>
                <p>Weather Type: {weatherType}</p>
                <p>Cloudiness: {cloudiness}%</p>
                <p>Humidity: {humidity}%</p>
                <p>Wind Speed: {windSpeed} mph</p>
            </div>

            <div>
                <p>Current Temperature: {currentTemperature}°F</p>
                <p>High Temperature: {highTemperature}°F</p>
                <p>Low Temperature: {lowTemperature}°F</p>
            </div>
            
        </div>
        
    </div>
);

export default WeatherCard;