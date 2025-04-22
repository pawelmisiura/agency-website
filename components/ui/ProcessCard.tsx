import React from "react";

const CustomCard = ({
  title,
  subtitle,
  description,
  tags,
}: {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}) => {
  return (
    <div className="flex flex-col gap-4 relative overflow-hidden p-4 rounded-lg card-border-base ">
      <div className="h-72 w-full bg-gray-900 rounded-lg"></div>
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-2xl font-poppins">{title}</p>
          <p className="text-sm text-gray-400">{subtitle}</p>
          <div className="flex flex-row gap-2">
            {tags.map((tag) => (
              <div
                key={tag}
                className="bg-gray-800 rounded-2xl px-3 py-2 w-fit text-sm text-center flex items-center justify-center"
              >
                <p className="text-sm text-gray-400">{tag}</p>
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
