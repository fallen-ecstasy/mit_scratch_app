import React, { useRef, useState } from 'react';
import { Animated, PanResponder, View } from 'react-native';

import style from '../../styles/playground';



const Playground = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const [Offset, setOffset] = useState({
    offsetX : 0,
    offsetY : 0,
  });

  const moveLeft = (x) => Animated.spring(
    pan,
    {toValue:{
      x: pan.x._offset + x,
      y: pan.y._offset,
    }, useNativeDriver:true},
  )

  const moveRight = (x) => Animated.spring(
    pan,
    {toValue:{
      x: pan.x._offset - x,
      y: pan.y._offset,
    }, useNativeDriver:true},
  )
  const moveUp = (y) => Animated.spring(
    pan,
    {toValue:{
      x: pan.x._offset,
      y: pan.y._offset - y,
    }, useNativeDriver:true},
  )

  const moveDown = (y) => Animated.spring(
    pan,
    {toValue:{
      x: pan.x._offset,
      y: pan.y._offset + y,
    }, useNativeDriver:true},
  )

  const [Seq, setSeq] = useState([]);

  // TODO : create addAnimation func for Seq
  // TODO : create removeAnimation func for Seq
  // TODO : create all animations as in Project and Test with Buttons

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),
      onPanResponderRelease: (_,gestureState) => {
        // Animated.spring(
        //   pan,
        //   {toValue:{x:0,y:0}, useNativeDriver:true},
        // ).start();
        pan.extractOffset();
      },
    }),
  ).current;



  return (
    <View style={style.container}>
      <Animated.View
        style={{
          transform:pan.getTranslateTransform(),
        }}
        {...panResponder.panHandlers}>
        <View style={style.box1} />
      </Animated.View>
      {/* <Button onPress={moveLeft} title="MOVE LEFT"/> */}
    </View>
  );
}

export default Playground