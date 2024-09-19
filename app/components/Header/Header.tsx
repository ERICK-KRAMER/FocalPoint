"use client";

import { Logo } from "../logo";
import style from "./header.module.scss";
import { useFormattedDate } from "@/app/hooks/Date";

const Header = () => {
    const data = useFormattedDate();

    return (
        <header className={style.header}>
            <Logo />
            <h1>Bem-vindo de volta, Marcus</h1>
            <p>{data}</p>
        </header>
    )
}

export { Header };