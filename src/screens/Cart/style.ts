import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 16px;
  background-color: #fefefe;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const CartItem = styled.View`
  height: 40px;
  flex-direction: row;
  margin-bottom: 16px;

  align-items: center;
  justify-content: space-between;
`;

export const CartItemImage = styled.View`
  height: 40px;
  width: 40px;
  background-color: #cecece;
  border-radius: 4px;
`;

export const CartItemText = styled.Text``;
