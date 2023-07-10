import React, { useEffect, useRef, useState } from 'react';
import { Animated, PanResponder, useWindowDimensions } from 'react-native';
import { useSelector } from 'react-redux';

const SpriteObject = ({items}) => {
    const pan = useRef(new Animated.ValueXY()).current;
    const rot = useRef(new Animated.Value(1)).current;
    const scale = useRef(new Animated.Value(1)).current;

    console.log(items);

    const {play} = useSelector(state => state.mainAction);

    useEffect(()=>{
      if(play===1) sampleAnimation();
      else {
        sampleAnimationReset();
        moveOO().start();
      }
    },[play])

    const [SpriteData, setSpriteData] = useState({
        type:-1,
        id:-1,
        actionSeqID : -1,
    })
    

    const [badgeVisible, setbadgeVisible] = useState(false)

  const ss = useWindowDimensions();
  const [SSize, setSSize] = useState(1);

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

  const moveOO = () => Animated.spring(
    pan,
    {
      toValue: {x:0, y:0},
      useNativeDriver: false,
    }
  )
  const sayHello = () => {
    setbadgeVisible(true);
    setTimeout(()=>setbadgeVisible(false), 2000);
  }
  const incSize = () => Animated.spring(
    scale,
    {
      toValue : (scale._value*1.1),
      useNativeDriver:false,
    }
  )
  const decSize = () => Animated.spring(
    scale,
    {
      toValue : (0.9*scale._value),
      useNativeDriver:false,
    }
  )

  const sampleAnimation = () =>{
    setTimeout(()=>{
      rotateClock().start(() => rot.setValue(1));
      rot.flattenOffset();
    },0);

    setTimeout(()=>{
      moveRight(50).start();
      pan.flattenOffset();
    },1000);
    
    setTimeout(()=>{
      moveDown(50).start();
      pan.flattenOffset();
    },2000);
    
    setTimeout(()=>{
      moveRight(50).start();
    pan.flattenOffset();
    },3000);
    
    setTimeout(()=>{
      moveDown(50).start();
      pan.flattenOffset();
    },4000);
    setTimeout(()=>{
      moveOO().start();
      pan.flattenOffset();
    },5000);
    
    setTimeout(()=>{
      rotateClock().start(()=>rot.setValue(1));
      rot.flattenOffset();
    },6000);
    setTimeout(()=>{
      rotateAnti().start(()=>rot.setValue(1));
      rot.flattenOffset();
    },7000);
  }

  const sampleAnimationReset = () =>{
      moveRight(50).reset();
      pan.flattenOffset();
    
      moveDown(50).reset();
      pan.flattenOffset();
    
      moveRight(50).reset();
      pan.flattenOffset();
    
      moveDown(50).reset();
      pan.flattenOffset();

      moveOO().reset();
      pan.flattenOffset();
    
      rotateClock().reset();
      rot.flattenOffset();

      rotateAnti().reset();
      rot.flattenOffset();

  }

  const [Seq, setSeq] = useState([]);

  // useImperativeHandle(ref, () => ({
  //   moveLeft50() {
  //     console.log("LEFT 50");
  //     console.log(pan);
  //     moveLeft(50).start();
  //     console.log(pan);
  //     pan.flattenOffset();
  //     console.log(pan);
  //   },
  //   moveRight50() {
  //     console.log("RIGHT 50");
  //     console.log(pan);
  //     moveRight(50).start();
  //     console.log(pan);
  //     pan.flattenOffset();
  //     console.log(pan);
  //   },
  //   moveUp50() {
  //     console.log("UP 50");
  //     console.log(pan);
  //     moveUp(50).start();
  //     console.log(pan);
  //     pan.flattenOffset();
  //     console.log(pan);
  //   },
  //   moveDown50() {
  //     console.log("DOWN 50");
  //     console.log(pan);
  //     moveDown(50).start();
  //     console.log(pan);
  //     pan.flattenOffset();
  //     console.log(pan);
  //   },
  //   rotateClock() {
  //     console.log(rot);
  //     rotateClock().start(()=>rot.setValue(1));
  //     console.log(rot);
  //     rot.flattenOffset();
  //   },
  //   rotateAnti() {
  //     console.log(rot);
  //     rotateAnti().start(()=>rot.setValue(1));
  //     console.log(rot);
  //     rot.flattenOffset();
  //   },
  //   moveOO() {
  //     console.log(pan);
  //     moveOO().start();
  //     console.log(pan);
  //     pan.flattenOffset();
  //   },
  //   sayHello(){
  //     sayHello();
  //   },
  //   incSize(){
  //     incSize().start();
  //     scale.flattenOffset();
  //   },
  //   decSize(){
  //     decSize().start();
  //     scale.flattenOffset();
  //   }
  // }))

  // TODO : create addAnimation func for Seq
  // TODO : create removeAnimation func for Seq
  // TODO : create all animations as in Project and Test with Buttons
    const interpolateZ = rot.interpolate({
      inputRange : [0,1,2],
      outputRange : ["-360deg","0deg","360deg"],
    })

    const imageProvider = (type) =>{
      if(type === "cat")
        return <Animated.Image style={{
          height:60,
          width:60,
        }} source={require("../../assets/cat.png")} />
        if(type === "bell")
        return <Animated.Image style={{
          height:60,
          width:60,
        }} source={require("../../assets/bell.png")} />
        if(type === "baseball")
        return <Animated.Image style={{
          height:60,
          width:60,
        }} source={require("../../assets/baseball.png")} />
        if(type === "pico")
        return <Animated.Image style={{
          height:60,
          width:60,
        }} source={require("../../assets/pico.png")} />
        if(type === "gobo")
        return <Animated.Image style={{
          height:60,
          width:60,
        }} source={require("../../assets/gobo.png")} />
    }

    return (
    <Animated.View
        style={[
            pan.getLayout(),
            {
            transform : [{rotateZ : interpolateZ},
            {scale:scale}],
        }]}
        {...panResponder.panHandlers}>
        {imageProvider(items.spriteType)}
        {(badgeVisible)?(<Badge badgeStyle={{}} containerStyle={{
          position:"absolute",
          top:-10,
          left:SSize-30,
        }} value={"Hello!"}/>):(<></>)}
      </Animated.View>
  )
}

export default SpriteObject