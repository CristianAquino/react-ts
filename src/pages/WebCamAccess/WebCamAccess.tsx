// import { useEffect, useRef, useState } from "react";
// import { AiOutlineCamera } from "react-icons/ai";

import Test from "./Test";

// export type WebCamAccessProps = {};

// const permissionAccessMediaDevice = {
//   video: true,
// };

// const WebCamAccess = ({}: WebCamAccessProps) => {
//   const [audioSurce, setAudioSource] = useState<string>("");
//   const [videoSurce, setVideoSource] = useState<string>("");
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const streamRef = useRef<MediaStream | null>(null);
//   const [error, setError] = useState<Error | null>(null);
//   const [audioSoruceOptions, setAudioSourceOptions] = useState<
//     Record<string, string>[]
//   >([]);
//   const [videoSourceOptions, setVideoSourceOptions] = useState<
//     Record<string, string>[]
//   >([]);
//   // const [isCameraOn, setIsCameraOn] = useState<boolean>(false);
//   const [isRecording, setIsRecording] = useState<boolean>(false);
//   const streamRecorderRef = useRef<MediaRecorder | null>(null);
//   const chunksRef = useRef<Blob[]>([]);
//   const [downloadLink, setDownloadLink] = useState<string | null>(null);

//   const startRecording = () => {
//     if (isRecording) return;
//     if (!streamRef.current) return;
//     streamRecorderRef.current = new MediaRecorder(streamRef.current);
//     streamRecorderRef.current.start();
//     streamRecorderRef.current.ondataavailable = (e: BlobEvent) => {
//       if (chunksRef.current) {
//         chunksRef.current.push(e.data);
//       }
//     };
//     setIsRecording(true);
//   };
//   const stopRecording = () => {
//     if (!streamRecorderRef.current) return;
//     streamRecorderRef.current.stop();
//     setIsRecording(false);
//   };

//   useEffect(() => {
//     if (isRecording) return;
//     if (chunksRef.current.length === 0) return;
//     const blob = new Blob(chunksRef.current, {
//       type: "video/x-matroska;codecs=avc1,opus",
//     });
//     setDownloadLink(URL.createObjectURL(blob));
//     chunksRef.current = [];
//   }, [isRecording]);

//   useEffect(() => {
//     if (
//       "mediaDevices" in navigator &&
//       "getUserMedia" in navigator.mediaDevices
//     ) {
//       console.log("Let's get this party started");
//     }
//     const prepareStream = async () => {
//       const gotStream = (stream: MediaStream) => {
//         streamRef.current = stream;
//         if (videoRef.current) {
//           videoRef.current.srcObject = stream;
//         }
//       };
//       const getStream = async () => {
//         // comprobamos si tenemos iniciado un stream
//         // de ser el caso detenemos todo
//         if (streamRef.current) {
//           streamRef.current.getTracks().forEach((track) => track.stop());
//         }
//         const constraints = {
//           audio: {
//             deviceId: audioSurce !== "" ? { exact: audioSurce } : undefined,
//           },
//           video: {
//             deviceId: videoSurce !== "" ? { exact: videoSurce } : undefined,
//           },
//         };
//         try {
//           const stream = await navigator.mediaDevices.getUserMedia(constraints);
//           gotStream(stream);
//         } catch (error) {
//           if (error instanceof Error) {
//             setError(error);
//           }
//         }
//       };

//       const getDevices = async () => {
//         return navigator.mediaDevices.enumerateDevices();
//       };

//       const gotDevices = async (deviceInfos: MediaDeviceInfo[]) => {
//         const audioSourcesOption = [];
//         const videoSourcesOption = [];
//         for (const deviceInfo of deviceInfos) {
//           if (deviceInfo.kind === "audioinput") {
//             audioSourcesOption.push({
//               value: deviceInfo.deviceId,
//               label:
//                 deviceInfo.label ||
//                 `Microphone ${audioSourcesOption.length + 1}`,
//             });
//           } else if (deviceInfo.kind === "videoinput") {
//             videoSourcesOption.push({
//               value: deviceInfo.deviceId,
//               label:
//                 deviceInfo.label || `Camera ${videoSourcesOption.length + 1}`,
//             });
//           }
//         }
//         setAudioSourceOptions(audioSourcesOption);
//         setVideoSourceOptions(videoSourcesOption);
//       };
//       await getStream();
//       const mediaDevice = await getDevices();
//       gotDevices(mediaDevice);
//     };
//     prepareStream();
//   }, []);

//   return (
//     <main>
//       <h1>WebCamAccess</h1>
//       <select value={audioSurce}>
//         {audioSoruceOptions.map((option) => (
//           <option key={option.value} value={option.value}>
//             {option.label}
//           </option>
//         ))}
//       </select>
//       <select value={videoSurce}>
//         {videoSourceOptions.map((option) => (
//           <option key={option.value} value={option.value}>
//             {option.label}
//           </option>
//         ))}
//       </select>
//       <video ref={videoRef} autoPlay muted playsInline></video>
//       <div>
//         {downloadLink && <video src={downloadLink} controls></video>}
//         {downloadLink && (
//           <a href={downloadLink} download="file.mp4">
//             descargar
//           </a>
//         )}
//       </div>
//       <button onClick={startRecording} disabled={isRecording}>
//         <AiOutlineCamera />
//         Grabar
//       </button>
//       <button onClick={stopRecording} disabled={!isRecording}>
//         <AiOutlineCamera />
//         Stop
//       </button>
//       <canvas></canvas>
//       {error && <p>{error.message}</p>}
//     </main>
//   );
// };

// export default WebCamAccess;

// // https://www.digitalocean.com/community/tutorials/front-and-rear-camera-access-with-javascripts-getusermedia-es
// // https://dev.to/masanori_msl/typescript-record-mediastream-4emo
// // https://dev.to/producthackers/mediastream-api-in-javascript-16h2
// // https://dev.to/antopiras89/using-the-mediastream-web-api-to-record-screen-camera-and-audio-1c4n

const WebCamAccess = () => {
  return (
    <div>
      <Test />
    </div>
  );
};
export default WebCamAccess;
