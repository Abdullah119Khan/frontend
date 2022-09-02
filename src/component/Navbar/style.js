import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  logo: {
    fontSize: '20px',
    marginLeft: '10px',
    fontWeight: 'bold',
    color: 'blue',
    textDecoration: 'none'
  },
  toolBar: {}
}))