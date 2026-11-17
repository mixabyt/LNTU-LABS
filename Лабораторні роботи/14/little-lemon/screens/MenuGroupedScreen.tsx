import { SectionList, StyleSheet, Text, View } from 'react-native';
import type { SectionListData } from 'react-native';
import MenuItemRow from '../components/MenuItemRow';
import { categories, menuItems } from '../data/menu';
import type { CategoryInfo, MenuItem } from '../types/menu';

const sections: SectionListData<MenuItem, CategoryInfo>[] = categories.map(
  (category) => ({
    ...category,
    data: menuItems.filter((item) => item.category === category.key),
  }),
);

export default function MenuGroupedScreen() {
  return (
    <SectionList<MenuItem, CategoryInfo>
      style={styles.list}
      contentContainerStyle={styles.content}
      sections={sections}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <MenuItemRow item={item} />}
      renderSectionHeader={({ section }) => (
        <Text style={styles.sectionTitle}>{section.title}</Text>
      )}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      stickySectionHeadersEnabled={true}
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
  sectionTitle: {
    backgroundColor: '#EE9972',
    color: '#333333',
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  separator: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: '#EDEFEE55',
  },
});
