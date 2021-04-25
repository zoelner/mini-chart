import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 0.5;
  margin: 8px;
  margin-bottom: 16px;
`;

export const Image = styled.ImageBackground.attrs({
  imageStyle: {
    resizeMode: 'contain',
  },
})`
  height: 128px;
  background-color: #cecece;
  border-radius: 8px;
`;

export const Text = styled.Text.attrs({
  numberOfLines: 1,
})`
  margin: 5px 0;
  color: #333;
  font-size: 16px;
  font-weight: 700;
`;
