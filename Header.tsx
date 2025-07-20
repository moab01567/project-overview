import css from "./Header.module.css"


interface Props{
    headerTile:string
}

export function Header({headerTile}:Props){
    return <header className={css.header}>
        <h1>
            {headerTile}
        </h1>
    </header>
}