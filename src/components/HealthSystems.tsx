import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants/colors';

export type HealthSystem = {
  name: string;
  score: number;
};

type Props = {
  systems: HealthSystem[];
};

export default function HealthSystems({ systems }: Props) {
  return (
    <View>
      <Text style={styles.title}>Sistemas del cuerpo</Text>

      <ScrollView style={styles.list}>
        {systems.map((system, index) => (
          <View key={index} style={styles.item}>
            <View style={styles.icon}>
              <MaterialCommunityIcons
                name="heart-pulse"
                size={20}
                color={colors.text}
              />
            </View>

            <View style={styles.info}>
              <Text style={styles.name}>{system.name}</Text>

              <View style={styles.track}>
                <View
                  style={[
                    styles.fill,
                    { width: `${system.score * 10}%` },
                  ]}
                />
              </View>
            </View>

            <Text style={styles.value}>{system.score}</Text>

            <Text style={styles.max}>de 10</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 12,
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },

  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.yellow,
    alignItems: 'center',
    justifyContent: 'center',
  },

  info: {
    flex: 1,
  },

  name: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 6,
  },

  track: {
    height: 12,
    borderRadius: 6,
    backgroundColor: '#E5E5E5',
    overflow: 'hidden',
  },

  fill: {
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.yellow,
  },

  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
  },

  max: {
    fontSize: 12,
    color: colors.textMuted,
  },

  list: {
    maxHeight: 104,
  },
});