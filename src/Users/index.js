import React, { useEffect, useState } from "react";
import { Container, List, ListItem, Avatar } from "./styles";

export default function Users() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getUsers() {
      const request = await fetch("https://reqres.in/api/users?page=2");
      const payload = await request.json();
      setData(payload.data);
    }
    getUsers();
  }, []);
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
