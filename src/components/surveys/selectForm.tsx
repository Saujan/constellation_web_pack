import { useState, useEffect } from 'react';

import PrecipForm from "./precipForm";
import GroundWaterForm from "./groundWaterForm";

import CustomSelect from "../customSelect"


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

  useEffect(()=>{
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
