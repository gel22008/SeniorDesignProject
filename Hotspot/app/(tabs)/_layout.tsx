import { Tabs } from 'expo-router';
import { Image } from 'react-native';
import React from 'react'

const TabsLayout = () => {
  return (
    <Tabs
        // Set the initial route name to "dining"
        initialRouteName="dining"
    >
        <Tabs.Screen
        name="dining"
        options={{
          title: 'Dining',
          tabBarShowLabel: true,
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Image
            //   source={}
              style={{width: 24, height: 24, tintColor: color}}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat',
          tabBarShowLabel: true,
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Image
            //   source={}
              style={{width: 24, height: 24, tintColor: color}}
            />
          ),
        }}
        />
      <Tabs.Screen
        name="summary"
        options={{
          title: 'Summary',
          tabBarShowLabel: true,
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Image
            //   source={}
              style={{width: 24, height: 24, tintColor: color}}
            />
          ),
        }}
        />
        <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarShowLabel: true,
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Image
            //   source={}
              style={{width: 24, height: 24, tintColor: color}}
            />
          ),
        }}
        />
    </Tabs>
  )
}

export default TabsLayout