import { useEffect, useState, useContext } from 'react';

import { valid } from "@constl/ipa";
import {S4W_डाता} from "../केन्दीय-पानिकोलागिदूर्भाषहरु";
import BasicTable from "./generalTable"

import { DatabaseContext } from "../../context/databaseContext";

const DataTable = () => {
  const { my_ग्राहक } = useContext(DatabaseContext)
  const [myData, setMyData] = useState([])

  const tablePointers = async () => {
    debugger
    const मारो_डाता_बिर्सनुहोस् = await my_ग्राहक.मारो_डाता_पछ्याउनुहोस्(
      (डाताहरु: valid.élémentDonnées<S4W_डाता>[]) =>  {
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

export default DataTable;