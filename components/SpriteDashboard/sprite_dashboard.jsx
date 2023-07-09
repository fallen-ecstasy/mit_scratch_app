// TODO : Create Sprite Component

import { Link } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Image, Modal, Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { addSprite, deleteSprite } from '../../redux/actions/sprites';
import styles from '../../styles/spriteDashboard';

const SpriteDashboard = () => {

  const Sprites = useSelector(state => state.sprites);
  const dispatch = useDispatch();
  useEffect(()=>{
  },[dispatch,Sprites])

  const imageProvider = (type) =>{
    switch(type){
      case "cat":
        return <Image style={{height:100,width:100}} source={require("../../assets/cat.png")} />
      case "bell":
        return <Image style={{height:100,width:100}} source={require("../../assets/bell.png")} />
      case "baseball":
        return <Image style={{height:100,width:100}} source={require("../../assets/baseball.png")} />
      case "pico":
        return <Image style={{height:100,width:100}} source={require("../../assets/pico.png")} />
      case "gobo":
        return <Image style={{height:100,width:100}} source={require("../../assets/gobo.png")} />
      default:
        return <Image style={{height:100,width:100}} source={require("../../assets/cat.png")} />
    }
  }


  const [AddModal, setAddModal] = useState(false);
  const Card = ({type,id,onPressDel}) => {
        return(
        // <View style={styles.spriteCard}>
        //   <TouchableOpacity onPress={onPressDel} style={styles.badge}>
        //     <Icon name={"delete"} type={"material"} />
        //   </TouchableOpacity>
        //   <View style={styles.spriteView}>
        //       {imageProvider(type)}
        //   </View>
        //   <Link key={id} style={styles.addBtn} href={`/${id}`}><Text>Add Actions</Text></Link>
        //   </View>
        <View style={styles.spriteCard}>
          <TouchableOpacity onPress={onPressDel} style={styles.badge}>
            <Icon name={"delete"} type={"material"} />
          </TouchableOpacity>
          <View style={styles.spriteView}>
            {imageProvider(type)}
          </View>
          <Link key={id} style={styles.addBtn} href={`/${id}`}><Text>Add Actions</Text></Link>
        </View>
        );
  };


  return (
    <View style={styles.spriteDashboard}>

            <Modal
            visible = {AddModal}
            transparent = {true}
            onRequestClose={()=>{
              Alert.alert("Modal Closed!");
              setAddModal(false);
            }}
            style={styles.modal}
            >
              <View style={{
                width:"90%",
                height:"50%",
                backgroundColor:"#fff",
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"center"
                }}>
                <View style={styles.modalRow}>
                <Pressable onPress={()=>{
                  dispatch(addSprite("cat"));
                  console.log("CAT SPRITE ADDED");
                  setAddModal(false);
                }}>
                  <Image source={require(`../../assets/cat.png`)} />
                </Pressable>
                <Pressable onPress={()=>{
                  dispatch(addSprite("bell"));
                  console.log("BELL SPRITE ADDED");
                  setAddModal(false);
                }}>
                  <Image source={require(`../../assets/bell.png`)} />
                </Pressable>
                </View>
                <View style={styles.modalRow}>
                <Pressable onPress={()=>{
                  dispatch(addSprite("baseball"));
                  console.log("BASEBALL SPRITE ADDED");
                  setAddModal(false);
                }}>
                  <Image source={require(`../../assets/baseball.png`)} />
                </Pressable>
                <Pressable onPress={()=>{
                  dispatch(addSprite("pico"));
                  console.log("PICO SPRITE ADDED");
                  setAddModal(false);
                }}>
                  <Image source={require(`../../assets/pico.png`)} />
                </Pressable>
                </View>
                <View style={styles.modalRow}>
                <Pressable onPress={()=>{
                  dispatch(addSprite("gobo"));
                  console.log("GOBO SPRITE ADDED");
                  setAddModal(false);
                }}>
                  <Image source={require(`../../assets/gobo.png`)} />
                </Pressable>
                <Pressable onPress={()=>setAddModal(false)}>
                  <Icon name={"close"} type={"material"} size={70}/>
                </Pressable>
                </View>
              </View>
            </Modal>

      <View style={styles.container1}>
        <View style={styles.element}>
            <Text>Sprite :</Text>
            <TextInput style={styles.inputBox} editable={false} defaultValue='Cat'/>
        </View>
        <View style={styles.element}>
            <Text>X :</Text>
            <TextInput style={styles.inputBox} editable defaultValue={"0.0"}/>
        </View>
        <View style={styles.element}>
            <Text>Y :</Text>
            <TextInput style={styles.inputBox} editable defaultValue={"0.0"} />
        </View>
      </View>
      <ScrollView horizontal style={styles.container2}>
        {/* {Sprites.map((sprite)=>(
          <View id={`${sprite.id}`} style={styles.spriteCard}>
            
          <Badge status={"success"} badgeStyle={styles.badge} containerStyle={styles.badgeContainer}/>
          <View style={styles.spriteView}>
              
          </View>
          <Link key={sprite.id} style={styles.addBtn} href={`/${sprite.id}`}><Text>Add Actions</Text></Link>
          </View>
        ))} */}
        
        <FlatList
        data={Sprites.sprite}
        renderItem={({item}) => <Card style={{height:"100%"}} type={item.spriteType} id={item.spriteID} onPressDel={()=>{
          dispatch(deleteSprite(item));
          console.log(`${item.spriteType} DELETED!`);
        }} />}
        style={{height:"100%"}}
        horizontal
        keyExtractor={code => code.spriteID}
        />

        <View style={styles.addSpriteCard}>
            <Pressable style={{width:"100%",height:"100%", display:"flex",justifyContent:"center",alignItems:"center"}} onPress={()=>setAddModal(true)}>
              <Icon name="add" type="material" size={40}/>
            </Pressable>
        </View>
      </ScrollView>
    </View>
  )
}

export default SpriteDashboard;