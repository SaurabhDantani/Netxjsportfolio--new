import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import javascript from "@/public/icons/javascript.svg";
import angular from "../public/icons/angular.svg";
import express from "@/public/icons/express.svg";
import nextjs from "@/public/icons/nextdotjs.svg";
import jsonwebtokens from "@/public/icons/jsonwebtokens.svg";
import nodedotjs from "@/public/icons/nodedotjs.svg";
import reactjs from "@/public/icons/react.svg";
import typeorm from "@/public/icons/typeorm.svg";
import typescript from "@/public/icons/typescript.svg";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import TypingAnimation from "./ui/typing-animation";

// https://simpleicons.org/?q=angular
const reviews = [
  {
    name: "Javascript",
    img: javascript,
    url: "",
  },
  {
    name: "Typescript",
    img: typescript,
  },
  {
    name: "Node Js",
    img: nodedotjs,
  },
  {
    name: "Express",
    img: express,
  },
  {
    name: "Type ORM",
    img: typeorm,
  },
  {
    name: "Json Web Tokens",
    img: jsonwebtokens,
  },
  {
    name: "React JS",
    img: reactjs,
    url: "",
  },
  {
    name: "Next JS",
    img: nextjs,
    url: "",
  },
  {
    name: "Angular",
    img: angular,
  },
];

// Check for an even number of reviews, handle cases with fewer than 2 items
const firstRow = reviews.length > 1 ? reviews.slice(0, reviews.length / 2) : reviews;
const secondRow = reviews.length > 1 ? reviews.slice(reviews.length / 2) : [];

const ReviewCard = ({
  img,
  name,
  url,
}: {
  img: string;
  name: string;
  url?: string;
}) => {
  return (
    <>
    <figure
      className={cn(
        "relative w-48 cursor-pointer overflow-hidden rounded-xl border p-4",
        "flex flex-col items-center justify-center", // Added flexbox centering
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-col items-center gap-4">
        <Image
          src={img}
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-28 w-28"
        />
        <div className="flex flex-col items-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>{name}</TooltipTrigger>
              <TooltipContent>
                <figcaption className="text-sm font-medium dark:text-white">
                  {name}
                </figcaption>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </figure>
    </>
  );
};

export function MarqueeDemo() {
  return (
    <div className=" m-2 relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      
      <div className="m-4">
        <TypingAnimation
        className="text-4xl font-bold text-black dark:text-white"
        text="Skill Section"
      />
      </div>

      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      {secondRow.length > 0 && ( // Only render second row if it has items
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
      )}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
