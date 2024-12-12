import { useTheme } from '@mui/material/styles';
import { Box, FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import { useState } from 'react';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight: personName.includes(name) ? theme.typography.fontWeightMedium : theme.typography.fontWeightRegular,
  };
}

export default function ClientSelector() {
  const theme = useTheme();
  const [personName, setPersonName] = useState('');
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    const { target: { value } } = event;
    setPersonName(value);
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden' // Prevents scrollbars on the box itself
    }}
    >
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Client</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
          open={open}
          onOpen={handleOpen}
          onClose={handleClose}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}
