import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { Content, Left } from "./components";

export type OnePieceProps = {};

const OnePiece = ({}: OnePieceProps) => {
  // Font.register({})
  const styles = StyleSheet.create({
    body: {
      backgroundColor: "#D4C4AB",
      padding: 20,
      textTransform: "uppercase",
      gap: 20,
      color: "#392f2c",
    },
    header: {
      width: "100%",
      height: 122,
      border: "1px solid black",
      fontFamily: "Times-Bold",
      textAlign: "center",
      fontSize: 107,
    },
    imageContent: {
      width: "100%",
      height: 365,
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center center",
    },
    footer: {
      width: "100%",
      height: 274,
      border: "1px solid black",
      flexDirection: "row",
      gap: 10,
    },
  });
  return (
    <Document>
      <Page size={"A4"} style={styles.body}>
        {/* Header */}
        <View style={styles.header}>
          <Text>wanted</Text>
        </View>
        {/* Image */}
        <View style={styles.imageContent}>
          <Image src="https://i.imgur.com/t4Gp9AT.jpg" style={styles.image} />
        </View>
        {/* Footer */}
        <View style={styles.footer}>
          <Left />
          <Content />
        </View>
      </Page>
    </Document>
  );
};

export default OnePiece;
