import React, {Component} from 'react';
import {func, bool, string, object, number, node, any} from 'prop-types';
import {
  Pressable,
  Animated,
  StyleSheet,
  Text,
  View,
  ActivityIndicatorBase,
  ActivityIndicator,
} from 'react-native';
import {
  PRIMARY_COLOR,
  TEXT_COLOR,
  TRANSPARENT,
  WHITE,
} from '../constant/Color';
import RNVectorIcons from './RNVectorIcons';
import { TEXT_PARA_MED } from '../constant/TextStyles';

export default class ButtonComponent extends Component {
  static propTypes = {
    onPressAction: func,
    styling: object,
    hasText: bool,
    buttonText: string,
    hasIcon: bool,
    iconCode: string,
    textStyling: object,
    iconColor: string,
    iconSize: number,
    isCentered: bool,
    borderStyling: object,
    disableBtn: bool,
    iconSet: string,
    iconFirst: bool,
    bouncy: bool,
    rippleColor: string,
    elevation: number,
    customChild: any,
    noRipple: bool,
    pressIn: func,
    pressOut: func,
    bounceLevel: number,
    textLines: number,
    showShimer: bool,
  };

  static defaultProps = {
    hasText: true,
    buttonText: 'Button',
    hasIcon: false,
    iconCode: 'default-icon',
    textStyling: {},
    iconColor: 'black',
    iconSize: 14,
    isCentered: true,
    borderStyling: {
      borderRadius: 10,
    },
    disableBtn: false,
    iconSet: 'stan',
    iconFirst: false,
    bouncy: false,
    rippleColor: PRIMARY_COLOR,
    elevation: 0,
    noRipple: false,
    bounceLevel: 0.85,
    showShimer: false,
    textLines: 1,
    customStyling: {},
  };

  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(1);
    this.animShimer = new Animated.Value(-50);
  }

  onPressInEffect = () => {
    if (this.props.bouncy) {
      Animated.spring(this.animatedValue, {
        toValue: this.props.bounceLevel,
        useNativeDriver: true,
      }).start();
    }
    // if (this.props.showShimer)
    //   Animated.spring(this.animShimer, {
    //     toValue: this.props.styling.width + 50,
    //     useNativeDriver: true,
    //   }).start();
    if (this.props.pressIn) {
      this.props.pressIn();
    }
  };

  onPressOutEffect = () => {
    if (this.props.bouncy) {
      Animated.spring(this.animatedValue, {
        toValue: 1,
        friction: 6,
        tension: 40,
        useNativeDriver: true,
      }).start();
    }
    // if (this.props.showShimer)
    //   Animated.timing(this.animShimer, {
    //     toValue: -50,
    //     duration: 0,
    //     useNativeDriver: true,
    //   }).start();
    if (this.props.pressOut) {
      this.props.pressOut();
    }
  };

  render() {
    const {
      onPressAction,
      styling,
      hasText,
      buttonText,
      hasIcon,
      iconCode,
      textStyling,
      iconColor,
      iconSize,
      isCentered,
      borderStyling,
      disableBtn,
      iconSet,
      iconFirst,
      rippleColor,
      elevation,
      customChild,
      noRipple,
      outlined,
      showShimer,
      textLines,
      customStyling,
      showLoader,
      loaderSize,
    } = this.props;
    const iconProps = {name: iconCode, size: iconSize, color: iconColor};
    const animatedValue = {
      transform: [{scale: this.animatedValue}],
    };
    // const shimerVal = {
    //   transform: [{translateX: this.animShimer}, {rotate: '45deg'}],
    // };
    const RIPPLE_CONFIG = noRipple
      ? {}
      : {color: rippleColor, borderless: true};
    return (
      <Animated.View
        style={[
          styling,
          animatedValue,
          {elevation},
          outlined ? styles.outlined : null,
          borderStyling,
          {
            borderRadius: borderStyling.borderRadius
              ? borderStyling.borderRadius
              : 10,
            justifyContent: showLoader ? 'center' : 'flex-start',
            opacity: showLoader ? 0.8 : 1,
          },
        ]}>
        {showLoader ? (
          <ActivityIndicator
            size={loaderSize ? loaderSize : 25}
            color={WHITE}
          />
        ) : (
          <Pressable
            style={{
              height: styling.height ? styling.height : 'auto',
              width: styling.width ? styling.width : 'auto',
              ...borderStyling,
            }}
            onPress={onPressAction}
            disabled={disableBtn}
            onPressIn={this.onPressInEffect}
            onPressOut={this.onPressOutEffect}
            android_ripple={RIPPLE_CONFIG}>
            {customChild ? (
              customChild
            ) : (
              <View
                style={[
                  isCentered
                    ? {
                        ...styles.centeredStyle,
                        flexDirection: iconFirst ? 'row-reverse' : 'row',
                      }
                    : styles.btnContent,
                  customStyling,
                ]}>
                {hasIcon ? (
                  iconSet === 'stan' ? (
                    <CustomIcon {...iconProps} />
                  ) : (
                    <RNVectorIcons
                      iconSet={iconSet}
                      iconCode={iconCode}
                      iconSize={iconSize}
                      iconColor={iconColor}
                    />
                  )
                ) : null}
                {hasText ? (
                  <Text
                    style={[
                      styles.defaultTextStyle,
                      {color: TEXT_COLOR},
                      textStyling,
                    ]}
                    numberOfLines={textLines}
                    // ellipsizeMode="tail"
                  >
                    {buttonText}
                  </Text>
                ) : null}
              </View>
            )}
          </Pressable>
        )}
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  btnContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  centeredStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  defaultTextStyle: {
    ...TEXT_PARA_MED,
    fontSize: 16,
  },
  outlined: {
    backgroundColor: TRANSPARENT,
    borderWidth: 1,
    borderColor: '#fff',
  },
});