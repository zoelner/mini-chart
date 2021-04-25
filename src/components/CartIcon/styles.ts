import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  position: relative;
  margin-right: 10px;
`;

export const Badge = styled.View`
  position: absolute;
  right: 0;
  height: 16px;
  width: 16px;
  border-radius: 8px;
  background-color: #f44336;
`;

export const Count = styled.Text`
  color: #fff;
  text-align: center;
`;
