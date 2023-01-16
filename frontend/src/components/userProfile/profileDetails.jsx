function ProfileDetails() {
  return (
    <div className="container flex flex-row justify-center mx-auto gap-10 bg-greenish py-3">
      <div className="flex flex-col items-center">
        <p className="age text-lightcream font-bold">Age</p>
        <p className="text-lightcream">32</p>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-lightcream font-bold">Relations</p>
        <p className="text-lightcream">178</p>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-lightcream font-bold">Pictures</p>
        <p className="text-lightcream">8</p>
      </div>
    </div>
  );
}

export default ProfileDetails;
