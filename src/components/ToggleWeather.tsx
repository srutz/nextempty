"use client"

import { useAtom } from "@/hooks/Atoms"
import { temperatureAtom, weatherAtom } from "@/hooks/GlobalStateWithAtoms"

export function ToggleWeather() {
    const [ weather, setWeather ] = useAtom(weatherAtom)
    const [ temperature, setTemperature ] = useAtom(temperatureAtom)

    const getNextWeather = (weather: ReturnType<typeof weatherAtom["get"]>) => {
        switch (weather) {
            case "bad": return "medium"
            case "medium": return "good"
            case "good": return "bad"
        }
    }
    return (
        <div className="flex flex-col gap-2 items-center">
            <div className="flex gap-2 items-center">
                <div>Change weather</div>
                <button
                    className="bg-blue-300 p-2 rounded"
                    onClick={() => setWeather(getNextWeather(weather))}>
                    Toggle Weather
                </button>
            </div>
            <div className="flex gap-2 items-center">
                <div>Change temperatur</div>
                <button
                    className="bg-blue-300 p-2 rounded"
                    onClick={() => setTemperature((prevValue) => prevValue + 1)}>
                    Up
                </button>
                <button
                    className="bg-blue-300 p-2 rounded"
                    onClick={() => setTemperature(temperature - 1)}>
                    Down
                </button>
            </div>
        </div>

    )
}