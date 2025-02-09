import Image from "next/image";
import React from "react";

const ImageButton = ({ url }: { url: string }) => {
  return (
    <div>
      <Image
        width={500}
        height={500}
        loading="lazy"
        src={url}
        alt="image"
        className="w-5 h-5 object-cover"
      />
    </div>
  );
};

export default ImageButton;
