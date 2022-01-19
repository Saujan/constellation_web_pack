import { useEffect, useState, useContext } from 'react';

import { valid } from "@constl/ipa";
import {S4W_डाता} from "../../तारामण्डल/केन्दीय-पानिकोलागिदूर्भाषहरु";
import BasicTable from "./generalTable"

import { DatabaseContext } from "../../context/databaseContext";

const DataTable = () => {
  const { मारो_ग्राहक } = useContext(DatabaseContext)
  const [मारो_डाता, मारो_डाता_राख्नुहोस्] = useState([])

  const tablePointers = async () => {
    const मारो_डाता_बिर्सनुहोस् = await मारो_ग्राहक.मारो_डाता_पछ्याउनुहोस्(
      (डाताहरु: valid.élémentDonnées<S4W_डाता>[]) =>  {
        मारो_डाता_राख्नुहोस्(डाताहरु)
      }
    );
    return मारो_डाता_बिर्सनुहोस्
  };

  useEffect(() =>{
    tablePointers();
  },[])

  return (
    <BasicTable data={मारो_डाता}/>
  );
}

export default DataTable;
