# weather-forecast-COD4785
**Title: CodTech IT solutions Internship- Task Documentation : creating a weather forecast application**

**Introduction**
This documentation provides a detailed information of the task assigned during the CodTech IT Solutions Internship program. The task involves creating a weather forecast app.This documentation will cover the implementation details,rational behind the code structure, and insights into the programming techniques utilized. Additionally, it will include information about the intern,Rohit Muthunuru and his assigned id, COD4785

**Intern Information**
Name: Rohit Muthunuru
Intern Id:COD4785

**Task Description**
The task assigned to Rohit Muthunuru during the CodTech IT solutions internship program is to create a weather forecast application.

**Implementation**
The implementation of the task involved utilizing React.js and it involves various pages like index.js, App.js,Student.js and weather.css.
 below is the code explanation:


 <-------------index.js-------------------->
 import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


It is the main file there are various packages and files imported into it like React from 'react', ReactDOM and files like index.css and App.
There is a react strict mode  used in the file, and file <App/> is exported and used here.


<-----------------------App.js------------------------------->
import React from 'react';
   import Student from './Student';

   const App = () => {
     return (
       <div>
         <h1>Weather App</h1>
         <Student />
       </div>
     );
   };

   export default App;

   Here the file returns jsx and student file imported into it.


   <-----------------------------Student.js------------------------------>

   import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Weather.css';

const Student = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [currentDateTime, setCurrentDateTime] = useState('');

  const apiKey = 'db9c3807b51d6d5f6c1c94cce6903b7c';

  useEffect(() => {
    updateDateTime();
  }, []);

  const updateDateTime = () => {
    const now = new Date();
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZoneName: 'short',
    };
    setCurrentDateTime(now.toLocaleDateString('en-US', options));
  };

  const getWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      setWeatherData(response.data);
      updateDateTime();
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className="weather-container">
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="input-field"
        />
        <button onClick={getWeather} className="get-weather-btn">
          Get Weather
        </button>
      </div>

      {weatherData && (
        <div className="weather-details">
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
        </div>
      )}

      <div className="date-time-container">
        <p>{currentDateTime}</p>
      </div>
    </div>
  );
};

export default Student; 


This code is a React component that fetches and displays weather information for a specified city. Let's break down the code step by step:

1. **Imports**:
   - `React`: Imports the React library.
   - `useState, useEffect`: Importing hooks from React for state management and side effects handling respectively.
   - `axios`: Importing Axios library for making HTTP requests.
   - `'./Weather.css'`: Importing a CSS file for styling.

2. **Functional Component Definition**:
   - `Student`: This is a functional component named `Student`. It doesn't take any props.
   - Inside this component, three pieces of state are initialized using the `useState` hook:
     - `weatherData`: Stores the weather data fetched from the API.
     - `city`: Stores the name of the city entered by the user.
     - `currentDateTime`: Stores the current date and time.
   - An API key (`apiKey`) is declared which is used for accessing the OpenWeatherMap API.

3. **`useEffect` Hook**:
   - It's used to update the current date and time when the component mounts initially. It runs the `updateDateTime` function.

4. **Functions**:
   - `updateDateTime`: Updates the `currentDateTime` state with the current date and time.
   - `getWeather`: Fetches weather data for the specified city using Axios. It updates both `weatherData` and `currentDateTime` states.

5. **Render Method**:
   - Returns JSX which represents the UI of the component.
   - It consists of a container div with class `weather-container`.
   - Inside this container, there's an input field for entering the city name and a button to trigger the weather data fetch.
   - If `weatherData` is available (i.e., not null), it displays weather details such as city name and temperature.
   - Lastly, it shows the current date and time.

6. **Export**:
   - The `Student` component is exported as the default export of this module.

This component allows users to input a city name, fetches weather data for that city, and displays it along with the current date and time.



<-----------------------Weather.css-------------------------------------->

body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background: url('weather.jpg') center/cover no-repeat fixed;
    height: 100vh;
    display: flex;
    align-items:top;
    justify-content: center;
  }

  .weather-container {
    text-align: center;
    background: rgba(255, 255, 255, 0.8);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
  
  .input-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .input-field {
    padding: 10px;
    margin-right: 10px;
  }
  
  .get-weather-btn {
    padding: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  .weather-details {
    margin-top: 20px;
  }
  
  .date-time-container {
    margin-top: 20px;
    font-size: 14px;
  }
  


  This is the css file which is used to design the application styles etc..

  **Conclusion**
  In conclusion the task assigned to Rohit Muthunuru during the CodTech IT Solutions internship program involved creating a weather forecast application. The implemented solution successfully accomplishes the task. The documentation provides insights into implementation details,code explanation. Rohit Muthunuru with intern ID : COD4785 has effectively completed the task as a part of internship program.

This concludes the documentation of the task to "create a weather forecast application" assigned during the CodTech IT Solutions Internship program.
