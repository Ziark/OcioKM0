import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: '#1a73e8' }}>
      <Tabs.Screen name="index" options={{ title: 'Inicio', tabBarLabel: 'Inicio' }} />
      <Tabs.Screen name="explore" options={{ title: 'Explorar', tabBarLabel: 'Explorar' }} />
      <Tabs.Screen name="notifications" options={{ title: 'Alertas', tabBarLabel: 'Alertas' }} />
      <Tabs.Screen name="profile" options={{ title: 'Perfil', tabBarLabel: 'Perfil' }} />
    </Tabs>
  );
}
