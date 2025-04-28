import React from "react";
import Image from "next/image";

const CustomCard = ({
  title,
  subtitle,
  description,
  tags,
  image,
}: {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string;
}) => {
  return (
    <div className="flex flex-col gap-4 relative overflow-hidden p-4 rounded-lg card-border-base">
      <div className="h-56 sm:h-64 md:h-72 w-full bg-gray-900 rounded-lg relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-top rounded-lg"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        <div className="flex flex-col gap-2 sm:gap-3">
          <p className="text-xl sm:text-2xl font-poppins">{title}</p>
          <p className="text-sm text-gray-400">{subtitle}</p>
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {tags.map((tag) => (
              <div
                key={tag}
                className="bg-gray-800 rounded-2xl p-1 sm:p-1.5 px-2 sm:px-3 w-fit text-xs sm:text-sm text-center flex items-center justify-center"
              >
                <p className="text-xs sm:text-sm text-gray-300 line-clamp-1">
                  {tag}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-3 sm:mt-0">
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
