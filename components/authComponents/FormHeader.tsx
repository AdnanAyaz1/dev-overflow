import Image from "next/image";
import React from "react";

const FormHeader = ({ heading }: { heading: string }) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="h2-bold text-dark100_light900">{heading}</h2>
        <p className="paragraph-regular text-dark100_light900 mt-[9px]">
          To get your queries answered
        </p>
      </div>
      <Image
        src={"/images/site-logo.svg"}
        alt="logo"
        width={50}
        height={50}
        className="size-[50px]"
      />
    </div>
  );
};

export default FormHeader;
