import React, { useState } from "react";
import ListUsers from "../ListUsers";
import EditorUser from "../EditorUser";
import { connect } from 'react-redux';

function Main({users}) {
  const [state, setState] = useState({
    opened: false,
    user: null
  });
  const openEditor = (isOpen, user) => {
    setState({
      opened: user !== state.user ? isOpen : !isOpen,
      user: user !== state.user ? user : null
    })
  };
  return (
    <>
      <ListUsers users={users} openEditor={openEditor} />
      {state.opened && (
        <EditorUser user={state.user} readonly={true} />
      )}
    </>
  );
}

const mapStateToProps = state => ({
  users: state.users
});
export default connect(mapStateToProps)(Main);