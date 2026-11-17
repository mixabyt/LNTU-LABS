import { FlatList, StyleSheet, Text, View } from 'react-native';
import MenuItemRow from '../components/MenuItemRow';
import { menuItems } from '../data/menu';
import type { MenuItem } from '../types/menu';

export default function MenuFlatScreen() {
  return (
    <FlatList<MenuItem>
      style={styles.list}
      contentContainerStyle={styles.content}
      data={menuItems}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <MenuItemRow item={item} />}
      ListHeaderComponent={<Text style={styles.header}>Наше меню</Text>}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListEmptyComponent={<Text style={styles.empty}>Меню поки порожнє.</Text>}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  content: {
    paddingBottom: 24,
  },
  header: {
    color: '#F4CE14',
    fontSize: 26,
    fontWeight: 'bold',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  separator: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: '#EDEFEE55',
  },
  empty: {
    color: '#EDEFEE',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 24,
  },
});
