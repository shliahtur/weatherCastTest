import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const WeatherChart = ({ data }) => {
    if(!data) return null
    return (
            <LineChart width={1000} height={300} data={data}>
                <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
    )
}

export default WeatherChart