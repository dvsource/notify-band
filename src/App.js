import React from 'react';
import {Button, SafeAreaView, useColorScheme, View} from 'react-native';
import PushNotification from 'react-native-push-notification';
import {
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {HorizontalLine} from './Components/HorizontalLine';
import {Section} from './Components/Section';

// TODO: Move to Functions
const pushNotify = () => {
  console.log('notify!!');
  PushNotification.localNotification({
    channelId: 'SS',
    foreground: false, // BOOLEAN: If the notification was received in foreground or not
    userInteraction: false, // BOOLEAN: If the notification was opened by the user from the notification area or not
    message: 'My Notification Message', // STRING: The notification message
    data: {}, // OBJECT: The push data or the defined userInfo in local notifications
  });
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
