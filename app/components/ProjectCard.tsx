import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { Url } from "url";

type Props = {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
};

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
}: Props) => {
  return (
    <div className="cursor-pointer hover:scale-105 transition-transform duration-300">
      <div
        className="h-52 md:h-72 rounded-t-xl relative group bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <div className="flex items-center justify-center absolute inset-0 bg-[#181818] opacity-0 group-hover:opacity-80 transition-opacity duration-500 rounded-t-xl">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] mt-3 py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
