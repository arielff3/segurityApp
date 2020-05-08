import React from 'react';
import logo from '~/assets/logo.jpg';
import Pulse from 'react-native-pulse';
import SendSMS from 'react-native-sms';
import {TouchableOpacity} from 'react-native';
import {
  Container,
  SectionButton,
  ButtonSoS,
  ViewText,
  Sectionlogo,
  ImageSty,
  SectionStatus,
  TextStatus,
} from './style.js';

export default function Main({navigation}) {
  const someFunction = () => {
    SendSMS.send(
      {
        body: 'The default body of the SMS!',
        recipients: ['+557399731155'],
        successTypes: ['sent', 'queued'],
        allowAndroidSendWithoutReadPermission: true,
      },
      (completed, cancelled, error) => {
        console.log(
          'SMS Callback: completed: ' +
            completed +
            ' cancelled: ' +
            cancelled +
            'error: ' +
            error,
        );
      },
    );
  };
  return (
    <Container>
      <Sectionlogo>
        <ImageSty source={logo} />
      </Sectionlogo>
      <TouchableOpacity onPress={() => someFunction()}>
        <SectionButton>
          <Pulse
            color="#0c0c37"
            numPulses={2}
            diameter={300}
            speed={20}
            duration={9000}
          />
          <ViewText>
            <ButtonSoS>S.O.S</ButtonSoS>
          </ViewText>
        </SectionButton>
      </TouchableOpacity>
      <SectionStatus>
        <TextStatus>
          Clique no botão para enviar um pedido de socorro.
        </TextStatus>
      </SectionStatus>
    </Container>
  );
}
