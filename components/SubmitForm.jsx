import React, { useState } from 'react';
import { View, StyleSheet, ScrollView , SafeAreaView,Text} from 'react-native';
import { TextInput, Checkbox, Button , Surface} from 'react-native-paper';
import DropDown from "react-native-paper-dropdown";


const genderList = [
  {
    label: "Yes",
    value: "yes",
  },
  {
    label: "No",
    value: "no",
  }
];



export default function SubmitForm() {
  const [checked, setChecked] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [gender, setGender] = useState ("");
  const [colors, setColors] = useState("");
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView > 
      <View style={styles.headercontainer}>
        <Text style={styles.headTag}>Submit Your Writings</Text>
      </View>
      <TextInput label="Name Of the Story" />
      <TextInput label="Writer name" />
      <Surface >
            <DropDown
              label={"Events"}
              // mode={"outlined"}
              visible={showDropDown}
              showDropDown={() => setShowDropDown(true)}
              onDismiss={() => setShowDropDown(false)}
              value={gender}
              setValue={setGender}
              list={genderList}
              dropDownStyle={styles.containerStyle}
            />
           
        </Surface>
      <TextInput multiline numberOfLines={10} label="Body of the Story" />
      <Checkbox.Item
        label="* this story is written by me and it is unpublished totally."
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => setChecked(!checked)}
        uncheckedColor={'red'}
        />
      <View style={styles.divcontainer}>
        <Button mode="contained" disabled={false} onPress={() => console.log('Pressed')}>
          Submit my writing
        </Button>
      </View>
      <View style={{marginBottom: 20}}>

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
  headercontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  headTag: {
    fontSize: 40,
    textAlign: 'center',
  },
  divcontainer: {
    width: '94%',
    margin: 10,
  }, 
  containerStyle: {
    marginTop: 0,
    // borderWidth: 10
    // backgroundColor: "blue"
    // position: "absolute",
    // top: "100px"
  },
  safeContainerStyle: {
    
  },
});
