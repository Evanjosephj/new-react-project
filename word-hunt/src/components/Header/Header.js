import React from 'react';
import './Header.css'
import { MenuItem, TextField, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import categories from "../../data/category";

const Header = ({ category, setCategory, word, setWord }) => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark", // Correct way to set dark mode
      primary: {
        main: '#fff',
      },
      background: {
        paper: "#121212", // Ensures the input field is dark
      },
      text: {
        primary: "#fff", // Ensures text remains white
      },
    },
  });

  const handleChange = (Language) => {
    setCategory(Language);
    setWord("");
  };

  return (
    <div className='header'>
      <span className='title'>{word ? word : "Word Hunt"}</span>
      <div className='inputs'>
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            label="Search a word"
            id="standard-basic"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            variant="outlined"
            InputLabelProps={{
              style: { color: "#fff" } // Ensures label is always white
            }}
            InputProps={{
              style: { color: "#fff", borderColor: "#fff" }, // Ensures text inside input is white
            }}
          />
          <TextField
            select
            className='select'
            label="Language"
            value={category}
            onChange={(e) => handleChange(e.target.value)}
            variant="outlined"
            InputLabelProps={{
              style: { color: "#fff" }
            }}
            InputProps={{
              style: { color: "#fff" }
            }}
          >
            {categories.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
