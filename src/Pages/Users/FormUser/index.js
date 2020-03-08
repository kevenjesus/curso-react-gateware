import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container, Headline, Form } from "./styles";
import TextField from "components/TextField";
import Button from "components/Button";
import * as userActions from "Pages/Users/actions";

function FormUser({
  saveUser,
  first_name,
  last_name,
  avatar,
  setFirstName,
  setLastName,
  setAvatar
}) {
  console.log(first_name);
  return (
    <Container>
      <Headline>Cadastrar novo usuário</Headline>
      <Form>
        <TextField
          type="text"
          value={first_name}
          onChange={setFirstName}
          placeholder="Primeiro nome"
          marginRight="10px"
        />
        <TextField
          type="text"
          value={last_name}
          onChange={setLastName}
          placeholder="Último nome"
          marginRight="10px"
        />
        <TextField
          type="text"
          value={avatar}
          onChange={setAvatar}
          placeholder="Link da foto"
          marginRight="10px"
        />
        <Button variant="primary" onClick={saveUser}>
          Salvar
        </Button>
      </Form>
    </Container>
  );
}

const mapStateToProps = state => state.users.userCurrent;
const mapDispatchToProps = dispatch =>
  bindActionCreators(userActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FormUser);
