import React from "react";

const JournalEntry = ({ value }) => {
    return (
        <div className="journal__entry pointer">
            <div
                className="journal__entry-picture"
                style={{
                    backgroundImage:
                        "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTph115OC4HO49qL9MX3ddxT8hhtKKgzwoHJQ&usqp=CAU)",
                    backgroundSize: "cover",
                }}
            ></div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">Un título</p>
                <p className="journal__entry-content">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <span>24</span>
            </div>
        </div>
    );
};

export default JournalEntry;
