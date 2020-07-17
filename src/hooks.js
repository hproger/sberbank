import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  menu: {
    display: 'flex',
  },
  menuItem: {
    textDecoration: 'none',
    color: 'inherit',
  },
  content: {
    flexWrap: 'nowrap',
  },
  listUsers: {
    maxWidth: 960,
  },
  tableHead: {
    fontWeight: '700',
  },
  rowUser: {
    cursor: 'pointer',
  },
  listItemText: {
    marginRight: '15px',
  },
  formControl: {
    minWidth: 201,
  },
  saveBack: {
    marginTop: 16,
  },
  saveAdd: {
    marginTop: 16,
  },
}));
