import React from "react";

const Profile = () => {
  return (
    <div className="text-center w-5/6">
      <h2 className="font-bold text-2xl mb-5">Profile</h2>
      <div className="h-full bg-green-100 rounded-xl pt-3">
        <ul className=" mt-5 pb-5">
          <li className="mb-3">4年生大学を卒業後、広告代理店等の営業職を6年間勤務</li>
          <li className="mb-3">28歳の時に友人の影響を受け、独学の地にSESに転職</li>
          <li className="mb-3">32歳現在、社員200名程の受託会社に勤務</li>
        </ul>
        <h5>Technology Stacks</h5>
        <ul className=" mt-5 pb-5 ">
          <li className="mb-3">frontend: Javascript・Typescript・Next.js(React), </li>
          <li className="mb-3">backend: C#・Python(FastAPI)</li>
        </ul>
        <h5>Personal Development</h5>
        <ul className=" mt-5 pb-5 ">
          <li className="mb-3">・Flutter(Dart)にてモバイルアプリ開発 </li>
          <li className="mb-3">・Python(Langchain), Difyによる生成AI </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
