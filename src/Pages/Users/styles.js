import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 100px;
  justify-content: center;
`;

export const List = styled.div`
  width: 500px;
  padding: 12px;
  border-radius: 5px;
  background: #fff;
`;

export const ListItem = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  padding: 12px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
`;

export const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const BtnGroup = styled.div`
  width: 80px;
  margin-left: auto;
  display: flex;
  justify-content: space-between;
  > button {
    margin-left: 10px;
  }
`;

export const Text = styled.p`
  font-size: 12px;
  text-align: center;
`;
