import { useEffect, useRef, useState } from "react";

const constraints = {
  video: true,
};
const Test = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hasPhoto, setHasPhoto] = useState(false);
  const [selectDevice, setSelectDevice] = useState<any[]>([]);
  const [changeDevice, setChangeDevice] = useState<string>("");

  const getDevices = () => {
    navigator.mediaDevices.enumerateDevices().then((devices) => {
      const videoDevice = devices.filter((device) => {
        if (device.kind === "videoinput") {
          return {
            value: device.deviceId,
            label: device.label || `Camera ${selectDevice.length + 1}`,
          };
        }
      });
      setSelectDevice(videoDevice);
    });
  };

  const getVideo = ({ device }: any) => {
    navigator.mediaDevices
      .getUserMedia(device)
      .then((stream) => {
        let video = videoRef.current;
        if (video) {
          video.srcObject = stream;
          video?.play();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  function convertCanvasToImage(dataURI: any) {
    var binary = atob(dataURI.split(",")[1]);
    var array = [];
    for (var i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    const blob = new Blob([new Uint8Array(array)], { type: "image/jpeg" });
    const imagen = new File([blob], "imagen.jpeg", {
      type: "image/jpeg",
    });
    return imagen;
  }
  const takePhoto = () => {
    const width = videoRef.current?.videoWidth;
    const height = videoRef.current?.videoHeight;

    let video = videoRef.current;
    let photo = canvasRef.current;
    if (photo) {
      photo.width = width as number;
      photo.height = height as number;

      let ctx = photo?.getContext("2d");
      ctx?.drawImage(video as HTMLVideoElement, 0, 0, width, height);
      setHasPhoto(true);
    }
  };
  const closePhoto = () => {
    let photo = canvasRef.current;
    let ctx = photo?.getContext("2d");
    if (photo) {
      ctx?.clearRect(0, 0, photo?.width, photo?.height);
      setHasPhoto(false);
    }
  };
  const handleSend = () => {
    const photo = canvasRef.current;
    if (photo) {
      const imagen = convertCanvasToImage(photo.toDataURL("image/jpeg"));
      const form = new FormData();
      form.append("imagen", imagen);
      for (const value of form.values()) {
        console.log(value);
      }
    }
  };
  useEffect(() => {
    if (
      "mediaDevices" in navigator &&
      "getUserMedia" in navigator.mediaDevices
    ) {
      console.log("Let's get this party started");
      const updatedConstraints = {
        ...constraints,
        deviceId: {
          exact: changeDevice,
        },
      };
      getDevices();
      getVideo({ device: updatedConstraints });
    }
  }, [videoRef]);

  useEffect(() => {
    const updatedConstraints = {
      ...constraints,
      deviceId: {
        exact: changeDevice,
      },
    };
    getVideo({ device: updatedConstraints });
  }, [changeDevice]);
  return (
    <div>
      <video ref={videoRef} hidden={hasPhoto}></video>
      <canvas ref={canvasRef} hidden={!hasPhoto}></canvas>
      {!hasPhoto ? (
        <button onClick={takePhoto}>SNAP!</button>
      ) : (
        <button onClick={closePhoto}>CLOSE</button>
      )}
      <button onClick={handleSend}>Send</button>
      <select
        value={changeDevice}
        onChange={(e) => setChangeDevice(e.target.value)}
      >
        {selectDevice.map((device) => {
          return (
            <option key={device.label} value={device.value}>
              {device.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default Test;
