import { StyleSheet, Text, View } from 'react-native';
import type { MenuItem } from '../types/menu';

type MenuItemRowProps = {
  item: MenuItem;
};

export default function MenuItemRow({ item }: MenuItemRowProps) {
  return (
    <View style={styles.row}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price.toFixed(2)} грн</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  name: {
    flex: 1,
    marginRight: 12,
    color: '#EDEFEE',
    fontSize: 18,
  },
  price: {
    color: '#F4CE14',
    fontSize: 18,
    fontWeight: '600',
  },
});
