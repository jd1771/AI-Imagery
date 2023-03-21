import React from "react";
import { AiOutlineCloudDownload } from "react-icons/Ai";
import { BsFillPersonFill } from "react-icons/Bs";
import FileSaver from "file-saver";

const handleImageDownload = (id, link) => {
  FileSaver.saveAs(link, `image-${id}.jpg`);
};

const Card = ({ _id, name, prompt, photo }) => {
  return (
    <div className="shadow-card h over:shadow-cardhover card group relative rounded-xl">
      <img
        className="h-auto w-full rounded-xl object-cover"
        src={photo}
        alt={prompt}
      />

      <div className="absolute bottom-0 left-0 right-0 m-2 hidden max-h-[94.5%] flex-col rounded-md bg-[#10131f] p-4 group-hover:flex">
        <p className="overflow-y-auto text-sm text-white">{prompt}</p>
        <div className="mt-5 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-white">
            {<BsFillPersonFill />}
            {name}
          </div>
          <AiOutlineCloudDownload
            color="white"
            size={30}
            className="cursor-pointer"
            onClick={() => handleImageDownload(_id, photo)}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
