import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import nodejs from "../public/icons/nodedotjs.svg";
import nextjs from "@/public/icons/nextdotjs.svg";
import nextjs from "@/public/icons/nextdotjs.svg";
import nextjs from "@/public/icons/nextdotjs.svg";
import nextjs from "@/public/icons/nextdotjs.svg";
import nextjs from "@/public/icons/nextdotjs.svg";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Image from "next/image";

// https://simpleicons.org/?q=angular
const reviews = [
  {
    name: "Jack",
    img: nodejs,
    url: "",
  },
  {
    name: "Jill",
    img: nextjs,
  },
  {
    name: "Jack",
    img: nodejs,
    url: "",
  },
  {
    name: "Jill",
    img: nextjs,
  },
  {
    name: "Jack",
    img: nodejs,
    url: "",
  },
  {
    name: "Jill",
    img: nextjs,
  },
  {
    name: "Jack",
    img: nodejs,
    url: "",
  },
  {
    name: "Jill",
    img: nextjs,
  },
  {
    name: "Jack",
    img: nodejs,
    url: "",
  },
  {
    name: "Jill",
    img: nextjs,
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
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
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
