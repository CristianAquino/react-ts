import { StyleSheet, View } from "@react-pdf/renderer";
import { Marine, Reward } from "..";

export type ContentProps = {};

const Content = ({}: ContentProps) => {
  const styles = StyleSheet.create({
    body: {
      flexDirection: "column",
      height: "100%",
      width: "100%",
      gap: 5,
    },
  });
  return (
    <View style={styles.body}>
      <Reward />
      <Marine />
    </View>
  );
};

export default Content;
