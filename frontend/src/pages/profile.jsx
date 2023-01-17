const ProfilePage = () => {
  return (
    <div className="bg-greenish h-auto w-full px-4 space-y-2">
      {/* Header Wrapper */}
      <div>
        <img
          src="src/assets/Charlotte Chocolat - profile image.jpg"
          alt="profile"
        />
        <div>
          <h1 className="text-lightcream text-xl">Charlotte Chocolat</h1>
          <p className="text-white">Bruxelles</p>
        </div>
        {/* Details Wrapper */}
        <div className="flex flex-row gap-6 justify-center">
          <div>
            <p className="text-lightcream">Age</p>
            <p className="text-creemish text-[3rem]">27</p>
          </div>
          <div>
            <p className="text-lightcream">Age</p>
            <p className="text-creemish text-[3rem]">27</p>
          </div>
          <div>
            <p className="text-lightcream">Age</p>
            <p className="text-creemish text-[3rem]">27</p>
          </div>
        </div>
        {/* Description Wrapper */}
        <p className="p-3 border-2 rounded-md border-lightcream text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          quae?
        </p>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default ProfilePage;
