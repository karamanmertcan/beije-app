import {useAtomValue} from 'jotai';

import colors from '../styles/colors';
import {darkModeAtom} from '../utils/atoms';

const useTheme = () => {
  const darkMode = useAtomValue(darkModeAtom);

  return {
    darkMode,
    colors: colors[darkMode ? 'dark' : 'light'],
  };
};

export default useTheme;
