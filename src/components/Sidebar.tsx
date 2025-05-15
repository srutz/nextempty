"use client"

import { useAtom } from "@/hooks/Atoms";
import { weatherAtom } from "@/hooks/GlobalStateWithAtoms";
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
    return (
        <motion.div
            initial="closed"
            animate={showSidebar ? 'open' : 'closed'}
            className="bg-green-300 flex flex-col gap-1"
            variants={variants}>
        <div className="flex gap-2 items-center">
            Weather {weather}
        </div>
    </motion.div>
    )
}
