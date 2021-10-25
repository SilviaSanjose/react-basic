import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const LoginScreen = () => {
    const { setUser } = useContext(UserContext);

    return (
        <div>
            <h1>LoginScreen</h1>

            <button
                className="btn btn-primary"
                onClick={() =>
                    setUser({
                        id: 123,
                        name: "Silvia",
                        email: "ss@gmail.com",
                    })
                }
            >
                Login
            </button>
        </div>
    );
};

export default LoginScreen;
