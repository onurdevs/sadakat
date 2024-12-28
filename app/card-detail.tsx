import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { MotiView } from 'moti';
import { shadeColor } from './utils/colors';

const CardDetail = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const card = {
    id: params.id as string,
    companyName: params.companyName as string,
    cardNumber: params.cardNumber as string,
    logoUrl: params.logoUrl as string,
    cardColor: params.cardColor as string,
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Kart Detayı</Text>
      </View>

      <MotiView
        from={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: 'timing', duration: 500 }}
        style={styles.cardContainer}
      >
        <LinearGradient
          colors={[card.cardColor || '#444', shadeColor(card.cardColor || '#444', -30)]}
          style={styles.card}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <BlurView intensity={20} tint="dark" style={styles.cardContent}>
            <Image 
              source={{ uri: card.logoUrl }} 
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.companyName}>{card.companyName}</Text>
            <Text style={styles.cardNumber}>{card.cardNumber}</Text>
          </BlurView>
        </LinearGradient>
      </MotiView>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="create-outline" size={22} color="#666" />
          <Text style={styles.actionText}>Düzenle</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, styles.deleteButton]}>
          <Ionicons name="trash-outline" size={22} color="#ff3b30" />
          <Text style={[styles.actionText, styles.deleteText]}>Sil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingTop: 20,
  },
  backButton: {
    padding: 8,
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  cardContainer: {
    padding: 20,
    marginTop: 20,
  },
  card: {
    height: 220,
    borderRadius: 24,
    overflow: 'hidden',
  },
  cardContent: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 16,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  companyName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 12,
    textAlign: 'center',
  },
  cardNumber: {
    fontSize: 18,
    color: '#fff',
    opacity: 0.9,
    letterSpacing: 2,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    padding: 20,
    marginTop: 20,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    backgroundColor: '#f1f3f5',
    gap: 8,
  },
  actionText: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
  deleteButton: {
    backgroundColor: '#fff0f0',
  },
  deleteText: {
    color: '#ff3b30',
  },
});

export default CardDetail;