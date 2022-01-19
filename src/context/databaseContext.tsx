import React from "react";
import ग्राहक from "../तारामण्डल/केन्दीय-पानिकोलागिदूर्भाषहरु";

interface IDatabaseContext {
  मारो_ग्राहक: ग्राहक
}

export const DatabaseContext = React.createContext<IDatabaseContext>({} as IDatabaseContext);
