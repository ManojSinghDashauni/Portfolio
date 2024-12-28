import Backward from "../icons/Backward";
import Forward from "../icons/Forward";
import Play from "../icons/Play";
import { motion } from "framer-motion";
import { MusicList } from "../data/MusicList";
import { DraggableProps } from "../types/Type";
import { useRef, useState } from "react";
import Pause from "../icons/Pause";
import songFile from "../assets/music/Kendrick Lamar, SZA - All The Stars.mp3";


const Music: React.FC<DraggableProps> = ({ dragConstraints }) => {
  const audioPlayer = useRef<HTMLMediaElement>(null!);
  const [musicIndex, setMusicIndex] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState({
    songName: "All The Stars",
    songArtist: "Kendrick Lamar, SZA",
    songSrc: songFile,
  });

  const handleSong = () => {
    if (audioPlayer.current.paused) {
      audioPlayer.current.play();
      setIsAudioPlaying(true);
    } else {
      audioPlayer.current.pause();
      setIsAudioPlaying(false);
    }
  };

  const handleNextSong = () => {
    if (musicIndex >= MusicList.length - 1) {
      let setNumber = 0;
      setMusicIndex(setNumber);
      updateMusicDetail(setNumber);
    } else {
      let setNumber = musicIndex + 1;
      setMusicIndex(setNumber);
      updateMusicDetail(setNumber);
    }
  };

  const handlePrevSong = () => {
    if (musicIndex == 0) {
      let setNumber = MusicList.length - 1;
      setMusicIndex(setNumber);
      updateMusicDetail(setNumber);
    } else {
      let setNumber = musicIndex - 1;
      setMusicIndex(setNumber);
      updateMusicDetail(setNumber);
    }
  };

  const updateMusicDetail = (number: number) => {
    let musicObject = MusicList[number];
    audioPlayer.current.src =musicObject.songSrc
    audioPlayer.current.play();
    setCurrentSong({
      songName: musicObject.songName,
      songArtist: musicObject.songArtist,
      songSrc: musicObject.songSrc,
    });
    setIsAudioPlaying(true);
  };

  return (
    <motion.div
      drag
      dragConstraints={dragConstraints}
      dragTransition={{
        power: 0,
        bounceStiffness: 100,
        bounceDamping: 10,
      }}
      className="absolute top-40 left-36 bg-colorgray h-36 w-80 rounded-xl grid grid-rows-[_40px_1fr] cursor-grabbing"
    >
      <div className=" flex gap-1 p-3">
        <button disabled className="btn bg-colorred"></button> 
        <button disabled className="btn bg-colororange"></button>
        <button disabled className="btn bg-colorgreen"></button>
      </div>
      <div className="flex flex-col justify-center items-center bg-colordark rounded-b-xl py-4">
        <h1 className="text-[#fff] text-center">
          {currentSong.songName}
        </h1>
        <h1 className="text-[#fff] text-center">
          {currentSong.songArtist}
        </h1>
        <audio src={songFile} ref={audioPlayer}></audio>
        <div className="flex justify-center items-center mt-2">
          <button onClick={handlePrevSong}>
            <Backward />
          </button>
          <button onClick={handleSong}>
            {isAudioPlaying ? <Pause /> : <Play />}
          </button>
          <button onClick={handleNextSong}>
            <Forward />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Music;
