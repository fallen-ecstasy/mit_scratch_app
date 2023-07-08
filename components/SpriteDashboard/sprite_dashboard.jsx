// TODO : Create Sprite Component

import React from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { Badge, Button } from 'react-native-elements';
import styles from '../../styles/spriteDashboard';

const SpriteDashboard = () => {
  return (
    <View style={styles.spriteDashboard}>
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
        <View style={styles.spriteCard}>
            
            <Badge status={"success"} badgeStyle={styles.badge} containerStyle={styles.badgeContainer}/>
            <View style={styles.spriteView}>
                
            </View>
            <Button title="Add Actions"></Button>
        </View>
        <View style={styles.spriteCard}>
            <Badge status={"success"} badgeStyle={styles.badge} containerStyle={styles.badgeContainer}/>
            <View style={styles.spriteView}>
                
            </View>
            <Button title="Add Actions"></Button>
        </View>
        <View style={styles.addSpriteCard}>
            
        </View>
      </ScrollView>
    </View>
  )
}

export default SpriteDashboard;