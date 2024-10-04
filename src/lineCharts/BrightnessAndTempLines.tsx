import { Line } from "react-chartjs-2"



interface BrightnessAndTempLinesProps {
    propDateTime: String[];
    propBrightnessValues: number[];
    propTemperatures: number[];
}

const BrightnessAndTempLines = ({ propTemperatures, propDateTime, propBrightnessValues }: BrightnessAndTempLinesProps) => {


    const labels = propDateTime;

    const brightnessValues = propBrightnessValues

    const temperatureValues = propTemperatures

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
            },
            title: {
                display: true,
                text: "Brightness and Temperature over time",
            },
        },
    }


    const data = {
        labels,
        datasets: [
            {
                label: "Brightness",
                data: brightnessValues,
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132)",
            },
            {
                label: "Temperature",
                data: temperatureValues,
                borderColor: "rgb(53, 162, 235)",
                backgroundColor: "rgba(53, 162, 235)",
            },
        ],
    }

    return (
        <>
            {labels.length > 0 && <Line options={options} data={data} />}
        </>
    )
};

export default BrightnessAndTempLines;
