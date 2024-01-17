import React from "react";

function HeroHeader() {
  return (
    <div>
      <div className="relative md:flex md:justify-between">
        <div className="absolute top-24 left-10 bg-orange-300 rounded-tr-2xl rounded-bl-2xl px-2 py-5 space-y-1
            md:left-52 md:top-48
        ">
          <h1 className="font-bold text-xl md:text-3xl">Hi! Welcome to my page</h1>
          <p className="text-xl">I 'm Ali</p>
          <p>I 'm Front-End Developer</p>
        </div>
        <figure className="w-full md:w-10/12 mx-auto md:flex md:justify-end">
          <img
            className="h-screen w-full md:w-8/12 "
            src={require("../img/web2.jpg")}
            alt=""
          />
        </figure>
      </div>
    </div>
  );
}

export default HeroHeader;
