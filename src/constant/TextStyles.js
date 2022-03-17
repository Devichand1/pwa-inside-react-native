import {Platform} from 'react-native';
import {TEXT_COLOR} from './Color';

export const TEXT_HEADING = {
  fontSize: 22,
  fontFamily: Platform.OS === 'ios' ? 'Syne Bold' : 'Syne-Bold',
  color: TEXT_COLOR,
};

export const TEXT_PARA_REG = {
  fontSize: 16,
  fontFamily:
    Platform.OS === 'ios' ? 'IBM Plex Sans Regular' : 'IBMPlexSans-Regular',
  color: TEXT_COLOR,
};

export const TEXT_PARA_MED = {
  fontSize: 16,
  fontFamily:
    Platform.OS === 'ios' ? 'IBM Plex Sans Medium' : 'IBMPlexSans-Medium',
  color: TEXT_COLOR,
};

export const TEXT_PARA_BOLD = {
  fontSize: 16,
  fontFamily: Platform.OS === 'ios' ? 'IBM Plex Sans Bold' : 'IBMPlexSans-Bold',
  color: TEXT_COLOR,
};