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
import { valid } from "@constl/ipa";
import ClientConstellation from "@constl/ipa";

import SurveyDataHandler from "../customHooks/surveyDataHandler";

import ग्राहक from "../केन्दीय-पानिकोलागिदूर्भाषहरु";
import {S4W_डाता} from "../केन्दीय-पानिकोलागिदूर्भाषहरु";
import {dataProps} from "../customHooks/surveyDataHandler";
import ListData from "../general/listData";


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

const PRECIP_DATA = {
  precip: null as string,
  lat: null as string,
  long: null as string,
  alti: null as string,
  temp: null as string
};

const my_$ग्राहक = new ग्राहक();

const PrecipForm = ({}) => {
  const [data, handleInputs, clearData] = SurveyDataHandler(PRECIP_DATA)
  const [तालिका_पहिचान, set_तालिका_पहिचान] = useState<string | undefined>(undefined);
  const [myData, setMyData] = useState([])
  const [getTable, setTable] = useState(false)
  //const [my_$ग्राहक, setmy_$ग्राहक] = useState(new ग्राहक());

  const tablePointer = async () => {
    await my_$ग्राहक.तालिका_पहिचान_पछ्याउनुहोस((तालिका_पहिचान?: string) =>
      {
        setTable(true)
        set_तालिका_पहिचान(तालिका_पहिचान)
    });
    // const मारो_डाता_बिर्सनुहोस् = await my_$ग्राहक.मारो_डाता_पछ्याउनुहोस्(
    //   (डाताहरु: valid.élémentDonnées<S4W_डाता>[]) =>  {
    //     setMyData(डाताहरु)
    //     //डाताहरु = डाताहरु
    //   }
    // );
  };
  useEffect(()=>{
    tablePointer()
  },[]);


  const handleSubmit = async () => {
    //if (!undefined) throw new Error("Not connected with Database.")
    await my_$ग्राहक.डाता_थप्नुहोस्(
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
    //actually this await is not required. We could simply add new data into the list.s
  }
  return (
    <div>
      <Grid container direction={'column'} spacing={2}>
        <Grid item xl={50} md={0} sm={50} xs={0}>
            <TextField
            required
            id="precip"
            label="Precip (mm)"
            name="precip"
            onChange={(e) => handleInputs('precip', e.target.value)}
            value={data.precip || ""}
            />
        </Grid>
        <Grid item xl={0} md={0} sm={0} xs={0}>
            <TextField
            required
            id="lat"
            label="Latitude"
            name="lat"
            onChange={(e) => handleInputs('lat', e.target.value)}
            value={data.lat || ""}
            />
        </Grid>
        <Grid item xl={0} md={0} sm={0} xs={0}>
            <TextField
            required
            id="long"
            label="Longitude"
            name="long"
            onChange={(e) => handleInputs('long', e.target.value)}
            value={data.long || ""}
            />
        </Grid>
        <Grid item xl={0} md={0} sm={0} xs={0}>
            <TextField
            required
            id="alti"
            label="Altitude"
            name="alti"
            onChange={(e) => handleInputs('alti', e.target.value)}
            value={data.alti || ""}
            />
        </Grid>
        <Grid item xl={0} md={0} sm={0} xs={0}>
            <TextField
            required
            id="temp"
            label="Test Field"
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
      {getTable && <ListData data={myData} grahak={my_$ग्राहक}/>}
    </div>
  );
}
export default PrecipForm;
