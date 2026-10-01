import { FlatList, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { MaxContentWidth, Spacing } from '@/constants/theme';

const products = [
  { id: '1', name: 'Wireless Headphones', category: 'Audio', price: '$79.99' },
  { id: '2', name: 'Portable Speaker', category: 'Audio', price: '$49.99' },
  { id: '3', name: 'Smart Watch', category: 'Wearables', price: '$129.99' },
  { id: '4', name: 'Phone Stand', category: 'Accessories', price: '$19.99' },
  { id: '5', name: 'USB-C Charger', category: 'Accessories', price: '$24.99' },
  { id: '6', name: 'Wireless Mouse', category: 'Computer', price: '$39.99' },
  { id: '7', name: 'Mechanical Keyboard', category: 'Computer', price: '$89.99' },
  { id: '8', name: 'Laptop Sleeve', category: 'Accessories', price: '$34.99' },
];

export function ProductList() {
  return (
    <ThemedView style={styles.screen}>
      <FlatList
        contentContainerStyle={styles.listContent}
        data={products}
        keyExtractor={(product) => product.id}
        ListHeaderComponent={
          <View style={styles.header}>
            <ThemedText type="subtitle">Expo Product Explorer</ThemedText>
            <ThemedText type="smallBold">Abdul Haseeb</ThemedText>
            <ThemedText themeColor="textSecondary">Roll No: i233077</ThemedText>
            <ThemedText type="subtitle" style={styles.productsTitle}>Products</ThemedText>
            <ThemedText themeColor="textSecondary">Browse our featured items</ThemedText>
          </View>
        }
        renderItem={({ item }) => (
          <ThemedView type="backgroundElement" style={styles.card}>
            <View style={styles.productInfo}>
              <ThemedText type="small" themeColor="textSecondary">
                {item.category}
              </ThemedText>
              <ThemedText type="smallBold">{item.name}</ThemedText>
            </View>
            <ThemedText type="smallBold">{item.price}</ThemedText>
          </ThemedView>
        )}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  listContent: {
    width: '100%',
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    padding: Spacing.four,
    gap: Spacing.three,
  },
  header: {
    gap: Spacing.one,
    marginBottom: Spacing.one,
  },
  productsTitle: {
    marginTop: Spacing.three,
  },
  card: {
    minHeight: 84,
    borderRadius: Spacing.three,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing.three,
  },
  productInfo: {
    flex: 1,
    gap: Spacing.one,
  },
});
