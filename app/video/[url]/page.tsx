interface VideoProps {
  params: {
    url: string;
  };
}

const Video = ({ params: { url } }: VideoProps) => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <video
        // autoPlay
        // muted
        controls
        className="w-full sm:w-4/5 h-auto object-cover"
      >
        <source src={`/${url}`} type="video/mp4" />
        Browser does not support video
      </video>
    </div>
  );
};

export default Video;
