
import { AppType } from "@/Types/App.type";
import Image from "next/image";
import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";

export interface AppCardProps {
  app: AppType;
}

const AppCard = ({ app }: AppCardProps) => {
  return (
    <div className="bg-white p-3 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col gap-3 transition-transform hover:-translate-y-1 duration-300 cursor-pointer">
      {/* Image / Placeholder */}
      <div className="w-full aspect-square bg-gray-200/80 rounded-xl relative overflow-hidden flex items-center justify-center">
        {app?.image ? (
          <Image
            src={app.image}
            alt={app?.title || "app"}
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-gray-400 text-xs text-center px-2">
            Image Placeholder
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 px-1">
        <h3 className="text-[13px] sm:text-sm md:text-[15px] font-semibold text-slate-800 truncate">
          {app?.title || "Forest: Focus For Productivity"}
        </h3>

        {/* Badges */}
        <div className="flex items-center justify-between mt-1">
          {/* Download Badge */}
          <div className="flex items-center gap-1 bg-green-50/80 text-emerald-500 px-2 py-1 rounded text-xs font-semibold">
            <FaDownload className="w-2.5 h-2.5" />
            <span>{app?.downloads || "9M"}</span>
          </div>

          {/* Rating Badge */}
          <div className="flex items-center gap-1 bg-orange-50/80 text-orange-400 px-2 py-1 rounded text-xs font-semibold">
            <FaStar className="w-3 h-3" />
            {/* Displaying average rating or first rating count if available, else 5 */}
            <span>{app?.ratings?.[0]?.count || "5"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
