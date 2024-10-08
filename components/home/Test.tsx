import React from "react";
import { podcasts } from "@/data/content/home";
import { Player } from "video-react";
import "video-react/dist/video-react.css";

function Podcasts() {
  return (
    <div className="flex flex-col md:flex-row justify-between relative">
      <h2 className="relative text-3xl w-full text-center md:text-left font-bold md:max-w-lg mb-10 md:mr-10 md:mb-0 md:w-max mr-0 ">
        I got the experience.
        <br />
        Here is my toolbelt for success.
        <img
          className="sqD bottom-[-80px] left-[-50px] lg:bottom-[-50px] lg:left-[-35px] z-[-10]"
          src="/static/doodles/skills/laptop.svg"
        />
        <img
          className="sqD hidden md:block top-[140px] right-0 lg:top-[105px]"
          src="/static/doodles/skills/coding.svg"
        />
        <img
          className="sqD hidden md:block top-[200px] right-[50px] lg:top-[170px] lg:right-[50px]"
          src="/static/doodles/skills/youtube.svg"
        />
        <img
          className="sqD top-[-15px] right-[-15px]"
          src="/static/doodles/skills/fillStar.svg"
        />
      </h2>
      <div className="relative max-w-lg w-full mx-auto md:mx-none grid gap-x-8 gap-y-12 sm:gap-8 md:gap-12 grid-cols-3 sm:grid-cols-6 items-center place-content-center">
        {podcasts.map((item, index) => {
          return (
            <div className="w-full max-w-lg mx-auto flex flex-col items-center">
                <h3 className="text-xl font-semibold mb-4">Episode 1: Introduction to Web Development</h3>
                <Player
                playsInline
                src="https://vimeo.com/your-vimeo-video-id" // Replace with your Vimeo video link
                />
      </div>
          );
        })}
      </div>
    </div>
  );
}

export default Podcasts;