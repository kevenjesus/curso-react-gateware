import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container, List, ListItem, Avatar } from "./styles";
import * as usersActions from "./actions";

function Users({ data, getUsers }) {
  useEffect(() => {
    getUsers();
  }, [getUsers]);
  return (
    <Container>
      <List>
        {data.map(d => (
          <ListItem key={d.id}>
            <Avatar src={d.avatar} alt="" />
            <span>{`${d.first_name} ${d.last_name}`}</span>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

const mapStateToProps = state => state.users;
const mapDispatchToProps = dispatch =>
  bindActionCreators(usersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Users);
