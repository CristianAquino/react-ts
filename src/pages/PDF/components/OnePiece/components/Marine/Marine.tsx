import { Font, StyleSheet, Text, View } from "@react-pdf/renderer";
import Hadijah from "../../../../../../assets/fonts/HadijahFont/HadijahFreeTrial-0Wqzv.ttf";
import FancyCard from "../../../../../../assets/fonts/FancyCard/FancyCardText.ttf";

export type MarineProps = {};

const Marine = ({}: MarineProps) => {
  Font.register({
    family: "hadijah",
    src: Hadijah,
  });
  Font.register({
    family: "fancyCard",
    src: FancyCard,
  });

  const styles = StyleSheet.create({
    body: {
      width: "100%",
      height: 50,
      flexDirection: "row",
      gap: 8,
    },
    message: {
      width: 354,
      height: "100%",
      fontSize: 8,
      fontFamily: "fancyCard",
    },
    marine: {
      width: 160,
      height: "100%",
      fontSize: 36,
      letterSpacing: 4,
      fontFamily: "hadijah",
    },
  });
  return (
    <View style={styles.body}>
      <Text style={styles.message}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        tempora dolorem consequatur facere maiores repellendus.
      </Text>
      <Text style={styles.marine}>marine</Text>
    </View>
  );
};

export default Marine;
