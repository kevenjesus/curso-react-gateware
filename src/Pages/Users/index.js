import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container, List, ListItem, Avatar, BtnGroup, Text } from "./styles";
import FormUser from "./FormUser";
import Button from "components/Button";
import Loading from "components/Loading";
import * as usersActions from "./actions";

function Users({ data, getUsers, loading, removeUser, selectedUSer }) {
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  console.log(data);

  return (
    <Container>
      <List>
        <FormUser />

        {loading ? (
          <Loading text="Buscando usuários..." />
        ) : data.length === 0 ? (
          <Text>Nenhum usuario cadastrado</Text>
        ) : (
          data.map(d => (
            <ListItem key={d.id}>
              <Avatar src={d.avatar} alt="" />
              <span>{`${d.first_name} ${d.last_name}`}</span>

              <BtnGroup>
                <Button
                  type="button"
                  onClick={() => selectedUSer(d)}
                  variant="primary"
                  size="20px"
                >
                  Editar
                </Button>
                <Button
                  type="button"
                  onClick={() => removeUser(d)}
                  variant="primary"
                  size="20px"
                >
                  x
                </Button>
              </BtnGroup>
            </ListItem>
          ))
        )}
      </List>
    </Container>
  );
}

const mapStateToProps = state => state.users;
const mapDispatchToProps = dispatch =>
  bindActionCreators(usersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Users);
