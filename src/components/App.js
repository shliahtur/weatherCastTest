import { useSelector } from 'react-redux';
import SearchForm from './SearchForm';
import WeatherChart from './WeatherChart'
import { convertToDate } from '../services/unixTimestampConvertor';
import '../styles/App.scss';

const App = () => {
    const { weatherData, error, loading } = useSelector(state => state.weatherCast);

    const getConvertedData = (data) => {
        const list = data.list
        if (!list) return null
        const result = list.map(el => {
            return {
                name: convertToDate(el.dt),
                temperature: el.main.temp
            }
        })
        return result
    }

    const chartData = getConvertedData(weatherData)

    return (
        <div className="wrapper">
            <SearchForm />
            {loading && <div>loading...</div>}
            {
                error || <WeatherChart data={chartData} />
            }
        </div>
    );
}

export default App;
