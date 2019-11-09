import React from "react";
import ListUsers from "../ListUsers";
import EditorUser from "../EditorUser";

function createData(lastName, position) {
  return { lastName, position };
}

const users = [
  createData('Малкович', 'Менеджер'),
  createData('Шестаковский', 'СЕО'),
  createData('Иванчук', 'Frontend-разработчик'),
  createData('Григорович', 'Backend-разработчик'),
];

function Main() {
  return (
    <>
      <ListUsers users={users} />
      <EditorUser mode="view" />
    </>
  );
}

export default Main;