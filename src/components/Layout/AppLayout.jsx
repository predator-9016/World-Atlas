
import { Outlet } from "react-router-dom"

import { Footers } from "../UI/Footer"
import { Headers } from "../UI/Header"

export const AppLayout = () => {
    return(
        <>
            <Headers/>
            <Outlet/> {/* This is where the child components will be rendered */}
            <Footers/>
        </>
    )
}