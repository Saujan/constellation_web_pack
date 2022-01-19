import { useState, useEffect, useContext } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import SurveyDataHandler from "../customHooks/surveyDataHandler";

import { DatabaseContext } from "../../context/databaseContext";


const PRECIP_DATA = {
  precip: null as string,
  lat: null as string,
  long: null as string,
  alti: null as string,
  temp: null as string
};

//const my_$ग्राहक = new ग्राहक();

const PrecipForm = ({}) => {
  const { मारो_ग्राहक } = useContext(DatabaseContext);
  const [data, handleInputs, clearData] = SurveyDataHandler(PRECIP_DATA)
  const [तालिका_पहिचान, set_तालिका_पहिचान] = useState<string | undefined>(undefined);

  const tablePointer = async () => {
    const मौसम_तालिका_पहिचान_बिर्सनुहोस् = await मारो_ग्राहक.मौसम_तालिका_पहिचान_पछ्याउनुहोस((तालिका_पहिचान?: string) =>
      {
        set_तालिका_पहिचान(तालिका_पहिचान)
    });
    return मौसम_तालिका_पहिचान_बिर्सनुहोस्
  };
  useEffect(()=>{
    tablePointer()
  },[]);


  const handleSubmit = async () => {
    //if (!undefined) throw new Error("Not connected with Database.")
    await मारो_ग्राहक.मौसम_डाता_थप्नुहोस्(
      तालिका_पहिचान,
      new Date(),
      //चित्र,
      Number.parseFloat(data.precip),
      Number.parseFloat(data.lat),
      Number.parseFloat(data.long),
      Number.parseFloat(data.alti),
      Number.parseFloat(data.temp)
    );
    clearData()
    alert('Data is submitted. Please check in list.')
    //actually this await is not required. We could simply add new data into the list.s
  }
  return (
    <div>
      <Grid container direction={'column'} spacing={2}>
        <Grid item xl={50} md={0} sm={50} xs={0}>
            <TextField
            required
            id="precip"
            label="वर्षा (मि॰ मी॰)"
            name="precip"
            onChange={(e) => handleInputs('precip', e.target.value)}
            value={data.precip || ""}
            />
        </Grid>
        <Grid item xl={0} md={0} sm={0} xs={0}>
            <TextField
            required
            id="lat"
            label="अकांश"
            name="lat"
            onChange={(e) => handleInputs('lat', e.target.value)}
            value={data.lat || ""}
            />
        </Grid>
        <Grid item xl={0} md={0} sm={0} xs={0}>
            <TextField
            required
            id="long"
            label="देशान्तर"
            name="long"
            onChange={(e) => handleInputs('long', e.target.value)}
            value={data.long || ""}
            />
        </Grid>
        <Grid item xl={0} md={0} sm={0} xs={0}>
            <TextField
            required
            id="alti"
            label="उचाई"
            name="alti"
            onChange={(e) => handleInputs('alti', e.target.value)}
            value={data.alti || ""}
            />
        </Grid>
        <Grid item xl={0} md={0} sm={0} xs={0}>
            <TextField
            required
            id="temp"
            label="तापमान"
            name="temp"
            onChange={(e) => handleInputs('temp', e.target.value)}
            value={data.temp || ""}
            />
        </Grid>
        <Grid item xl={0} md={0} sm={0} xs={0}>
          <Button variant="outlined" size="medium" onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>

    </div>
  );
}
export default PrecipForm;
