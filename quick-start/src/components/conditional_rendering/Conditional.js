import AdminPanel from "./AdminPanel";
import LoginForm from "./LoginForm";

export default function Conditional() {
    const isLoggedIn = false;

    let content = null;

    if (isLoggedIn) {
        content = <AdminPanel />
    } else {
        content = <LoginForm />
    }

    return (
        <div>
            {content}
            {isLoggedIn && <AdminPanel />}
            {
                isLoggedIn ? (
                    <AdminPanel />
                ) : (
                    <LoginForm />
                )
            }
        </div>
    )
};