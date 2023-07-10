import React, { forwardRef, useEffect, useState } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import style from '../../styles/playground';

import SpriteObject from '../SpriteObject/sprite_object';

// * ACTIONS
// *  - Move X by 50
// *  - Move Y by 50
// *  - Rotate by 360 Clockwise
// *  - Rotate by 360 AntiClockwise
// *  - GoTo (0,0)
// !  - GoTo (x,y) Random
// *  - Say Hello
// *  - Increase size by 1.1x
// *  - Decrease size by 0.9x
// !  - Repeat

const Playground = forwardRef((props, ref) => {

  const [SSize, setSSize] = useState(1);
  
  const sprites = useSelector(state => state.sprites);
  useEffect(()=>{

  },[sprites])

  return (
    <View style={style.container}>
      {sprites.sprite.map((item) => (
        <SpriteObject items={item} />
      ))}
      {/* <Button onPress={moveLeft} title="MOVE LEFT"/> */}
    </View>
  );
})


export default Playground