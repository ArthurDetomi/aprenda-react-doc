import Ninja from "../../assets/img.jpg"

const user = {
    name: "Ninja vermelho",
    imageSize: 90
}

const Profile = () => {
    return (
        <>
            <h3>{user.name}</h3>
            <img
                className="ninja_vermelho"
                src={Ninja}
                alt="Imagem do ninja vermelho"
                style={
                    {
                        width: user.imageSize,
                        height: user.imageSize
                    }
                }
            />
        </>
    );
}

export default Profile;