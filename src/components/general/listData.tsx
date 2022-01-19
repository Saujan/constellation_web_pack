import { useEffect, useState, useContext } from 'react';

import { valid } from "@constl/ipa";
import ग्राहक from "../../तारामण्डल/केन्दीय-पानिकोलागिदूर्भाषहरु";
import {S4W_डाता} from "../../तारामण्डल/केन्दीय-पानिकोलागिदूर्भाषहरु";
import BasicTable from "./generalTable"
import { DatabaseContext } from "../../context/databaseContext";

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
  grahak: ग्राहक
};

const ListData = (props: Props) => {
  const { मारो_ग्राहक } = useContext(DatabaseContext);
  const [myData, setMyData] = useState([])

  const tablePointers = async () => {
    const मारो_डाता_बिर्सनुहोस् = await मारो_ग्राहक.मारो_डाता_पछ्याउनुहोस्(
      (डाताहरु: valid.élémentDonnées<S4W_डाता>[]) =>  {
        debugger
        setMyData(डाताहरु)
      }
    );
  };

  useEffect(() =>{
    tablePointers();
  },[])

  return (
    <BasicTable data={myData}/>
  );
}

export default ListData;
