import React, { useState, useEffect } from 'react';
import { View, StyleSheet ,  ScrollView , SafeAreaView,} from 'react-native';
import { DataTable } from 'react-native-paper';

export default function List_writings() {
  const [page, setPage] = useState(0);
  const [numberOfItemsPerPageList] = useState([2, 5, 10, 20]);
  const [itemsPerPage, onItemsPerPageChange] = useState(numberOfItemsPerPageList[0]);
  const [items] = useState([
    { key: 1, name: 'Cupcake', calories: 356, fat: 16 },
    { key: 2, name: 'Eclair', calories: 262, fat: 16 },
    { key: 3, name: 'Frozen yogurt', calories: 159, fat: 6 },
    { key: 5, name: 'Gingerbread', calories: 305, fat: 3.7 },
    { key: 6, name: 'Gingerbread', calories: 305, fat: 3.7 },
    { key: 7, name: 'Gingerbread', calories: 305, fat: 3.7 },
    { key: 8, name: 'Gingerbread', calories: 305, fat: 3.7 },
    { key: 9, name: 'Gingerbread', calories: 305, fat: 3.7 },
    { key: 10, name: 'Gingerbread', calories: 305, fat: 3.7 },
    { key: 11, name: 'Gingerbread', calories: 305, fat: 3.7 },
    { key: 12, name: 'Gingerbread', calories: 305, fat: 3.7 },
    { key: 13, name: 'Gingerbread', calories: 305, fat: 3.7 },
    { key: 14, name: 'Gingerbread', calories: 305, fat: 3.7 },
    { key: 15, name: 'Gingerbread', calories: 305, fat: 3.7 },
    { key: 16, name: 'Gingerbread', calories: 305, fat: 3.7 },
    { key: 17, name: 'Gingerbread', calories: 305, fat: 3.7 },
    { key: 18, name: 'Gingerbread', calories: 305, fat: 3.7 },
    { key: 19, name: 'Gingerbread', calories: 305, fat: 3.7 },
    { key: 20, name: 'Gingerbread', calories: 305, fat: 3.7 },
    { key: 21, name: 'Gingerbread', calories: 305, fat: 3.7 },
    { key: 22, name: 'Gingerbread', calories: 305, fat: 3.7 },
  ]);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <ScrollView >
      <SafeAreaView > 
    <View style={styles.container}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Dessert</DataTable.Title>
          <DataTable.Title numeric>Calories</DataTable.Title>
          <DataTable.Title numeric>Fat</DataTable.Title>
        </DataTable.Header>
        {items.slice(from, to).map((item) => (
          <DataTable.Row key={item.key}>
            <DataTable.Cell>{item.name}</DataTable.Cell>
            <DataTable.Cell numeric>{item.calories}</DataTable.Cell>
            <DataTable.Cell numeric>{item.fat}</DataTable.Cell>
          </DataTable.Row>
        ))}
        <DataTable.Pagination
          page={page}
          numberOfPages={Math.ceil(items.length / itemsPerPage)}
          onPageChange={(page) => setPage(page)}
          label={`${from + 1}-${to} of ${items.length}`}
          numberOfItemsPerPageList={numberOfItemsPerPageList}
          numberOfItemsPerPage={itemsPerPage}
          onItemsPerPageChange={onItemsPerPageChange}
          showFastPaginationControls
          selectPageDropdownLabel={'Rows per page'}
        />
      </DataTable>
    </View>
    </SafeAreaView> 
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
