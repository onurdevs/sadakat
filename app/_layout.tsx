import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function Layout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#FFFFFF',
          },
          headerTintColor: '#1A1A1A',
          headerTitleStyle: {
            fontWeight: '500',
            fontSize: 18,
          },
          headerShadowVisible: false,
          animation: 'fade',
          headerBackTitleVisible: false,
          contentStyle: {
            backgroundColor: '#FFFFFF',
          },
        }}
      />
    </>
  );
}
