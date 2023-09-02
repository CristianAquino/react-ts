export class MediaStreamController {
  private permiss: boolean;
  private accessDevice: Record<string, unknown>;
  private mediaRecorder: MediaRecorder | null;
  private mediaStream: MediaStream | null;
  private urlDownload: string | null;

  constructor(accessDevice: Record<string, unknown>) {
    this.permiss =
      "mediaDevices" in navigator && "getUserMedia" in navigator.mediaDevices;
    this.accessDevice = accessDevice;
    this.mediaRecorder = null;
    this.mediaStream = null;
    this.urlDownload = null;
  }

  public get_devices() {
    if (this.permiss) {
      const devices = navigator.mediaDevices
        .enumerateDevices()
        .then((deviceInfos) => {
          const audioSourcesOption = [];
          const videoSourcesOption = [];
          for (const deviceInfo of deviceInfos) {
            if (deviceInfo.kind === "audioinput") {
              audioSourcesOption.push({
                value: deviceInfo.deviceId,
                label:
                  deviceInfo.label ||
                  `Microphone ${audioSourcesOption.length + 1}`,
              });
            } else if (deviceInfo.kind === "videoinput") {
              videoSourcesOption.push({
                value: deviceInfo.deviceId,
                label:
                  deviceInfo.label || `Camera ${videoSourcesOption.length + 1}`,
              });
            }
          }
          return {
            videoDevices:
              videoSourcesOption.length > 0 ? videoSourcesOption : null,
            audioDevices:
              audioSourcesOption.length > 0 ? audioSourcesOption : null,
          };
        });
      return devices;
    }
  }

  public get_stream(videoStream: any) {
    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach((track: any) => {
        track.stop();
      });
    }
    navigator.mediaDevices.getUserMedia(this.accessDevice).then((stream) => {
      this.mediaStream = stream;
      if (videoStream) videoStream.srcObject = stream;
    });
  }

  public start_recording() {
    if (!this.mediaStream) return;
    this.mediaRecorder = new MediaRecorder(this.mediaStream);
    this.mediaRecorder.ondataavailable = (e: BlobEvent) => {
      if (e.data.size <= 0) {
        return;
      }
      const blob = new Blob([e.data], {
        type: "video/x-matroska;codecs=avc1,opus",
      });
      this.urlDownload = URL.createObjectURL(blob);
      this.mediaRecorder = null;
    };
    this.mediaRecorder.start();
  }
  public stop_recording() {
    if (!this.mediaRecorder) return;
    this.mediaRecorder.stop();
  }
  get get_urlDownload() {
    return this.urlDownload;
  }
}
