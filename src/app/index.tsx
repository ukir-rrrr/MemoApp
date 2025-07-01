import { JSX } from 'react'
import { View, Text, SafeAreaView } from 'react-native'

const Index = (): JSX.Element => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        padding: 16 
      }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
          Hello World
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default Index