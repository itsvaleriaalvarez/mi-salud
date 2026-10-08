import { useState } from 'react';
import {
    Modal,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

import { colors } from '../constants/colors';

type Props = {
  visible: boolean;
  onClose: () => void;
  onAdd: (name: string) => void;
};

export default function AddSystemModal({
  visible,
  onClose,
  onAdd,
}: Props) {
  const [name, setName] = useState('');

  function handleAdd() {
    if (name.trim() === '') return;

    onAdd(name.trim());
    setName('');
    onClose();
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.dialog}>
          <Text style={styles.title}>Nuevo sistema</Text>

          <Text style={styles.label}>
            ¿Qué sistema del cuerpo quieres seguir?
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Ej: Sistema digestivo"
            placeholderTextColor={colors.textMuted}
            value={name}
            onChangeText={setName}
          />

          <View style={styles.buttons}>
            <Pressable
              style={styles.cancelButton}
              onPress={onClose}
            >
              <Text style={styles.cancelText}>Cancelar</Text>
            </Pressable>

            <Pressable
              style={styles.addButton}
              onPress={handleAdd}
            >
              <Text style={styles.addText}>Agregar</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    padding: 24,
  },

  dialog: {
    backgroundColor: colors.background,
    borderRadius: 24,
    padding: 20,
    gap: 12,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
  },

  label: {
    fontSize: 14,
    color: colors.textMuted,
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 44,
    fontSize: 15,
    color: colors.text,
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 8,
  },

  cancelButton: {
    paddingHorizontal: 16,
    height: 40,
    justifyContent: 'center',
  },

  cancelText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.text,
  },

  addButton: {
    paddingHorizontal: 18,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: colors.dark,
  },

  addText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});