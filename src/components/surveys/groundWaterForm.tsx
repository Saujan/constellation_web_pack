import { useState, useEffect } from 'react';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';

import { proxy } from "@constl/ipa";
import { réseau } from "@constl/ipa";
import { client } from "@constl/ipa";

import SurveyDataHandler from "../customHooks/surveyDataHandler";

import ग्राहक from "../केन्दीय-पानिकोलागिदूर्भाषहरु";

export const मिति_चर_पहिचान =
  "/orbitdb/zdpuAocw3x74Fowyteo4dZUgUMfgjVT6CnSwdD6tjafWZHndF/ffddb796-081f-4388-b398-5d133a8220ff";
export const वर्षा_चर_पहिचान =
  "/orbitdb/zdpuAyrGwWvjWMDAwgkaEbaFFKkbnV8oNTZkbRmu8Bv7aqeKW/89e168cc-c766-4440-b14b-42a20929061e";
export const चित्र_चर_पहिचान =
  "/orbitdb/zdpuAqEG8YyVFZGpJrEuFfz9h53BKWJzidGYs52Ceut2K5Lcu/5c55ed36-72ef-40cb-bd2c-73bdd44f696a";
export const अकांश_चर_पहिचान =
  "/orbitdb/zdpuAxz7LwsesBqhBMyrR9CDSn5EnSgfmvpox9MtTWkfYjRZm/82ebd39c-7b26-42a0-8bc6-96473ab46c3f";
export const देशान्तर_चर_पहिचान =
  "/orbitdb/zdpuAzCrZnQXzLm13nnGe5VXQkxqZPcYdCgvGdox9tH1BZGmi/9cdfc65e-4c5e-41d3-9970-ce1937be1b52";
export const उचाई_चर_पहिचान =
  "/orbitdb/zdpuB2RbnpNQpASXpDTf4s2TNtUVMBTvaXr4dqzLmmjeP7mP5/a0737ba8-153c-48fc-92d6-42c4aaa6a957";
export const temp_चर_पहिचान =
  "/orbitdb/zdpuAvXULWKhmXGChfg39qRmaaqxbynHXkbe9vtNYNoGy6upt/d236f721-ca55-4b8b-95c7-345fcf520962"; //Note: provided from constellation web app
export const बर्स_चर_पहिचान= '/orbitdb/zdpuAmKN8zCSUDBPZgsfh66qv3PgYWt8rYoxs5LRYZJ9HWCg1/3a472ed1-473e-4555-beeb-c52fdd687d97'

// कुञ्जी-शब्द
export const S4W_कुञ्जी_शब्द =
  "/orbitdb/zdpuAw8oLTwmWjLSaoMge7gQ2DXjZprBsv8MKohcdMtZe3yCv/847ef8d4-884f-4d09-85aa-5423be9eed27";
export const S4W_तालिका_अद्वितीय_कुञ्जी_शब्द = "वर्षा अवलोकन को तालिका";

// स्तम्भ
export const मिति_स्तम्भ_पहिचान = "मिति";
export const चित्र_स्तम्भ_पहिचान = "चित्र";
export const वर्षा_स्तम्भ_पहिचान = "वर्षा";
export const अकांश_स्तम्भ_पहिचान = "अकांश";
export const देशान्तर_स्तम्भ_पहिचान = "देशान्तर";
export const उचाई_स्तम्भ_पहिचान = "उचाई";
export const temp_स्तम्भ_पहिचान = "temp"; // Why adding स्तम्भ_पहिचान ? Is it compulsory ? Or just Convention ?


// export const डाता_संरचना: réseau.schémaBd = {
//   motsClefs: [S4W_कुञ्जी_शब्द],
//   licence: "ODbl-1_0", //त्यो तपाईँलाई जस्तो मन पर्छ
//   tableaux: [
//     {
//       idUnique: S4W_तालिका_अद्वितीय_कुञ्जी_शब्द,
//       cols: [
//         {
//           idVariable: मिति_चर_पहिचान,
//           idColonne: मिति_स्तम्भ_पहिचान,
//         },
//         {
//           idVariable: वर्षा_चर_पहिचान,
//           idColonne: वर्षा_स्तम्भ_पहिचान,
//         },
//         {
//           idVariable: चित्र_चर_पहिचान,
//           idColonne: चित्र_स्तम्भ_पहिचान,
//         },
//         {
//           idVariable: अकांश_चर_पहिचान,
//           idColonne: अकांश_स्तम्भ_पहिचान,
//         },
//         {
//           idVariable: देशान्तर_चर_पहिचान,
//           idColonne: देशान्तर_स्तम्भ_पहिचान,
//         },
//         {
//           idVariable: उचाई_चर_पहिचान,
//           idColonne: उचाई_स्तम्भ_पहिचान,
//         },
//         {
//           idVariable: temp_चर_पहिचान,
//           idColonne: temp_स्तम्भ_पहिचान
//         }
//       ],
//     },
//   ],
// };


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
  //const yy = new ग्राहक();
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
