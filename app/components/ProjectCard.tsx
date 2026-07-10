import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

type Props = {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl?: string;
  previewUrl?: string;
};

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
}: Props) => {
  return (
    <div className="bg-[#2a2c3a] mx-auto w-[95%] overflow-hidden flex flex-col h-full group">
      {/* Top Header: Title and Category */}
      <div className="flex justify-between items-start px-6 pt-6 pb-4">
        <h3 className="text-white text-2xl font-bold">{title}</h3>
        <p className="text-[#a1a1aa] text-xs font-semibold tracking-wide uppercase mt-1">
          {description.split(" ")[0]}, {description.split(" ")[1]}
        </p>
      </div>
      
      {/* Bottom Image Area */}
      <div className="relative w-full aspect-[4/3] mt-auto">
        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
          <div
            className="w-full h-full bg-cover bg-top"
            style={{ backgroundImage: `url(${imgUrl})` }}
          />
        </div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-[#0a0a0a]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {gitUrl && (
            <Link
              href={gitUrl}
              aria-label={`View source for ${title}`}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center backdrop-blur-sm transition-colors"
            >
              <CodeBracketIcon className="w-6 h-6 text-white" />
            </Link>
          )}
          {previewUrl && (
            <Link
              href={previewUrl}
              aria-label={`View live preview of ${title}`}
              className="w-12 h-12 rounded-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center backdrop-blur-sm transition-colors"
            >
              <EyeIcon className="w-6 h-6 text-white" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
