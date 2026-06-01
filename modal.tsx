import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function ModalScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Urban Express Modal</ThemedText>
      <Text style={styles.subtitle}>Este é um modal de exemplo</Text>
      <Link href="/" dismissTo style={styles.link}>
        <ThemedText type="link">Voltar para home</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  subtitle: {
    marginTop: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
