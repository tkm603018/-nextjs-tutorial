import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography, TextField, Button, Box, Grid,
  FormControl, Select, InputLabel, MenuItem
} from '@material-ui/core';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '30ch',
    border: 'solid 1px #fff',
    textAlign: 'center',
  },
  form: {
    padding: theme.spacing(3),
  },
  formControl: {
    width: '100%',
  },
  textField: {
    marginTop: '1rem',
  },
  submit: {
    marginTop: '3rem',
  }
}))

export default function CreateForm() {
  const classes = useStyles();

  const [title, setTitle] = React.useState('');
  const [selectedDate, setSelectedDate] = React.useState(new Date);
  const [selectedCategory, setSelectedCategory] = React.useState(10);

  const handleTitleChange = (e) => {setTitle(e.target.value)}
  const handleDateChange = (date) => { setSelectedDate(date) }
  const handleCategoryChange = (e) => { setSelectedCategory(e.target.value); };
  
  return (
    <Box className={classes.root}>
      <form
        className={classes.form}
        noValidate autoComplete="off"
        // onSubmit={Add}
      >
        <Box m={1}><Typography variant="h6">Input Form</Typography></Box>
        <TextField
          className={classes.textField}
          id="outlined-basic"
          label="Title"
          variant="outlined"
          value={title}
          onChange={handleTitleChange}
          fullWidth
        />
        <MaterialUIPickers
          selectedDate={selectedDate}
          handleDateChange={handleDateChange}
        />
        <SelectCategories
          category={selectedCategory}
          handleCategoryChange={handleCategoryChange}
        />
        <TextField
          className={classes.textField}
          id="outlined-basic"
          label="Price"
          variant="outlined"
          value={title}
          onChange={handleTitleChange}
          fullWidth
        />
        <Button
          className={classes.submit}
          type="submit"
          variant="outlined"
        >submit
        </Button>
      </form>
    </Box>
  )
}



const MaterialUIPickers = ({ selectedDate, handleDateChange }) => {
  const classes = useStyles();
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justifyContent="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  )
}


const SelectCategories = ({ selectedCategory, handleCategoryChange }) => {
  const classes = useStyles();
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedCategory}
          onChange={handleCategoryChange}
          autoWidth
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}
