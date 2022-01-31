import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
import {
  currentOrientation as co,
  listenOrientationChange as loc,
} from 'react-native-responsive-screen';

export default function useOrientation() {
  const [screenInfo, setScreenInfo] = useState({});

  useEffect(() => {
    setScreenInfo({orientation: co()});
    loc({setStateHook: setScreenInfo});
    const subsription = Dimensions.addEventListener('change', () => {});

    return () => {
      subsription.remove();
    };
  }, []);
  return {
    pos: screenInfo.orientation,
  };
}
