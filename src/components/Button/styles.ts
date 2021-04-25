import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

type Variant = 'remove' | 'add';

const variantsContainer = {
  remove: css`
    background-color: #f44336;
  `,
  add: css`
    background-color: #00c700;
  `,
};

export interface VariantProps {
  variant?: Variant;
}

export const Container = styled(TouchableOpacity)<VariantProps>`
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 4px;

  ${({ variant }) => variantsContainer[variant || 'add']}
`;

export const Text = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;
