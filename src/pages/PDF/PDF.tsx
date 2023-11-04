import { PDFViewer } from "@react-pdf/renderer";
import { PDFCartel, TicketSencillo, OnePiece } from "./components";

export type PDFProps = {};

const PDF = ({}: PDFProps) => {
  return (
    <>
      {/* <PDFCartel /> */}
      <PDFViewer style={{ width: "800PX", height: "100vh" }}>
        {/* <TicketSencillo /> */}
        <OnePiece />
      </PDFViewer>
    </>
  );
};

export default PDF;
