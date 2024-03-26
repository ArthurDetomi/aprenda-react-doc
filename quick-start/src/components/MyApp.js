import "./MyApp.css"

import { useState } from 'react'

import AboutPage from "./addingStyles/AboutPage";
import Profile from "./display_data/Profile";
import MyButton from "./MyButton";
import Conditional from "./conditional_rendering/Conditional";
import ShoppingList from "./rendering_lists/ShoppingList";
import Button from "./responding_events/Button";
import ButtonUpdate from "./updating_screen/ButtonUpdate";
import ButtonTogether from "./updating_all_buttons_together/ButtonTogether";



const MyApp = () => {
    const [count, setCount] = useState(0);
    
    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Welcome to my app</h1>
            <h1 className="titulo">Introdução aos componentes</h1>
            <MyButton />
            <h1 className="titulo">Adicionando estilos</h1>
            <AboutPage />
            <h1 className="titulo">Mostrando dados</h1>
            <Profile />
            <h1 className="titulo">Renderização condicional</h1>
            <Conditional />
            <h1 className="titulo">Renderizando listas</h1>
            <ShoppingList />
            <h1 className="titulo">Respondendo eventos</h1>
            <Button />
            <h1 className="titulo">Atualizando a tela</h1>
            <ButtonUpdate />
            <h1 className="titulo">Contagem separada dos botões</h1>
            <ButtonUpdate />
            <ButtonUpdate />
            <h1 className="titulo">Compartilhando dados entre os componentes</h1>
            <ButtonTogether count={count} onClick={handleClick} /> <br/>
            <ButtonTogether count={count} onClick={handleClick} />
        </div>
    )
}

export default MyApp;