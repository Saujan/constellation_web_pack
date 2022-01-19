import { DatabaseContext } from '../context/databaseContext';

import ग्राहक from "../तारामण्डल/केन्दीय-पानिकोलागिदूर्भाषहरु";

import MiniDrawer from "./navBar"

const मारो_ग्राहक = new ग्राहक();

export default function Dashboard() {
  return (
    <DatabaseContext.Provider value={{मारो_ग्राहक}}>
      <MiniDrawer/>
    </DatabaseContext.Provider>
  );
}
