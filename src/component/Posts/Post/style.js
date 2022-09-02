import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  media: {
    paddingTop: '56.26%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  card: {
    borderRadius: 15,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    color: '#fff',
  },
  overlay2: {
    position: 'absolute',
    top: '10px',
    right: '10px',
  },
  details: {
    margin: '7px 10px'
  },
  title: {
    margin: '5px 10px',
  },
  action: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0px 10px'
  }
}))