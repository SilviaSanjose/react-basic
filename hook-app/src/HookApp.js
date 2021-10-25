import React from "react";
import MultipleCustomHooks from "./components/examples/MultipleCustomHooks";
import CallbackHook from "./components/memos/CallbackHook";
import MemoHook from "./components/memos/MemoHook";
import Memorize from "./components/memos/Memorize";
import { Padre } from "./components/tarea-memo/Padre";
import MainApp from "./components/useContext/MainApp";
import FormWithCustomHook from "./components/useEfect/FormWithCustomHook";
import SimpleForm from "./components/useEfect/SimpleForm";
import Layout from "./components/useLayoutEffect/Layout";
import TodoApp from "./components/useReducer/TodoApp";
import FocusScreen from "./components/useRef/FocusScreen";
import RealExampleRef from "./components/useRef/RealExampleRef";
import CounterApp from "./components/useState/CounterApp";
import CounterWithCustomHook from "./components/useState/CounterWithCustomHook";

const HookApp = () => {
    return (
        <div className="container">
            <CounterApp />
            <CounterWithCustomHook />

            <SimpleForm />
            <FormWithCustomHook />

            <MultipleCustomHooks />

            <FocusScreen />
            <RealExampleRef />

            <Layout />

            <Memorize />
            <MemoHook />
            <CallbackHook />

            <Padre />

            <TodoApp />

            <MainApp />
        </div>
    );
};

export default HookApp;
