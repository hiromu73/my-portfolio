import React from "react";
import Image from "next/image";

type ProtfoliolistProps = {
  src: string;
  title: string;
  stack: string[];
};

export const Protfoliolist = ({ src, title, stack }: ProtfoliolistProps) => {
  return (
    <>
      <div className="">
        <Image src={src} alt="Profile" width={200} height={100} className="" />
      </div>
      <div className="space-y-2 ">
        <h1 className="font-bold text-2xl">{title}</h1>
        <ul>
          <li className="mb-3">Frontend: {stack[0]} </li>
          <li className="mb-3">Backend:{stack[1]}</li>
          {stack.length > 2 && <li className="mb-3">Other: {stack[2]}</li>}
        </ul>
      </div>
    </>
  );
};
