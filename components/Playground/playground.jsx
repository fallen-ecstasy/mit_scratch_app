import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { Animated, Image, PanResponder, View } from 'react-native';

import style from '../../styles/playground';

import { useWindowDimensions } from "react-native";

// * ACTIONS
// *  - Move X by 50
// *  - Move Y by 50
// *  - Rotate by 360
// *  - GoTo (0,0)
// *  - GoTo (x,y) Random
// *  - Say Hello
// *  - Increase size by 1.1x
// *  - Decrease size by 0.9x
// *  - Repeat

const Playground = forwardRef((props, ref) => {
  const pan = useRef(new Animated.ValueXY()).current;
  const rot = useRef(new Animated.Value(1)).current;
  const [Offset, setOffset] = useState({
    offsetX : 0,
    offsetY : 0,
  });

  const [SSize, setSSize] = useState(60);

  const ss = useWindowDimensions();

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => pan.setOffset({x:pan.x._value,y:pan.y._value}),
      onPanResponderMove: (_,gesture) => {
        const ddx = gesture.dx+pan.x._offset;
        const ddy = gesture.dy+pan.y._offset;
        if(ddx > ((ss.width*0.95)/(-2)+(SSize/2)) && ddx < ((ss.width*0.95)/2)-(SSize/2))
          pan.x.setValue(gesture.dx);
        if(ddy > ((ss.height*0.5)/(-2)+(SSize/2)) && ddy < ((ss.height*0.5)/2)-(SSize/2))
          pan.y.setValue(gesture.dy);
      },
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    }),
  ).current;

  const moveLeft = (x) => Animated.spring(
    pan,
    {toValue:{
      x: pan.x._value - x,
      y: pan.y._value,
    }, useNativeDriver:false},
  )

  const moveRight = (x) => Animated.spring(
    pan,
    {toValue:{
      x: pan.x._value + x,
      y: pan.y._value,
    }, useNativeDriver:false},
  )
  const moveUp = (y) => Animated.spring(
    pan,
    {toValue:{
      x: pan.x._value,
      y: pan.y._value - y,
    }, useNativeDriver:false},
  )

  const moveDown = (y) => Animated.spring(
    pan,
    {toValue:{
      x: pan.x._value,
      y: pan.y._value + y,
    }, useNativeDriver:false},
  )

  const rotateClock = () => Animated.timing(
    rot,
    {
      toValue : 2,
      duration : 1000,
      useNativeDriver:false
    })

  const rotateAnti = () => Animated.timing(
    rot,
    {
      toValue : 0,
      duration : 1000,
      useNativeDriver:false
    })

  const [Seq, setSeq] = useState([]);

  useImperativeHandle(ref, () => ({
    moveLeft50() {
      console.log("LEFT 50");
      console.log(pan);
      moveLeft(50).start();
      console.log(pan);
      pan.flattenOffset();
      console.log(pan);
    },
    moveRight50() {
      console.log("RIGHT 50");
      console.log(pan);
      moveRight(50).start();
      console.log(pan);
      pan.flattenOffset();
      console.log(pan);
    },
    moveUp50() {
      console.log("UP 50");
      console.log(pan);
      moveUp(50).start();
      console.log(pan);
      pan.flattenOffset();
      console.log(pan);
    },
    moveDown50() {
      console.log("DOWN 50");
      console.log(pan);
      moveDown(50).start();
      console.log(pan);
      pan.flattenOffset();
      console.log(pan);
    },
    rotateClock() {
      console.log(rot);
      rotateClock().start(()=>rot.setValue(1));
      console.log(rot);
      rot.flattenOffset();
    },
    rotateAnti() {
      console.log(rot);
      rotateAnti().start(()=>rot.setValue(1));
      console.log(rot);
      rot.flattenOffset();
    }
  }))

  // TODO : create addAnimation func for Seq
  // TODO : create removeAnimation func for Seq
  // TODO : create all animations as in Project and Test with Buttons
    const interpolateZ = rot.interpolate({
      inputRange : [0,1,2],
      outputRange : ["-360deg","0deg","360deg"],
    })
  



  return (
    <View style={style.container}>
      <Animated.View
        style={[
          pan.getLayout(),
          {
            transform : [{rotateZ : interpolateZ}],
          }
        ]}
        {...panResponder.panHandlers}>
        <Image style={{
          height:SSize,
          width:SSize,
        }} source={require("../../assets/cat.png")} />
      </Animated.View>
      {/* <Button onPress={moveLeft} title="MOVE LEFT"/> */}
    </View>
  );
})

export default Playground