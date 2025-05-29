import React from "react";
import {
  Cog6ToothIcon,
  BellIcon,
  LockClosedIcon,
  UserIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const settings = [
  {
    title: "Account",
    description: "Manage your profile, email & password",
    icon: <UserIcon className="w-6 h-6 text-indigo-500" />,
  },
  {
    title: "Notifications",
    description: "Customize alerts & push notifications",
    icon: <BellIcon className="w-6 h-6 text-yellow-400" />,
  },
  {
    title: "Privacy & Security",
    description: "Control your privacy preferences",
    icon: <LockClosedIcon className="w-6 h-6 text-red-400" />,
  },
  {
    title: "General",
    description: "App language, timezone and preferences",
    icon: <GlobeAltIcon className="w-6 h-6 text-green-400" />,
  },
  {
    title: "Advanced",
    description: "Developer tools and experimental settings",
    icon: <Cog6ToothIcon className="w-6 h-6 text-purple-500" />,
  },
];

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
      <p>© {new Date().getFullYear()} AmanKart. All rights reserved.</p>
      <p className="mt-1">Designed with ❤️ by Aman.</p>
    </footer>
  );
};

const Settings = () => {
  return (
    <div className="min-h-screen bg-gray-900 px-4 py-8 text-white flex flex-col">
      <h1 className="text-3xl font-bold mb-8 text-center">Settings</h1>

      <div className="max-w-md mx-auto space-y-4 flex-grow">
        {settings.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 hover:bg-gray-700 transition p-4 rounded-lg flex items-start gap-4 shadow-md cursor-pointer"
          >
            <div className="mt-1">{item.icon}</div>
            <div>
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Settings;

//!------------------------
// import React from 'react'

// const Settings = () => {
//   return (
//    <div>
//       <h1 className="text-white">Settings</h1>
//     </div>
//   )
// }

// export default Settings
