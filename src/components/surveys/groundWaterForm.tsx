import { useEffect } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';


import SurveyDataHandler from "../customHooks/surveyDataHandler";

const GROUND_WATER_DATA = {
  gw_first_msmt: null as string,
  gw_mw_rp_elev_m: null as string,
  gw_mw_rpgs_m: null as string,
  gw_mw_oc_m: null as string,
  gw_mw_depth_m: null as string,
  gw_parameters: null as string,
  gw_level_image: null as string,
  gw_level_image2: null as string,
  gw_level_m: null as string
};

const GroundWaterForm = ({}) => {
  const [data, handleInputs] = SurveyDataHandler(null)

  useEffect(()=>{
  });


  const handleSubmit = () => {
    console.log(data)
  }

  return (
    <>
      <Grid container direction={'column'} spacing={2}>
        <Grid item xl={50} md={0} sm={50} xs={0}>
            <TextField
            required
            id="gw_first_msmt"
            label="gw_first_msmt"
            name="gw_first_msmt"
            onChange={(e) => handleInputs('gw_first_msmt', e.target.value)}
            />
        </Grid>
        <Grid item xl={0} md={0} sm={0} xs={0}>
            <TextField
            required
            id="gw_mw_rp_elev_m"
            label="gw_mw_rp_elev_m"
            name="gw_mw_rp_elev_m"
            onChange={(e) => handleInputs('gw_mw_rp_elev_m', e.target.value)}
            />
        </Grid>
        <Grid item xl={0} md={0} sm={0} xs={0}>
            <TextField
            required
            id="gw_mw_rpgs_m"
            label="gw_mw_rpgs_m"
            name="gw_mw_rpgs_m"
            onChange={(e) => handleInputs('gw_mw_rpgs_m', e.target.value)}
            />
        </Grid>
        <Grid item xl={0} md={0} sm={0} xs={0}>
            <TextField
            required
            id="gw_mw_oc_m"
            label="gw_mw_oc_m"
            name="gw_mw_oc_m"
            onChange={(e) => handleInputs('gw_mw_oc_m', e.target.value)}
            />
        </Grid>
        <Grid item xl={0} md={0} sm={0} xs={0}>
            <TextField
            required
            id="gw_mw_depth_m"
            label="gw_mw_depth_m"
            name="gw_mw_depth_m"
            onChange={(e) => handleInputs('gw_mw_depth_m', e.target.value)}
            />
        </Grid>
            <Grid item xl={0} md={0} sm={0} xs={0}>
            <TextField
            required
            id="gw_parameters"
            label="gw_parameters"
            name="gw_parameters"
            onChange={(e) => handleInputs('gw_parameters', e.target.value)}
            />
        </Grid>
        <Grid item xl={0} md={0} sm={0} xs={0}>
            <TextField
            required
            id="gw_level_image"
            label="gw_level_image"
            name="gw_level_image"
            onChange={(e) => handleInputs('gw_level_image', e.target.value)}
            />
        </Grid>
        <Grid item xl={0} md={0} sm={0} xs={0}>
            <TextField
            required
            id="gw_level_image2"
            label="gw_level_image2"
            name="gw_level_image2"
            onChange={(e) => handleInputs('gw_level_image2', e.target.value)}
            />
        </Grid>
        <Grid item xl={0} md={0} sm={0} xs={0}>
            <TextField
            required
            id="gw_level_m"
            label="gw_level_m"
            name="gw_level_m"
            onChange={(e) => handleInputs('gw_level_m', e.target.value)}
            />
        </Grid>
        <Grid item xl={0} md={0} sm={0} xs={0}>
          <Button variant="outlined" size="medium" onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
export default GroundWaterForm;
