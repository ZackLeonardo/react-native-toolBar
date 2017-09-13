import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { BarContainer } from './BarContainer';

export default class TopToolBar extends Component {

  _renderBackButton() {
    const { onBack, backImage } = this.props;
    
    // do not display back button if there isn't a press handler
    if (onBack) {
      return (
        <TouchableOpacity style={styles.backContainer} onPress={onBack}>
          {backImage ? <Image source={backImage} /> : <Icon name="chevron-left" size={22} color={color}/>}
          {Platform.OS === 'ios' &&
            <Text style={[styles.text, styles.backText]}>
              {this.props.backTitle}
            </Text>}
        </TouchableOpacity>
      );
    }
    return null;
  }

  render() {
    const {
      displayed,
      title,
      height,
    } = this.props;

    return (
      <BarContainer
        style={styles.container}
        displayed={displayed}
        height={height}
      >
        {this._renderBackButton()}
        <Text style={styles.text}>{title}</Text>
      </BarContainer>
      // <Text style={styles.text}>{title}</Text>
    );
  }
}

const color = 'white';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 0,
  },
  text: {
    fontSize: 18,
    color: color,
    top: 16,
  },
  backContainer: {
    position: 'absolute',
    flexDirection: 'row',
    left: 0,
    top: 16,
  },
  backText: {
    top: 0,
    paddingTop: 0,
    marginLeft: 0,
  },
});

TopToolBar.defaultProps = {
  displayed: false,
  title: '',
  backTitle: 'Back',
};

TopToolBar.propTypes = {
  displayed: PropTypes.bool,
  title: PropTypes.string,
  height: PropTypes.number,
  backTitle: PropTypes.string,
  backImage: PropTypes.any,
  onBack: PropTypes.func,
};
