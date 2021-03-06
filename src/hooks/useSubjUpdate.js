import { useState } from 'react';

export default function useSubjUpdate(val) {
  const [subjArr, setSubjArr] = useState([]);

  const changeSubj = val => {
    if (subjArr.includes(val)) {
      setSubjArr(
        subjArr.filter(word => {
          return word !== val;
        })
      );
    } else {
      setSubjArr([...subjArr, val]);
    }
  };
  return [subjArr, changeSubj, setSubjArr];
}
