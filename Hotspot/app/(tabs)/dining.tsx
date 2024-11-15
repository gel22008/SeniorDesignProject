import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const Dining = () => {
  return (
    // Safe Area View to ensure content is within boundaries of device
    // (i.e. not behind the notch or status bar)
    <SafeAreaView>
      <Text>Dining</Text>
    </SafeAreaView>
  )
}

export default Dining