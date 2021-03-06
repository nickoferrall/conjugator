import React, { createContext, useState } from 'react';

import useArrUpdate from '../hooks/useArrUpdate';
import useSubjUpdate from '../hooks/useSubjUpdate';

export const Context = createContext();

export function Provider(props) {
  const [difficulty, setDifficulty] = useState(0);
  const [gotSettingData, setGotSettingData] = useState(false);
  const [latam, setLatam] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  const [subjArr, changeSubj, setSubjArr] = useSubjUpdate();
  const [tenseArr, updateTense, setArr] = useArrUpdate();

  return (
    <Context.Provider
      value={{
        changeSubj,
        difficulty,
        gotSettingData,
        latam,
        loggedIn,
        setArr,
        setDifficulty,
        setGotSettingData,
        setLatam,
        setLoggedIn,
        setSubjArr,
        subjArr,
        tenseArr,
        updateTense
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
