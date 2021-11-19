import dayjs from "dayjs";
import React from "react";

const days = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Vienes",
    "Sábado",
];

const JournalEntry = ({ id, date, title, body, url }) => {
    const noteDate = dayjs(date);

    console.log(noteDate);
    return (
        <div className="journal__entry pointer">
            {url && ( //sólo si hay url muestra la imagen
                <div
                    className="journal__entry-picture"
                    style={{
                        backgroundImage: `url(${url})`,
                        backgroundSize: "cover",
                    }}
                ></div>
            )}

            <div className="journal__entry-body">
                <p className="journal__entry-title">{title}</p>
                <p className="journal__entry-content">{body}</p>
            </div>

            <div className="journal__entry-date-box">
                <span>{days[noteDate.get("d")]}</span>
                <span>{noteDate.get("D")}</span>
            </div>
        </div>
    );
};

export default JournalEntry;
//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTph115OC4HO49qL9MX3ddxT8hhtKKgzwoHJQ&usqp=CAU
