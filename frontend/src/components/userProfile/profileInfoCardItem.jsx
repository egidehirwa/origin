import {
  /* AcademicCapIcon, */
  BriefcaseIcon,
  /* PuzzlePieceIcon, */
} from "@heroicons/react/24/solid";

function ProfileInfoCardItem() {
  return (
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
  );
}

export default ProfileInfoCardItem;
