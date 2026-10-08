import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable, StyleSheet, View } from 'react-native';
import { colors } from '../constants/colors';

type Props = {
  onAddPress: () => void;
};

export default function TabBar({ onAddPress }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.tab}>
        <Ionicons
          name="home-outline"
          size={24}
          color={colors.dark}
        />
      </View>

      <Pressable
        style={styles.addButton}
        onPress={onAddPress}
      >
        <Ionicons
          name="add"
          size={30}
          color={colors.dark}
        />
      </Pressable>

      <View style={styles.tab}>
        <Ionicons
          name="person-outline"
          size={24}
          color={colors.dark}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: colors.background,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },

  tab: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  addButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.yellow,
  },
});