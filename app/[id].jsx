import * as eva from '@eva-design/eva';
import { ApplicationProvider, IndexPath, Layout, Select, SelectItem } from '@ui-kitten/components';
import { useRouter, useSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import uuid from 'react-native-uuid';
import { Provider } from 'react-redux';
import configureStore from '../redux/configureStore';
import styles from '../styles/actions';


const store = configureStore();

const Actions = () => {

    
    
    const router = useRouter();
    const {id} = useSearchParams();
    const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0));
    const codes = [
      {
        id:'1',
        title:"Move Left by 50"
      },
      {
        id:'2',
        title:"Move Right by 50"
      },
      {
        id:'3',
        title:"Move Up by 50"
      },
      {
        id:'4',
        title:"Move Down by 50"
      },
      {
        id:'5',
        title:"Rotate Clockwise"
      },
      {
        id:'6',
        title:"Rotate Anticlockwise"
      },
      {
        id:'7',
        title:"Move to (0,0)"
      },
      {
        id:'8',
        title:"Say Hello!"
      },
      {
        id:'9',
        title:"Increase Size"
      },
      {
        id:'10',
        title:"Decrease Size"
      },
      {
        id:'11',
        title:"Repeat"
      }
    ]

    const [Selected, setSelected] = useState([]);

    const Item = ({title,onPress}) =>{
      return (
        <><Pressable
          onPressIn={()=>console.log("HOLD!")}
          onPressOut={()=>console.log("RELEASED!")}
          onPress={onPress}
          style={styles.codeBox}>
            
            <Text>{title}</Text>
          
          </Pressable></>
      )
    }


  return (
    <Provider store={store}>
    <View style={styles.container}>
      <View style={styles.codeContainer}>
        <View style={styles.codeHeading}><Text style={{
          fontSize:25,
          textAlign:"center",
          color:"#fff"
        }}>CODE</Text></View>
        <FlatList
        data={codes}
        renderItem={({item}) => <Item onPress={()=>{
          var tmp = [...Selected];
          tmp.push({
            id:uuid.v4(),
            title:item.title,
          });
          setSelected(tmp);
          console.log(Selected);
        }} title={item.title} />}
        keyExtractor={code => code.id}
        />
      </View>
      <View style={styles.actionsContainer}>
      <View style={styles.actionSelect}>
        

      <Layout
      style={{
        minHeight: 10,
        width:"100%",
        marginBottom:10
      }}
      level='1'
    >
      <Select
        selectedIndex={selectedIndex}
        onSelect={index => {
          return setSelectedIndex(index);
        }}
      >
        <SelectItem title='Option 1' />
        <SelectItem title='Option 2' />
        <SelectItem title='Option 3' />
      </Select>
    </Layout>
        <View style={styles.actionBtnGroup}>
        <Button title="Create"/>
        <Button title="Save"/>
        </View>
      </View>
      <View style={styles.actionContainer}>
      <View style={styles.actionHeading}><Text style={{
          fontSize:25,
          textAlign:"center",
          color:"#fff"
        }}>Action</Text></View>
        <FlatList
        data={Selected}
        renderItem={({item}) => <Item onPress={()=>{
          var tmp = [...Selected];
          const ind = tmp.indexOf(item);
          if(ind > -1) tmp.splice(ind,1);
          setSelected(tmp);
          console.log(Selected[0]);
        }} title={item.title} />}
        keyExtractor={code => code.id}
        />
      </View>
      </View>
    </View>
    </Provider>
  )
}

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
      <Actions />
  </ApplicationProvider>
);