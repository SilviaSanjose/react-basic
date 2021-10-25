//información del usuario
import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const HomeScreen = () => {
    const { user } = useContext(UserContext);
    console.log(user);

    return (
        <div>
            <h1>HomeScreen</h1>
            <pre>{JSON.stringify(user, null, 3)}</pre>
            <p>Usuario: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default HomeScreen;
