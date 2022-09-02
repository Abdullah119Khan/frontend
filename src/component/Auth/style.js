import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  paper: {
    marginTop: '20px',
    padding: theme.spacing(2)
  },
  avatar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginBottom: '20px'
  },
  login: {
    margin: '10px 0px'
  }
}))