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
    <div className="flex flex-col gap-4 relative overflow-hidden p-4 rounded-lg card-border-base ">
      <div className="h-72 w-full bg-gray-900 rounded-lg relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-top rounded-lg"
        />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col gap-3">
          <p className="text-2xl font-poppins">{title}</p>
          <p className="text-sm text-gray-400">{subtitle}</p>
          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <div
                key={tag}
                className="bg-gray-800 rounded-2xl p-1.5 px-3 w-fit text-sm text-center flex items-center justify-center"
              >
                <p className="text-sm text-gray-300 line-clamp-1">{tag}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
