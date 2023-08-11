import { useCallback } from "react";
import { RootStackParamList } from "../../navigation/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
import { Button, StyleSheet } from "react-native";
import { ScreenNames } from "../../constants/screenNames";
import { ScrollView } from "react-native-gesture-handler";
import ExampleLink from "./Main/components/ExampleLink";

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
});

type Props = StackScreenProps<RootStackParamList>;

const Test = ({ navigation }: Props) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Button title="back" onPress={() => navigation.goBack()}></Button>
    </ScrollView>
  );
};

export default Test;