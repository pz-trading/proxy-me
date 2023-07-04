import React from "react";
import { Outlet } from "react-router-dom";
import ButtonAppBar from "../components/app_bar";

export default function Layout() {
    return (
        <>
            <ButtonAppBar />
            <Outlet />
        </>
    )
}