import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";

export const Top = () => {
  const onClickAdmin = () => ('管理');
  const onClickAdmin = () => ('一般');

  return (
    <SContainer>
      <h2>TOPページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br/>
      <SecondaryButton>一般ユーザー</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
