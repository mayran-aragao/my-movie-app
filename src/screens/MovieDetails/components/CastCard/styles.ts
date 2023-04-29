import styled from 'styled-components/native';

export const Container = styled.View`
  width: 150px;
  height: 230px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  margin-left: 5px;
  margin-right: 5px;
`;

export const ImageView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 100%;
  height: 100%;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  border-color: white;
  border-width: 0.5px;
`;

export const ActorInfo = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 4px;
  margin-bottom: 4px;
`;
