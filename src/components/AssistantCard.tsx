import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants/colors';
import ChatSheet from './ChatSheet';

export default function AssistantCard() {
  const [chatVisible, setChatVisible] = useState(false);

  return (
    <View style={styles.card}>
      <Text style={styles.caption}>Asistente Intelly</Text>
      <Text style={styles.message}>
        Taigo, tu puntaje bajó <Text style={styles.highlight}>28%</Text> la semana pasada
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => setChatVisible(true)}
      >
        <Text style={styles.buttonText}>Conversemos</Text>
      </Pressable>

      <ChatSheet
        visible={chatVisible}
        onClose={() => setChatVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: colors.pink, borderRadius: 24, padding: 16, gap: 8 },
  caption: { fontSize: 12, color: colors.text },
  message: { fontSize: 15, fontWeight: 'bold', color: colors.text },
  highlight: { color: colors.alert },
  button: {
    alignSelf: 'flex-start',
    backgroundColor: colors.dark,
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  buttonText: { fontSize: 13, fontWeight: 'bold', color: '#FFFFFF' },
});