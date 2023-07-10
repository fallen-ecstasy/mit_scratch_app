import * as eva from '@eva-design/eva';
import { ApplicationProvider, IndexPath } from '@ui-kitten/components';
import { useSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import uuid from 'react-native-uuid';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { updateAction } from '../redux/actions/actions';
import { updateSprite } from '../redux/actions/sprites';
import configureStore from '../redux/configureStore';
import styles from '../styles/actions';


const store = configureStore();

const Actions = () => {

    
    const [ActionTab, setActionTab] = useState(1);
    const Actions = useSelector(state => state.actions);
    const dispatch = useDispatch();
    useEffect(()=>{},[Actions,dispatch,ActionTab]);
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
      }
    ]

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

    const [Selected1, setSelected1] = useState(Actions.action1);
    const [Selected2, setSelected2] = useState(Actions.action2);

    const saveActions = () =>{
      // ! Save Actions in Actions Reducer
      dispatch(updateAction("1",Selected1));
      dispatch(updateAction("2",Selected2));

      console.log("Actions SAVED");
      // ! Assign Action to particular Sprite
      dispatch(updateSprite(id,ActionTab.toString()));
      console.log("ACTION ASSIGNED");
      // ! Save into mainAction
      
    }


  return (
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
          var tmp =(ActionTab===1)?[...Selected1]:[...Selected2];
          tmp.push({
            id:uuid.v4(),
            title:item.title,
          });
          console.log(Selected1);
          console.log(Selected2);
          if(ActionTab===1) setSelected1(tmp);
          else setSelected2(tmp);
        }} title={item.title} />}
        keyExtractor={code => code.id}
        />
      </View>
      <View style={styles.actionsContainer}>
      <View style={styles.actionSelect}>
        <View style={styles.actionBtnGroup}>
        <Button title="A1" onPress={()=>setActionTab(1)}/>
        <Button title="A2" onPress={()=>setActionTab(2)}/>
        <Button title="Save"onPress={()=>saveActions()}/>
        </View>
      </View>
      <View style={styles.actionContainer}>
      <View style={styles.actionHeading}><Text style={{
          fontSize:25,
          textAlign:"center",
          color:"#fff"
        }}>Action {ActionTab}</Text></View>
        <FlatList
        data={(ActionTab===1)?Selected1:Selected2}
        renderItem={({item}) => <Item onPress={()=>{
          var tmp = (ActionTab===1)?[...Selected1]:[...Selected2];
          const ind = tmp.indexOf(item);
          if(ind > -1) tmp.splice(ind,1);
          if(ActionTab===1) setSelected1(tmp);
          else setSelected2(tmp);
        }} title={item.title} />}
        keyExtractor={code => code.id}
        />
      </View>
      </View>
    </View>
    
  )
}

export default () => (
  <Provider store={store}>
    <ApplicationProvider {...eva} theme={eva.light}>
      <Actions />
    </ApplicationProvider>
  </Provider>
);