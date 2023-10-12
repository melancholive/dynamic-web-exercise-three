"use-client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{ faBolt, faCloud, faUmbrella, faSnowflake, faSun, } from "@fortawesome/free-solid-svg-icons";

const WeatherIcon = ({weatherType}) => {
    // https://openweathermap.org/weather-conditions
    switch(weatherType){
        case 'Thunderstorm':
            return <FontAwesomeIcon icon={faBolt}/>;
        case 'Drizzle':
        case 'Rain':
            return <FontAwesomeIcon icon={faUmbrella}/>;
        case 'Snow':
            return <FontAwesomeIcon icon={faSnowflake}/>;
        case "Clear":
            return <FontAwesomeIcon icon={faSun}/>;
        case 'Clouds':
        case 'Haze':
            return <FontAwesomeIcon icon={faCloud}/>;
        default:
            return <div></div>;
    }
};

export default WeatherIcon;