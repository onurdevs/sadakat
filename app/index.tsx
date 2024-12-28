import { 
  SafeAreaView, 
  View, 
  Text, 
  ScrollView, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  StatusBar 
} from 'react-native';
import { BlurView } from 'expo-blur';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { MotiView } from 'moti';
import { shadeColor } from './utils/colors';

// Simplified type definition
type LoyaltyCard = {
  id: string;
  companyName: string;
  cardNumber: string;
  logoUrl: string;
  cardColor?: string;
};

// Updated sample data
const loyaltyCards: LoyaltyCard[] = [
  {
    id: '1',
    companyName: 'Starbucks',
    cardNumber: '1234 5678 9012',
    logoUrl: 'https://example.com/starbucks-logo.png',
    cardColor: '#00704A'
  },
  {
    id: '2',
    companyName: 'Migros',
    cardNumber: '9876 5432 1098',
    logoUrl: 'https://example.com/migros-logo.png',
    cardColor: '#FF7A00'
  }
];

// Simplified card component
const Page = () => {
  const navigation = useNavigation();
  
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      <View style={styles.header}>
        <View>
          <Text style={styles.headerSmall}>Sadakat Kartları</Text>
          <Text style={styles.headerTitle}>Kartlarım</Text>
        </View>
        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="person-circle-outline" size={32} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {loyaltyCards.map((card, index) => (
          <MotiView
            key={card.id}
            from={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: index * 100 }}
          >
            <TouchableOpacity 
              style={styles.cardWrapper}
              onPress={() => navigation.navigate('card-detail', card)}
            >
              <LinearGradient
                colors={[card.cardColor || '#444', shadeColor(card.cardColor || '#444', -30)]}
                style={styles.card}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <BlurView intensity={20} style={styles.cardContent}>
                  <View style={styles.cardHeader}>
                    <Image 
                      source={{ uri: card.logoUrl }} 
                      style={styles.logo}
                      resizeMode="contain"
                    />
                    <Text style={styles.companyName}>{card.companyName}</Text>
                  </View>
                  <Text style={styles.cardNumber}>{card.cardNumber}</Text>
                </BlurView>
              </LinearGradient>
            </TouchableOpacity>
          </MotiView>
        ))}
      </ScrollView>

      <BlurView intensity={30} style={styles.fabWrapper}>
        <TouchableOpacity 
          style={styles.fab}
          onPress={() => navigation.navigate('add-card')}
        >
          <Ionicons name="add" size={24} color="#fff" />
        </TouchableOpacity>
      </BlurView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    padding: 24,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerSmall: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: '#000',
  },
  profileButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#f1f3f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 100,
  },
  cardWrapper: {
    marginBottom: 16,
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 8,
  },
  card: {
    borderRadius: 24,
    height: 200,
    overflow: 'hidden',
  },
  cardContent: {
    flex: 1,
    padding: 24,
    justifyContent: 'space-between',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  logo: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  companyName: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
    textShadowColor: 'rgba(0,0,0,0.1)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  cardNumber: {
    fontSize: 18,
    letterSpacing: 2,
    color: '#fff',
    opacity: 0.9,
  },
  fabWrapper: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    borderRadius: 30,
    overflow: 'hidden',
  },
  fab: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Page;
