import { useState } from 'react';

export type dataProps = {
  precip: string,
  lat: string,
  long: string,
  alti: string,
  temp: string
}

const SurveyDataHandler = (initialData: dataProps): [dataProps, (id: string, value: string) => void, () => void] => {
  const [data, setData] = useState<dataProps>(initialData);

  const handleInputs = (id: string, value: string)=> {
    setData((prevState) => ({
      ...prevState,
      [id]: value
    }))
  }

  const clearData = () => {
    setData({precip: null, lat: null, long: null, alti: null, temp:null})
  }
  return [data, handleInputs, clearData];
}

export default SurveyDataHandler;