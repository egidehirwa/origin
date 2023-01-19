import {
  AcademicCapIcon,
  BriefcaseIcon,
  GiftIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/solid";

const ProfilePage = () => {
  return (
    <div className=" container bg-greenish h-full px-4 space-y-12 py-12">
      {/* Profile Intro Wrapper */}
      {/* Header Wrapper */}
      <div className="space-y-12 bg-lightcream p-8 rounded-lg">
        <img src="src/assets/Charlotte-chocolat-profile.png" alt="profile" />
        <div>
          <h1 className="text-black-900 text-xl font-bold">
            Charlotte Chocolat
          </h1>
          <p className="text-black-200">Bruxelles</p>
        </div>
        {/* Details Wrapper */}
        <div className="flex flex-row gap-6 justify-between px-4">
          <div className="text-center px-4 w-1/3 relative">
            <p className="text-black-600">Age</p>
            <p className="text-black-200 text-[3rem]">27</p>
            <div className="absolute top-1/4 right-0 h-3/4 my-auto w-[0.05rem] bg-black "></div>
          </div>
          <div className="relative text-center px-4 w-1/3">
            <p className="text-black-600">Relations</p>
            <p className="text-black-200 text-[3rem]">10</p>
            <div className="absolute top-1/4 right-0 h-3/4 my-auto w-[0.05rem] bg-black "></div>
          </div>
          <div className="text-center px-4">
            <p className="text-black-600">Pictures</p>
            <p className="text-black-200 text-[3rem]">8</p>
          </div>
        </div>
        {/* Description Wrapper */}
        <p className="p-3 border-2 rounded-md border-creemish text-gray-700">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          quae? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Voluptas, quae?
        </p>
      </div>

      {/* Informations Section */}
      <div className="space-y-4 bg-white text-gray-900 rounded-lg">
        <div className="bg-lightcream py-6 px-8 overflow-hidden rounded-lg">
          <h2 className="text-xl font-bold">Informations</h2>
        </div>

        {/* informations wrapper */}
        <div className="space-y-8 p-8">
          {/* item wrapper 1 */}
          <div className="flex flex-row items-center">
            {/* icon wrapper */}
            <div className="w-1/6">
              <BriefcaseIcon className="h-10 w-10 " />
            </div>
            {/* details wrapper */}
            <div className="w-5/6">
              <p className="font-bold">Professional Experience</p>
              <p>Info to be added later</p>
            </div>
          </div>

          {/* item wrapper 2 */}
          <div className="flex flex-row">
            {/* icon wrapper */}
            <div className="w-1/6">
              <AcademicCapIcon className="h-10 w-10" />
            </div>
            {/* details wrapper */}
            <div className="w-5/6">
              <p className="font-bold">Education</p>
              <p>Info to be added later</p>
            </div>
          </div>

          {/* item wrapper 3 */}
          <div className="flex flex-row">
            {/* icon wrapper */}
            <div className="w-1/6">
              <PuzzlePieceIcon className="h-10 w-10" />
            </div>
            {/* details wrapper */}
            <div className="w-5/6">
              <p className="font-bold">Hobbies</p>
              <p>Info to be added later</p>
            </div>
          </div>
        </div>
      </div>

      {/* Photos section */}
      <div>
        <div>
          <div className="flex flex-col space-y-6">
            <div className="flex flex-row justify-between">
              <p className="text-lightcream text-xl">Last Photos</p>
              <p className="text-lightcream">See my album</p>
            </div>

            {/* images wrapper */}
            <div className="grid grid-cols-3 gap-4">
              <div className="h-40 bg-lightcream rounded-lg"></div>
              <div className="h-40 bg-lightcream rounded-lg"></div>
              <div className="h-40 bg-lightcream rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming events wrapper*/}
      <div className="bg-creemish p-8 rounded-lg space-y-4">
        <h3 className="font-bold">Upcoming Birthdays</h3>
        <div>
          <div className="bg-white p-4 rounded-lg space-y-2">
            {/* Date wrapper */}
            <div className="flex flex-row items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-greenish"></div>
              <p>January 13th</p>
            </div>
            {/* Name and gift wrapper */}
            <div className="flex flex-row items-end">
              <div className="flex flex-row gap-2 w-4/5">
                <img
                  src="src/assets/Charlotte Chocolat - profile image.jpg"
                  alt=""
                />
                <div>
                  <p className="font-bold">Charlotte Chocolat</p>
                  <p>25 ans</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-1/5">
                <p>Gift Ideas</p>
                <div className="h-10 w-10 bg-creemish rounded-full flex flex-col justify-center items-center">
                  <GiftIcon className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* visit link wrapper */}
            <div className="text-center py-2 bg-lightcream">
              <p>visit Charlotte's profile</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
