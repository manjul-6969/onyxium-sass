import React from "react";

type Props = {
  profilePic: string;
  about: string;
  location: string;
};

const BotInfo: React.FC<Props> = ({ profilePic, about, location }) => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg">
      <div className="flex items-center">
        <img src={profilePic} alt="Profile Pic" className="w-12 h-12 rounded-full mr-4" />
        <div>
          <p className="text-gray-800 font-bold">Stella Bot</p>
          <p className="text-sm text-gray-600">Location: {location}</p>
        </div>
      </div>
      <p className="text-gray-700 mt-2">{about}</p>
    </div>
  );
};

export default BotInfo;
