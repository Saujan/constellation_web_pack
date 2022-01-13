import React from "react";
import ग्राहक from "../components/केन्दीय-पानिकोलागिदूर्भाषहरु";

interface IDatabaseContext {
  my_ग्राहक: ग्राहक
}

export const DatabaseContext = React.createContext<IDatabaseContext>({} as IDatabaseContext);