import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import MaterialCommunityIconsI from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIconsI from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIconsI from 'react-native-vector-icons/MaterialIcons';
import FontistoI from 'react-native-vector-icons/Fontisto';
import FontAwesomeI from 'react-native-vector-icons/FontAwesome';
import FoundationI from 'react-native-vector-icons/Foundation';
import EvilIconsI from 'react-native-vector-icons/EvilIcons';
import OcticonsI from 'react-native-vector-icons/Octicons';
import IoniconsI from 'react-native-vector-icons/Ionicons';
import FeatherI from 'react-native-vector-icons/Feather';
import EntypoI from 'react-native-vector-icons/Entypo';
import ZocialI from 'react-native-vector-icons/Zocial';
import AntDesignI from 'react-native-vector-icons/AntDesign';

export default class RNVectorIcons extends PureComponent {
  static propTypes = {
    iconCode: PropTypes.string,
    iconColor: PropTypes.string,
    iconSize: PropTypes.number,
    iconSet: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  iconFamilies = {
    MaterialCommunityIcons: MaterialCommunityIconsI,
    SimpleLineIcons: SimpleLineIconsI,
    MaterialIcons: MaterialIconsI,
    FontAwesome: FontAwesomeI,
    Foundation: FoundationI,
    EvilIcons: EvilIconsI,
    Octicons: OcticonsI,
    Ionicons: IoniconsI,
    Feather: FeatherI,
    Entypo: EntypoI,
    Zocial: ZocialI,
    AntDesign: AntDesignI,
    Fontisto: FontistoI,
  };

  render() {
    const {iconCode, iconColor, iconSize, iconSet} = this.props;
    const IconComponent = this.iconFamilies[iconSet];
    const iconProps = {name: iconCode, size: iconSize, color: iconColor};
    return <IconComponent {...iconProps} style={{fontWeight: 'bold'}}/>;
  }

}