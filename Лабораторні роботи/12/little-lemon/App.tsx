import { useColorScheme } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import DrawerFlow from './navigation/DrawerFlow';
import StackFlow from './navigation/StackFlow';
import TabsFlow from './navigation/TabsFlow';

// Одночасно активний один варіант навігації.
const navigators = { StackFlow, TabsFlow, DrawerFlow };
const ActiveNavigator = navigators.StackFlow;

export default function App() {
  const isDark = useColorScheme() === 'dark';

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
          <ActiveNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
