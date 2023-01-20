import { GiftIcon } from "@heroicons/react/24/solid";

function ProfileEventCard() {
  return (
    <div>
      <div className="bg-white p-4 rounded-t-lg space-y-2">
        {/* Date wrapper */}
        <div className="flex flex-row items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-greenish"></div>
          <p>January 13th</p>
        </div>
        {/* Name and gift wrapper */}
        <div className="flex flex-row items-end">
          <div className="flex flex-row gap-4 w-4/5">
            <img
              className="w-14 h-14 rounded-full shadow-lg"
              src="https://i.ibb.co/KW9tPLG/Charlotte-chocolat-profile.png"
              alt=""
            />
            <div>
              <p className="font-bold">Charlotte Chocolat</p>
              <p>25 ans</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center w-1/5">
            <p className="text-sm">Gift Ideas</p>
            <div className="h-10 w-10 bg-creemish rounded-full flex flex-col justify-center items-center shadow-md">
              <GiftIcon className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* visit link wrapper */}
        <div className="text-center py-2 bg-lightcream rounded-b-lg">
          <p>visit Charlotte's profile</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileEventCard;
