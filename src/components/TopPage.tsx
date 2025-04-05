"use client";
import Image from "next/image";
import React from "react";

const TopPage = () => {
  return (
    <div className="w-5/6 h-full bg-sky-100 rounded-xl">
      <div className="flex items-center space-x-4 p-4 gap-10 text-center justify-center">
        <div className="rounded-full">
          <Image src="/my_profile2.jpg" alt="Profile2" width={200} height={100} className="rounded-full" />
        </div>

        <div className="space-y-2 ">
          <h1 className="font-bold text-2xl">HIROMU TOJIMA</h1>
          <ul>
            <li>サウナが好き</li>
            <li>開発が好き</li>
            <li>人が好き</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopPage;
