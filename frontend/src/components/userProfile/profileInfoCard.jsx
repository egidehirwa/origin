import ProfileInfoCardItem from "./profileInfoCardItem";

function ProfileInfoCard() {
  return (
    <div className="space-y-4 bg-white text-gray-900 rounded-lg">
      <div className="bg-lightcream py-6 px-8 overflow-hidden rounded-lg">
        <h2 className="text-xl font-bold">Informations</h2>
      </div>

      {/* informations wrapper */}
      <div className="space-y-8 p-8">
        {/* item wrappers */}
        <ProfileInfoCardItem />
        <ProfileInfoCardItem />
        <ProfileInfoCardItem />
        <ProfileInfoCardItem />
      </div>
    </div>
  );
}

export default ProfileInfoCard;
