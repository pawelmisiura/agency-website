import React from "react";

const CustomCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col gap-4 relative overflow-hidden p-4 rounded-lg card-border-base ">
      <div className="h-72 w-full bg-gray-900 rounded-lg"></div>
      <h4 className="text-2xl font-poppins">{title}</h4>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
};

export default CustomCard;
