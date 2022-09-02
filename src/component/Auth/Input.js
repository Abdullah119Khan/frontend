import { Grid, TextField, InputAdornment, ButtonBase } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'

const Input = ({ half, name, label, autoFocus, handleChange, type, handleShowPassword}) => (
  <Grid item xs={12} sm={half ? 6 : 12}>
   <TextField
    onChange={handleChange}
    name={name}
    type={type}
    label={label}
    variant="outlined"
    autoFocus={autoFocus}
    required
    fullWidth
    InputProps={ name === 'password' ? {
      endAdornment: (
        <InputAdornment position="end">
         <ButtonBase onClick={handleShowPassword}>
          { type === 'password' ? <Visibility /> : <VisibilityOff />}
         </ButtonBase>
        </InputAdornment>
      )
    } : null}
   />
  </Grid>
)

export default Input;