"use client"

import { useAtom } from "@/hooks/Atoms";
import { temperatureAtom, weatherAtom } from "@/hooks/GlobalStateWithAtoms";
import { useGuiStore } from "@/hooks/GuiStateStore";
import { motion } from "motion/react";


const variants = {
    open: {
        width: "260px",
        transition: {
            type: 'spring',
            stiffness: 880,
            damping: 50,
            duration: 0.2,
        }
    },
    closed: {
        width: "0px",
        transition: {
            type: 'spring',
            stiffness: 800,
            damping: 40,
            duration: 0.2,
        }
    }
}

export function Sidebar() {
    const { showSidebar } = useGuiStore()
    const [ weather ] = useAtom(weatherAtom)
    const [ temperature ] = useAtom(temperatureAtom)
    return (
        <motion.div
            initial="closed"
            animate={showSidebar ? 'open' : 'closed'}
            className="bg-slate-300 flex flex-col gap-1"
            variants={variants}>
        <div className="min-w-[260px] h-1 p-8 grow flex flex-col gap-2 justify-center">
            <div className="bg-white p-4 rounded-xl shadow-md flex justify-center items-center">
                Weather is {weather}
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md flex-col justify-center items-center">
                Temperatur
                <div className="text-4xl font-bold">{temperature}</div>
            </div>
        </div>
    </motion.div>
    )
}
