import React from "react";
import Calendar from "./Calendar";
import DateList from "./DateList";

//munis = i check if the fonts are working
function EventList() {
    return (
        <div>
            <h1 className="text-xl font-primaryFont">primary font is working</h1>
            <p className="font-secondaryFont">secondary font is working</p>
            <Calendar />
            <DateList />
        </div>
    );
}

export default EventList;
//munis = i check if the fonts are working
