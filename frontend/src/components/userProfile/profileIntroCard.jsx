function ProfileIntroCard() {
  return (
    <div className="space-y-8 bg-lightcream p-8 rounded-lg relative overflow-hidden">
      <div className="absolute top-0 right-0 z-10 w-full h-36 bg-creemish"></div>
      <img
        className="w-28 h-28 rounded-full shadow-lg relative z-20 border-4 border-lightcream"
        src="https://i.ibb.co/KW9tPLG/Charlotte-chocolat-profile.png"
        alt="profile"
      />
      <div>
        <h1 className="text-gray-900 text-xl font-bold">Charlotte Chocolat</h1>
        <p className="text-gray-700">Bruxelles</p>
      </div>
      {/* Details Wrapper */}
      <div className="flex flex-row gap-6 justify-between px-4">
        <div className="text-center px-4 w-1/3 relative">
          <p className="text-gray-600">Age</p>
          <p className="text-gray-900 text-[3rem]">28</p>
          <div className="absolute top-1/4 right-0 h-3/4 my-auto w-[0.05rem] bg-gray-700 "></div>
        </div>
        <div className="relative text-center px-4 w-1/3">
          <p className="text-gray-600">Relations</p>
          <p className="text-gray-900 text-[3rem]">10</p>
          <div className="absolute top-1/4 right-0 h-3/4 my-auto w-[0.05rem] bg-gray-700 "></div>
        </div>
        <div className="text-center px-4">
          <p className="text-gray-600">Pictures</p>
          <p className="text-gray-900 text-[3rem]">8</p>
        </div>
      </div>
      {/* Description Wrapper */}
      <p className="p-3 border-4 border-gradient gradient-red rounded-md text-gray-900">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
        quae? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Voluptas, quae?
      </p>
    </div>
  );
}

export default ProfileIntroCard;
