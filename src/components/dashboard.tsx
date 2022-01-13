import * as React from 'react';
import { DatabaseContext } from '../context/databaseContext';
import ग्राहक from "./केन्दीय-पानिकोलागिदूर्भाषहरु";
import MiniDrawer from "./navBar"

export default function Dashboard() {
  return (
    <DatabaseContext.Provider value={{my_ग्राहक: new ग्राहक()}}>
      <MiniDrawer/>
    </DatabaseContext.Provider>
  );
}
