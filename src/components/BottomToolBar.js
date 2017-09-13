import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { BarContainer, BAR_POSITIONS } from './BarContainer';

const BUTTON_WIDTH = 40;

export default class BottomToolBar extends Component {
  _renderGridButton() {
    const { displayGridButton, onGrid } = this.props;

    if (displayGridButton) {
      return (
        <TouchableOpacity style={[styles.button, { flex: 0 }]} onPress={onGrid}>
          <Icon name="th-large" size={22} color={color}/>
        </TouchableOpacity>
      );
    }
    return null;
  }

  _renderNavArrows() {
    const {
      displayNavArrows,
      displayGridButton,
      displayActionButton,
      onPrev,
      onNext,
    } = this.props;
    const missingButtonMargin = BUTTON_WIDTH;
    const arrows = [];

    if (displayNavArrows) {
      const leftArrow = (
        <TouchableOpacity
          key="left_arrow"
          style={styles.button}
          onPress={onPrev}
        >
          <Icon name="chevron-left" size={22} color={color}/>
        </TouchableOpacity>
      );
      const rightArrow = (
        <TouchableOpacity
          key="right_arrow"
          style={styles.button}
          onPress={onNext}
        >
          <Icon name="chevron-right" size={22} color={color}/>
        </TouchableOpacity>
      );

      arrows.push(leftArrow, rightArrow);
    }
    return (
      <View style={[styles.arrowContainer, {
        marginRight: displayGridButton ? missingButtonMargin : 0,
        marginLeft: displayActionButton ? missingButtonMargin : 0,
      }]}>
      {arrows}
    </View>
    );
  }

  _renderActionSheet() {
    const { displayActionButton, onAction } = this.props;

    if (displayActionButton) {
      return (
        <TouchableOpacity style={[styles.button, { flex: 0 }]} onPress={onAction}>
          <Icon name="download" size={22} color={color}/>
        </TouchableOpacity>
      );
    }
    return null;
  }

  render() {
    const { displayed, caption, height } = this.props;

    return (
      <BarContainer
        position={BAR_POSITIONS.BOTTOM}
        displayed={displayed}
        height={height}
        style={styles.container}
      >
      <View style={styles.captionContainer}>
        <Text style={styles.caption} numberOfLines={1}>{caption}</Text>
      </View>

        <View style={styles.buttonContainer}>
          {this._renderGridButton()}
          {this._renderNavArrows()}
          {this._renderActionSheet()}
        </View>
      </BarContainer>
    );
  }
}

// <View style={styles.captionContainer}>
//   <Text style={styles.caption} numberOfLines={1}>{caption}</Text>
// </View>

const color = 'white';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    minHeight: 60,
  },
  captionContainer: {
    flex: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  caption: {
    color: color,
    alignSelf: 'center',
  },
  arrowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  button: {
    alignItems: 'center',
    width: BUTTON_WIDTH,
  },
  buttonImage: {
    marginTop: 8,
  },
});

BottomToolBar.defaultProps = {
  displayed: true,
  caption: 'test',
  displayNavArrows: true,
  displayGridButton: true,
  displayActionButton: true,
  onPrev: () => {},
  onNext: () => {},
  onGrid: () => {},
  onAction: () => {},
};

BottomToolBar.propTypes = {
  displayed: PropTypes.bool,
  height: PropTypes.number,
  caption: PropTypes.string,
  displayNavArrows: PropTypes.bool,
  displayGridButton: PropTypes.bool,
  displayActionButton: PropTypes.bool,
  onPrev: PropTypes.func,
  onNext: PropTypes.func,
  onGrid: PropTypes.func,
  onAction: PropTypes.func,
};
