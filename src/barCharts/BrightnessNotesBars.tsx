import { Bar } from "react-chartjs-2"

interface BrightnessNotesProps {
    propExtremlyBright: String[];
    propVeryBright: String[];
    propBright: String[];
    propDark: String[];
    propVeryDark: String[];
    propExtremlyDark: String[];

}

const BrightnessNoteBars = ({ propExtremlyBright, propVeryBright, propBright, propDark, propVeryDark, propExtremlyDark }: BrightnessNotesProps) => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
            },
            title: {
                display: true,
                text: "Brightness notes",
            },
        },
    }

    const labels = ["It's extermly bright", "It's very bright", "It's bright", "It's dark", "It's very dark", "It's extremly dark"]
    const data1 = [propExtremlyBright.length, propVeryBright.length, propBright.length, propDark.length, propVeryDark.length, propExtremlyDark.length]


    const data = {
        labels,
        datasets: [
            {
                label: "Brightness notes",
                data: data1,
                backgroundColor: "rgba(75, 192, 192)",
                borderColor: "rgb(75, 192, 192)",
                borderWidth: 1,
            },
        ],
    }

    return <Bar options={options} data={data} />
}

export default BrightnessNoteBars;
