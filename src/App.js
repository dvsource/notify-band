import React from 'react';
import {Button, SafeAreaView, useColorScheme, View} from 'react-native';
import {
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {HorizontalLine} from './Components/HorizontalLine';
import {Section} from './Components/Section';

// TODO: Move to Functions
const pushNotify = () => {
  console.log('notify');
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View>
        <View>
          <Section title="Push Notification">
            <Button title="PUSH" onPress={pushNotify} />
          </Section>
        </View>
        <HorizontalLine />
        <View>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
