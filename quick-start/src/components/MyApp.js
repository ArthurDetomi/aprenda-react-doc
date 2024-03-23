import "./MyApp.css"

import AboutPage from "./addingStyles/AboutPage";
import Profile from "./display_data/Profile";
import MyButton from "./MyButton";
import Conditional from "./conditional_rendering/Conditional";

const MyApp = () => {
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
            <Conditional/>
        </div>
    )
}

export default MyApp;