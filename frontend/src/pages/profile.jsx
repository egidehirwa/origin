const ProfilePage = () => {
  return (
    <div className=" container bg-greenish h-full px-4 space-y-12 py-12">
      {/* Profile Intro Wrapper */}
      {/* Header Wrapper */}
      <div className="space-y-12 bg-lightcream p-4 rounded-lg">
        <img src="src/assets/Charlotte-chocolat-profile.png" alt="profile" />
        <div>
          <h1 className="text-black-900 text-xl font-bold">
            Charlotte Chocolat
          </h1>
          <p className="text-black-200">Bruxelles</p>
        </div>
        {/* Details Wrapper */}
        <div className="flex flex-row gap-6 justify-between px-6">
          <div className="border-r-[1px] border-gray-400 px-4 justify-center w-1/3 align-center">
            <p className="text-black-600">Age</p>
            <p className="text-black-200 text-[3rem]">27</p>
          </div>
          <div className="border-r-[1px] border-gray-400 px-4 justify-center w-1/3 align-center">
            <p className="text-black-600">Relations</p>
            <p className="text-black-200 text-[3rem]">10</p>
          </div>
          <div>
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

      {/* Photos section */}
      <div>
        <div className="flex flex-col space-y-6">
          <div className="flex flex-row justify-between">
            <p className="text-lightcream text-xl">Last Photos</p>
            <p className="text-lightcream">See my album</p>
          </div>

          {/* images wrapper */}
          <div className="flex flex-row gap-4">
            <div className="h-40 bg-lightcream rounded-lg w-1/3"></div>
            <div className="h-40 bg-lightcream rounded-lg w-1/3"></div>
            <div className="h-40 bg-lightcream rounded-lg w-1/3"></div>
          </div>
        </div>
      </div>

      {/* Informations Section */}
      <div className="space-y-4">
        <h2 className="text-xl text-lightcream">Informations</h2>

        {/* informations wrapper */}
        <div className="space-y-8">
          {/* item wrapper 1 */}
          <div className="flex flex-row">
            {/* icon wrapper */}
            <div className="w-1/6">
              <i className="fa-brands fa-pagelines h-10 w-5 text-white"></i>
            </div>
            {/* details wrapper */}
            <div className="w-5/6 text-lightcream">
              <p>Professional Experience</p>
              <p>Info to be added later</p>
            </div>
          </div>

          {/* item wrapper 2 */}
          <div className="flex flex-row">
            {/* icon wrapper */}
            <div className="w-1/6">
              <i className="fa-brands fa-pagelines h-10 w-5 text-white"></i>
            </div>
            {/* details wrapper */}
            <div className="w-5/6 text-lightcream">
              <p>Education</p>
              <p>Info to be added later</p>
            </div>
          </div>

          {/* item wrapper 3 */}
          <div className="flex flex-row">
            {/* icon wrapper */}
            <div className="w-1/6">
              <i className="fa-brands fa-pagelines h-10 w-5 text-white"></i>
            </div>
            {/* details wrapper */}
            <div className="w-5/6 text-lightcream">
              <p>Hobbies</p>
              <p>Info to be added later</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
