import { Link } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Sadakat</Text>
        <Text style={styles.subtitle}>Kartlarınızı kolayca yönetin</Text>
      </View>

      <View style={styles.menuContainer}>
        <Link href="/scan" asChild>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.iconContainer}>
              <Ionicons name="scan-outline" size={24} color="#1A1A1A" />
            </View>
            <Text style={styles.menuText}>Kart Tara</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/cards" asChild>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.iconContainer}>
              <Ionicons name="card-outline" size={24} color="#1A1A1A" />
            </View>
            <Text style={styles.menuText}>Kartlarım</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    padding: 24,
    paddingTop: 40,
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
    color: '#1A1A1A',
    letterSpacing: -1,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    marginTop: 8,
  },
  menuContainer: {
    flex: 1,
    padding: 24,
    gap: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    gap: 16,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuText: {
    fontSize: 16,
    color: '#1A1A1A',
    fontWeight: '500',
  },
});