import { IStory } from "./data";
import { HeartIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/outline";
import { HashtagIcon } from "@heroicons/react/24/outline";
import truncateString from "lodash/truncate";

interface StoryProps {
  data: IStory;
}

const Story: React.FC<StoryProps> = ({
  data: { id, title, text, img, url, like, time, by, btnText },
}) => {
  // w-[30rem] xs-3:w-[27rem] xs-4:w-[24rem]
  return (
    <div className="border-teal-1 rounded-xl border border-gray-200 overflow-hidden flex flex-col justify-between">
      <img src={img} alt={title} />
      <div className="p-6 xs-3:p-4 flex flex-col space-y-4">
        <div className="flex justify-between">
          <div className="flex">
            <HeartIcon className="w-8 text-red-600 icon-effect cursor-pointer" />
            <span className="font-semibold text-[1.4rem] xs-4:text-[1.2rem]">
              {like}
            </span>
          </div>
          <div className="flex">
            <ClockIcon className="w-8 icon-effect cursor-pointer" />
            <span className="font-semibold text-[1.4rem] xs-4:text-[1.2rem]">
              {time}
            </span>
          </div>
          <div className="flex">
            <HashtagIcon className="w-8 text-blue-600 icon-effect cursor-pointer" />
            <span className="font-semibold text-[1.4rem] text-blue-600 xs-4:text-[1.2rem]">
              {by}
            </span>
          </div>
        </div>
        <div>
          <h3 className="text-[1.7rem] font-semibold">{title}</h3>
          <p className="text-[1.4rem]">
            {truncateString(text, { length: 150 })}
          </p>
        </div>
        <a
          className="text-center text-[1.4rem] bg-gray-700 py-3 text-white rounded-xl btn-effect"
          href="#"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default Story;
