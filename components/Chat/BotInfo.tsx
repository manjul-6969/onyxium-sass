import React from "react";

type Props = {
  profilePic: string;
  about: string;
  location: string;
};

const BotInfo: React.FC<Props> = ({ profilePic, about, location }) => {
  return (
    <div className="rounded-lg bg-gray-200 p-4">
      <div className="flex items-center">
        <img
          src={profilePic}
          alt="Profile Pic"
          className="mr-4 h-12 w-12 rounded-full"
        />
        <div>
          <p className="font-bold text-gray-800">Stella Bot</p>
          <p className="text-sm text-gray-600">Location: {location}</p>
        </div>
      </div>
      <p className="mt-2 text-gray-700">{about}</p>
    </div>
  );
};

export default BotInfo;
