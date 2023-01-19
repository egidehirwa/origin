import React from "react";

function ProfileHeader() {
  return (
    <div className=" max-w-sm rounded overflow-hidden shadow-lg">
      <img className="" src="images/line_pic.png" alt="cream_line" />

      <div className="px-6 py-4">
        <div className="mainHeader">Charlotte Chocolat</div>

        <p className="textAreaWhite" text-white>
          Bruxelles
        </p>
      </div>
    </div>
  );
}

export default ProfileHeader;
