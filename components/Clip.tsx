import Youtube from "../public/youtube.svg";

type ClipProps = {
  image: string;
  video: string;
};

const Clip: React.FC<ClipProps> = ({ image, video }) => (
  <div className="border-red-1 relative w-32 h-28 xs:w-28 xs:h-24 xs-2:w-24 xs-2:h-20 xs-3:w-20 xs-3:h-16 xs-4:w-16 xs-4:max-h-14 overflow-hidden rounded-2xl cursor-pointer group">
    <video
      autoPlay
      muted
      loop
      className="absolute top-0 left-0 w-full h-full object-cover z-0 group-hover:z-10"
    >
      <source src={video} type="video/mp4" />
      Browser does not support video
    </video>
    <img
      className="absolute top-0 left-0 w-full h-full object-cover z-10 group-hover:z-0"
      src={image}
      alt="A cover image"
    />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 trans w-8 z-20 group-hover:z-0">
      <Youtube />
    </div>
  </div>
);

export default Clip;
