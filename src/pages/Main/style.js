import styled from 'styled-components/native';
import {Image} from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: #f4f4f4;
  justify-content: space-around;
`;

export const Sectionlogo = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ImageSty = styled(Image).attrs((props) => ({
  source: props.source,
}))`
  width: 110px;
  height: 110px;
`;

export const SectionButton = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ButtonSoS = styled.Text`
  color: #fff;
  font-size: 60px;
`;

export const ViewText = styled.View`
  background-color: #0c0c37;
  border-radius: 200px;
  width: 250px;
  height: 250px;
  justify-content: center;
  align-items: center;
  border: 1px solid #0c0c37;
`;

export const SectionStatus = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 0 50px;
`;

export const TextStatus = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #0c0c37;
`;
