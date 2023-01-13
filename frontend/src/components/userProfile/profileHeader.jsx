import React from "react";

function ProfileHeader({ title, imageUrl, body }) {
    return (
        <div className=" max-w-sm rounded overflow-hidden shadow-lg">
        

            <img className="" src="images/line_pic.png" alt="cream_line" />

            <div className="px-6 py-4">
                <div className="font-primaryFont text-xl text-lighcream">Charlotte Chocolat</div>

                <p className="font-secondaryFont text-white" text-white>
                    Bruxelles
                </p>
            </div>
        </div>
    );
}

export default ProfileHeader;
