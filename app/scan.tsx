import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Scan() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.scanArea}>
          <View style={styles.iconContainer}>
            <Ionicons name="scan-outline" size={32} color="#1A1A1A" />
          </View>
          <Text style={styles.scanText}>Kartınızı taratmak için hazır</Text>
          <Text style={styles.scanSubtext}>Kartı tarayıcıya yaklaştırın</Text>
        </View>

        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>İptal</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    padding: 24,
  },
  scanArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  scanText: {
    fontSize: 20,
    color: '#1A1A1A',
    fontWeight: '600',
  },
  scanSubtext: {
    fontSize: 16,
    color: '#666666',
  },
  backButton: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 16,
    color: '#1A1A1A',
    fontWeight: '500',
  },
});
