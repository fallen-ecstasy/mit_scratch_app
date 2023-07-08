import React from 'react'
import { Image, View } from 'react-native'
import { Button } from 'react-native-elements'
import styles from '../../styles/menuBar'

const MenuBar = () => {
  return (
    <View style={styles.menuContainer}>
      <Image style={styles.logo} source={require("../../assets/logo.png")} />
      <Button style={styles.aboutBtn} title={"About"}></Button>
    </View>
  )
}

export default MenuBar