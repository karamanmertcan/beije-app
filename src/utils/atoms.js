import {atomWithStorage, createJSONStorage} from 'jotai/utils';
import {Appearance} from 'react-native';

import Storage from './storage';

export const userAtom = atomWithStorage(
  'user',
  null,
  createJSONStorage(() => Storage),
);

export const darkModeAtom = atomWithStorage(
  'darkMode',
  Appearance.getColorScheme() === 'dark',
  {...createJSONStorage(() => Storage), delayInit: true},
);
