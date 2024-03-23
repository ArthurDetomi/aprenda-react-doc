import AboutPage from "./addingStyles/AboutPage";
import Profile from "./display_data/Profile";
import MyButton from "./MyButton";

const MyApp = () => {
    return (
        <div>
            <h1>Welcome to my app</h1>
            <h2>Introdução aos componentes</h2>
            <MyButton />
            <h2>Adicionando estilos</h2>
            <AboutPage />
            <h2>Mostrando dados</h2>
            <Profile/>
        </div>
    )
}

export default MyApp;