import './App.css'
import { registerCharts } from './registerCharts';

import BrightnessAndTempLines from './lineCharts/BrightnessAndTempLines';
import BrightnessNoteBars from './barCharts/BrightnessNotesBars';
import { useEffect, useState } from 'react';

registerCharts();

interface WeatherData {
  id: String;
  brightnessNote: String;
  brightnessValue: number;
  dateTime: String;
  temperature: number;
}

function App() {
  const [fetchedDatas, setFetchedDatas] = useState<WeatherData[]>([]);
  const [dateTimes, setDateTime] = useState<String[]>([]);
  const [brightnessValues, setBrightnessValues] = useState<number[]>([]);
  const [temperatures, setTemperatures] = useState<number[]>([]);
  const [brightnessNotes, setBrightnessNotes] = useState<String[]>([]);

  const [extremlyBright, setExtremlyBright] = useState<String[]>([]);
  const [veryBright, setVeryBright] = useState<String[]>([]);
  const [bright, setBright] = useState<String[]>([]);
  const [dark, setDark] = useState<String[]>([]);
  const [veryDark, setVeryDark] = useState<String[]>([]);
  const [extremlyDark, setExtremlyDark] = useState<String[]>([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const response = await fetch("http://192.168.0.205:8080/getWeatherData");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: WeatherData[] = await response.json();

      setFetchedDatas(data);

    };
    fetchWeatherData();

  }, [])

  useEffect(() => {
    var fetchedTemperatureValues: number[] = [];
    var fetchedBrightnessValues: number[] = [];
    var fetchedDateTimes: String[] = [];
    var fetchedBrightnessNotes: String[] = [];


    fetchedDatas.forEach((fetchedWeatherData: WeatherData) => { fetchedTemperatureValues.push(fetchedWeatherData.temperature), fetchedDateTimes.push(fetchedWeatherData.dateTime), fetchedBrightnessValues.push(fetchedWeatherData.brightnessValue), fetchedBrightnessNotes.push(fetchedWeatherData.brightnessNote) });

    setTemperatures(fetchedTemperatureValues);
    setBrightnessValues(fetchedBrightnessValues);
    setDateTime(fetchedDateTimes);
    setBrightnessNotes(fetchedBrightnessNotes);




  }, [fetchedDatas]);

  useEffect(() => {
    var mappedExtremlyBright: String[] = [];
    var mappedVeryBright: String[] = [];
    var mappedBright: String[] = [];
    var mappedDark: String[] = [];
    var mappedVeryDark: String[] = [];
    var mappedExtremlyDark: String[] = [];

    brightnessNotes.forEach((brightnessNote: String) => {
      if (brightnessNote == "It's extermly bright") { mappedExtremlyBright.push(brightnessNote) }
      else if (brightnessNote == "It's very bright") { mappedVeryBright.push(brightnessNote) }
      else if (brightnessNote == "It's bright") { mappedBright.push(brightnessNote) }
      else if (brightnessNote == "It's dark") { mappedDark.push(brightnessNote) }
      else if (brightnessNote == "It's very bright") { mappedVeryDark.push(brightnessNote) }
      else if (brightnessNote == "It's extermly dark") { mappedExtremlyDark.push(brightnessNote) }
    });

    setExtremlyBright(mappedExtremlyBright);
    setVeryBright(mappedVeryBright);
    setBright(mappedBright);
    setDark(mappedDark);
    setVeryDark(mappedVeryDark);
    setExtremlyDark(mappedExtremlyDark);

  }, [brightnessNotes])


  return (

    <div className="container">

      <h1>React charts examples</h1>
      <div className="graph-container">
        <BrightnessAndTempLines propDateTime={dateTimes} propBrightnessValues={brightnessValues} propTemperatures={temperatures} />
      </div>
      <div className="graph-container">
        <BrightnessNoteBars propExtremlyBright={extremlyBright} propVeryBright={veryBright} propBright={bright} propDark={dark} propVeryDark={veryDark} propExtremlyDark={extremlyDark} />
      </div>
    </div>

  )
}

export default App
