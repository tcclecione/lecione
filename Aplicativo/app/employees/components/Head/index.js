import React, { Component } from 'react';
import connectStyle from 'utils/connectStyle';
import {
  Text,
} from 'native-base';
import styles from './styles';
import { Avatar } from 'common/components'

class Head extends Component {
  render() {
    const { details } = this.props;
    return (
      <>
        <Avatar
          image={details ? details.image : null}
          name={details ? details.name : null}
        />
        <Text style={styles.text}>{details.office_name}</Text>
      </>
    );
  }
}

export default connectStyle('hack.Head', styles, Head);
