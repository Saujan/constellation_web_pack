import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type selectProps = {
  id: string,
  name: string,
  value: string,
  dropDownName: string,
  menuItems: {
    name: string,
    value: string
  }[],
  onChangeHandler: (id: string, value: string) => void
}

export default function CustomSelect(props: selectProps) {
  const handleChange = (event: SelectChangeEvent) => {
    props.onChangeHandler(event.target.name, event.target.value)
  };

  const renderMenuItem = (item: {value: string, name: string}) => {
    return (
      <MenuItem key={item.value} value={item.value}>
        {item.name}
      </MenuItem>
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 250 }}>
        <InputLabel id="demo-simple-select-autowidth-label">{props.dropDownName}</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id={props.id}
          value={props.value}
          name={props.name}
          onChange={handleChange}
          autoWidth
          label={props.name}
        >
          {props.menuItems.map((item) => renderMenuItem(item))}
        </Select>
      </FormControl>
    </div>
  );
}
