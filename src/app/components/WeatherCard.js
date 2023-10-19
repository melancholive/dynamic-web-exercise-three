"use-client"
import styles from "./WeatherCard.module.css";
import WeatherIcon from "./WeatherIcon.js";

const WeatherCard = ({cityName, weatherType, currentTemperature, highTemperature, lowTemperature, cloudiness, humidity, weatherIcon, windSpeed}) => (
    <div className={styles.weatherCardWrapper} style={{backgroundColor: `rgba(0, 0, 0, 0.${0.8*cloudiness})`}}>
        <h2>{cityName}</h2>
        <div className={styles.weatherStatisticsWrapper}>
            <div>
                <p>Weather Type:</p>
                <p className={styles.statistics}>{weatherType}</p>
                <p>Cloudiness:</p>
                <p className={styles.statistics}>{cloudiness}%</p>
                <p>Humidity:</p>
                <p className={styles.statistics}>{humidity}%</p>
                <p>Wind Speed:</p>
                <p className={styles.statistics}>{windSpeed} MPH</p>
            </div>

            <div>
                <p>Current Temperature:</p>
                <p className={styles.statistics}>{currentTemperature}°F</p>
                <p>High Temperature:</p>
                <p className={styles.statistics}>{highTemperature}°F</p>
                <p>Low Temperature:</p>
                <p className={styles.statistics}>{lowTemperature}°F</p>
            </div>
            <div className={styles.weatherCardImage}>
                    <WeatherIcon weatherType={weatherType}/>
            </div>            
        </div>
        
    </div>
);

export default WeatherCard;