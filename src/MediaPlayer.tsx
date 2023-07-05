import { useRef, useState } from "react";

type videoCurrent = HTMLVideoElement;

const MediaPlayer = () => {
  const videoRef = useRef<videoCurrent>({} as videoCurrent);
  const [isPlay, setisPlay] = useState<boolean>(false);

  const handlePlay = () => {
    const video = videoRef.current;
    // if (!isPlay) {
    //   video.play();
    //   setisPlay(true);
    // } else {
    //   video.pause();
    //   setisPlay(false);
    // }
    isPlay ? video.pause() : video.play();
    setisPlay(!isPlay);
  };
  return (
    <div>
      <video ref={videoRef} width={400} onClick={handlePlay}>
        <source
          type="video/mp4"
          src="https://www.w3schools.com/html/mov_bbb.mp4"
        />
      </video>
      <button onClick={handlePlay}>{isPlay ? "Pause" : "Play"}</button>
    </div>
  );
};
export default MediaPlayer;
