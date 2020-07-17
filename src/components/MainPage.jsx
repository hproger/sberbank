import React, { useState } from 'react';
import ListUsers from './ListUsers';
import { EditorUser } from './EditorUser';

const MainPage = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <>
      <ListUsers openEditor={setSelectedUser} />
      {selectedUser && <EditorUser user={selectedUser} readonly />}
    </>
  );
};

export default MainPage;
