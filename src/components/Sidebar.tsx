"use client"

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
    return (
        <motion.div
            initial="closed"
            animate={showSidebar ? 'open' : 'closed'}
            className="bg-green-300 flex flex-col gap-1"
            variants={variants}>
    </motion.div>
    )
}
