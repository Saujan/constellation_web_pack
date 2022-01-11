import { useEffect, useState } from 'react';

import { valid } from "@constl/ipa";
import ग्राहक from "../केन्दीय-पानिकोलागिदूर्भाषहरु";
import {S4W_डाता} from "../केन्दीय-पानिकोलागिदूर्भाषहरु";
import BasicTable from "./generalTable"

//const my_$ग्राहक = new ग्राहक();
type rowData = {
  id: string,
  temp: string,
  उचाई: string,
  मिति: string,
  अकांश: string,
  वर्षा: string,
  देशान्तर:string
}

type rawData = {
  données: rowData,
  empreinte: string
}

type Props = {
  data: rawData[];
};

const ListData = (props: Props) => {
  const [तालिका_पहिचान, set_तालिका_पहिचान] = useState<string | undefined>(undefined);
  const [myData, setMyData] = useState([])

  useEffect(() =>{
    //tablePointer();
  },[])

  return (
    <BasicTable data={props.data}/>
  );
}

export default ListData;