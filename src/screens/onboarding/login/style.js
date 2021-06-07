import {StyleSheet} from 'react-native';
import {wp, hp, deviceWidth} from '../../../shared/responsive-dimension';
import {globalStyle} from '../../../style';
import {normalColors as colors} from '../../../colors';

const {main} = globalStyle(colors);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey100,
  },
  body: {
    marginHorizontal: hp(25),
    marginTop: hp(20),
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(100),
  },
  logoImage: {
    height: hp(70),
    width: wp(230),
  },
  loginText: {
    ...main.regularText28,
    fontWeight: '600',
    paddingBottom: hp(10),
  },
  loginButtonText: {
    ...main.lightText16,
    color: colors.white,
  },
  loginButton: {
    width: wp(328),
    height: hp(60),
    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp(10),
    marginTop: hp(50),
  },
  errorText: {
    ...main.regularText12,
    color: colors.red,
    bottom: hp(13),
  },
  loginInstruction: {
    ...main.lightText16,
  },
  formContainer: {
    marginTop: hp(50),
  },
  forgotContainer: {
    marginTop: hp(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgotText: {
    ...main.regularText16,
    color: '#4D52CE',
  },
  buttonStyle: {
    marginTop: hp(50),
  },
});
