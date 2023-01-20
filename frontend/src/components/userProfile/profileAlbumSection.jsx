function ProfileAlbumSection() {
  return (
    <div>
      <div>
        <div className="flex flex-col space-y-6">
          <div className="flex flex-row justify-between">
            <p className="text-lightcream text-xl">Last Photos</p>
            <p className="text-lightcream">See my album</p>
          </div>

          {/* images wrapper */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="h-40 bg-lightcream rounded-lg"></div>
            <div className="h-40 bg-lightcream rounded-lg"></div>
            <div className="h-40 bg-lightcream rounded-lg"></div>
            <div className="h-40 bg-lightcream rounded-lg"></div>
            <div className="h-40 bg-lightcream rounded-lg"></div>
            <div className="h-40 bg-lightcream rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileAlbumSection;
