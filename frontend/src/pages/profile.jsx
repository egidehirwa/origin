import ProfileEventCard from "../components/userProfile/profileEventCard";
import ProfileIntroCard from "../components/userProfile/profileIntroCard";
import ProfileInfoCard from "../components/userProfile/profileInfoCard";
import ProfileAlbumSection from "../components/userProfile/profileAlbumSection";

const ProfilePage = () => {
  return (
    <div
      className=" bg-greenish lg:px-4 space-y-12 py-12"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/qBtkHZK/kisspng-tree-of-life-clip-art-tree-vector-png-5aada1b892db02-1-1.png)",
      }}
    >
    <div className="container mx-auto">
      {/* Intro + Info Container */}
      <div className="space-y-12 md:flex md:flex-row md:items-end gap-8">
        {/* Profile Intro Card */}
        <div className="md:w-1/2">
          <ProfileIntroCard />
        </div>

        {/* Informations Section */}
        <div className="md:w-1/2">
          <ProfileInfoCard />
        </div>
      </div>

      {/* Album + Event Container */}
      <div className="space-y-12 md:flex md:flex-row md:items-start gap-8">
        {/* Photo Album section */}
        <div className="md:w-1/2 md:mt-12">
          <ProfileAlbumSection />
        </div>

        {/* Upcoming events wrapper*/}
        <div className="bg-creemish p-8 rounded-lg space-y-4 md:w-1/2">
          <h3 className="text-black font-bold text-lg">Upcoming Birthdays</h3>

          {/* Event card component */}
          <ProfileEventCard />
          <ProfileEventCard />
          <ProfileEventCard />
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProfilePage;
