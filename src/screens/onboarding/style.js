import {StyleSheet} from 'react-native';
import {wp, hp, deviceWidth} from '../../shared/responsive-dimension';
import {globalStyle} from '../../style';
import {normalColors as colors} from '../../colors';

const {main} = globalStyle(colors);

export const styles = StyleSheet.create({
  imageStyle: {
    height: hp(209),
    width: wp(236),
  },
  container: {
    flex: 1,
    backgroundColor: colors.blue,
  },
  contentContainer: {
    width: deviceWidth,
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(600),
  },
  paginationWrapper: {
    position: 'absolute',
    bottom: hp(200),
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  paginationDots: {
    height: 15,
    width: 15,
    borderRadius: 100,
    backgroundColor: colors.white,
    marginLeft: 10,
  },
  textContainer: {
    marginTop: hp(20),
    marginHorizontal: hp(30),
  },
  text: {
    ...main.semiBoldText36,
    color: colors.white,
    fontWeight: '500',
    textAlign: 'center',
  },
  buttonContainer: {
    marginHorizontal: hp(25),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: hp(30),
  },
  loginButton: {
    width: wp(328),
    height: hp(60),
    backgroundColor: colors.blue,
    borderWidth: hp(1),
    borderColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp(10),
    marginTop: hp(20),
  },
  loginText: {
    ...main.lightText20,
    color: colors.blue,
  },
  registerText: {
    ...main.lightText20,
    color: colors.white,
  },
  registerButton: {
    width: wp(328),
    height: hp(60),
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp(10),
  },
  buttonStyle: {
    marginTop: hp(30),
  },
});
