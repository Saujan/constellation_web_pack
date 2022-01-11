import { useState, useEffect } from 'react';

import { valid } from "@constl/ipa";
import PrecipForm from "./precipForm";
import GroundWaterForm from "./groundWaterForm";

import CustomSelect from "../customSelect"
import BasicTable from '../general/generalTable';
import ग्राहक from "../केन्दीय-पानिकोलागिदूर्भाषहरु";
import {S4W_डाता} from "../केन्दीय-पानिकोलागिदूर्भाषहरु";

const my_$ग्राहक = new ग्राहक();

const SURVEYS = [
  {value: 'precip', name: 'Precip'},
  {value: 'ground_water', name: 'Ground Water(Under Construction)'},
]

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

const SelectForm = ({}) => {
  //const yy = new ग्राहक();
  const [selectedForm, selectForm] = useState(SURVEYS[0].value)
  const [तालिका_पहिचान, set_तालिका_पहिचान] = useState<string | undefined>(undefined);
  const [myData, setMyData] = useState([])

  // const tablePointer = async () => {
  //   await my_$ग्राहक.तालिका_पहिचान_पछ्याउनुहोस((तालिका_पहिचान?: string) =>
  //     {
  //       set_तालिका_पहिचान(तालिका_पहिचान)
  //   });

  //   const मारो_डाता_बिर्सनुहोस् = await my_$ग्राहक.मारो_डाता_पछ्याउनुहोस्(
  //     (data: valid.élémentDonnées<S4W_डाता>[]) =>  {
  //       debugger
  //       setMyData(data)
  //     }
  //   );
  // };

  useEffect(()=>{
    //tablePointer()
  },[]);

  const onChangeHandler = (id: string, value: string) => {
    selectForm(value)
  }

  const showAddForm = () => {
    switch(selectedForm){
      case('precip'):
        return <PrecipForm/>
      case('ground_water'):
        return <GroundWaterForm/>
    }
  }
  return (
    <>
      <CustomSelect
        id='survey'
        name='survey'
        dropDownName= 'Select Form'
        value={selectedForm}
        menuItems={SURVEYS}
        onChangeHandler={onChangeHandler}
      />
      {showAddForm()}
    </>
  );
}
export default SelectForm;
