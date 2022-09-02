import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1)
    }
  },
  paper: {
    padding: theme.spacing(2)
  },
  form: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  fileBtn: {
    width: '95%'
  },
  submitButton: {
    margin: '10px 0px'
  }
}))