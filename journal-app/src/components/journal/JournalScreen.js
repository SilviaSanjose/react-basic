import React from "react";
import NoteScreen from "./notes/NoteScreen";
import NothingSelected from "./NothingSelected";
import Sidebar from "./Sidebar";

const JournalScreen = () => {
    const notes = false;
    return (
        <div className="journal__main-content">
            <Sidebar />
            <main>
                {notes && <NothingSelected />}

                <NoteScreen />
            </main>
        </div>
    );
};

export default JournalScreen;
