import Image from "next/image";
import React from "react";

const TopPage = () => {
  return (
    <div className="w-5/6 bg-sky-100 rounded-xl">
      <div className="flex items-center space-x-4 p-4 gap-10">
        <div className="rounded-full bg-white w-1/2 h-1/2">
          <Image
            src="/next.svg"
            alt="Profile"
            width={200} // 必須: 画像の幅を指定
            height={200} // 必須: 画像の高さを指定
          />
        </div>

        <div className="space-y-2 ">
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
