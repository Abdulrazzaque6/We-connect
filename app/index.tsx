 import { View, Text } from 'react-native'
 import React, { useEffect } from 'react'
 import Login from './../components/Login'
 import { useNavigation } from 'expo-router'
 

import approach from "../app/customer/(tabs)/approch.tsx"

 export default function index() {
  const navigation=useNavigation();
  useEffect(()=>{
    navigation.setOptions({
      headerShown:false
    })
  })
   return (
     <View>
       <Login/>
     </View>
   )
 }




