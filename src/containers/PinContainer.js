import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
import CryptoJS from "crypto-js";

import { colors } from '../assets/stylesheets/Color';

class PinContainer extends Component {

  constructor () {
    super()
    this.state = {
      pinNumbers: '',
      codeSym: ''

    }
  }

  _setDummyPin () {
    encryptedPin = CryptoJS.HmacSHA1('123', 'cif-key');
    AsyncStorage.setItem('@user.encryptedPin', String(encryptedPin), error => {
      alert(error)
    });
  }

  _appendPin (num) {
    this.setState({pinNumbers: this.state.pinNumbers+num, codeSym: this.state.codeSym+'*'})
  }

  _removeLastPin () {
    this.setState({pinNumbers: this.state.pinNumbers.slice(0, -1)})
    this.setState({codeSym: this.state.codeSym.slice(0, -1)})
  }

  _comparePin (nums) {
    this.props.navigator.push({
      screen: 'cmsScreen',
      navigatorStyle: {
        navBarHidden: true
      }
    })
    // try {
    //   this.setState({pinNumbers: nums})
    //   const inputPin = CryptoJS.HmacSHA1(this.state.pinNumbers, 'cif-key')
    //   AsyncStorage.getItem('@user.encryptedPin', (error, result) => {
    //     if (result != null && String(inputPin) == String(result)) {
    //       this.props.navigator.push({
    //         screen: 'cmsScreen',
    //         navigatorStyle: {
    //           navBarHidden: true
    //         }
    //       })
    //     }else {
    //       alert(error)
    //     }
    //   });
    // } catch (error) {
    //   alert(error)
    // }
  }

  render () {
    return (
      <View style={{flex: 1}}>
        <View style={styles.mainPin}>
          <Text style={styles.enterPinLabel}> Enter PIN </Text>
          <Text style={styles.pinStar}> {this.state.codeSym} </Text>
        </View>
          <View style={styles.pinContainer}>


            <View style={styles.pinNumberContainer}>
              <Button backgroundColor={colors.main} fontSize={25} buttonStyle={styles.pinNumber} raised title='1' onPress={() => this._appendPin(1)} />
            </View>

            <View style={styles.pinNumberContainer}>
              <Button backgroundColor={colors.main} fontSize={25} buttonStyle={styles.pinNumber} raised title='2' onPress={() => this._appendPin(2)} />
            </View>

            <View style={styles.pinNumberContainer}>
              <Button backgroundColor={colors.main} fontSize={25} buttonStyle={styles.pinNumber} raised title='3' onPress={() => this._appendPin(3)} />
            </View>

            <View style={styles.pinNumberContainer}>
              <Button backgroundColor={colors.main} fontSize={25} buttonStyle={styles.pinNumber} raised title='4' onPress={() => this._appendPin(4)} />
            </View>

            <View style={styles.pinNumberContainer}>
              <Button backgroundColor={colors.main} fontSize={25} buttonStyle={styles.pinNumber} raised title='5' onPress={() => this._appendPin(5)} />
            </View>

            <View style={styles.pinNumberContainer}>
              <Button backgroundColor={colors.main} fontSize={25} buttonStyle={styles.pinNumber} raised title='6' onPress={() => this._appendPin(6)} />
            </View>

            <View style={styles.pinNumberContainer}>
              <Button backgroundColor={colors.main} fontSize={25} buttonStyle={styles.pinNumber} raised title='7' onPress={() => this._appendPin(7)} />
            </View>

            <View style={styles.pinNumberContainer}>
              <Button backgroundColor={colors.main} fontSize={25} buttonStyle={styles.pinNumber} raised title='8' onPress={() => this._appendPin(8)} />
            </View>

            <View style={styles.pinNumberContainer}>
              <Button backgroundColor={colors.main} fontSize={25} buttonStyle={styles.pinNumber} raised title='9' onPress={() => this._appendPin(9)} />
            </View>

            <View style={styles.pinNumberContainer}>
              <Button backgroundColor={colors.main} buttonStyle={styles.pinNumber} raised title='Delete' onPress={() => this._removeLastPin()} />
            </View>

            <View style={styles.pinNumberContainer}>
              <Button backgroundColor={colors.main} fontSize={25} buttonStyle={styles.pinNumber} raised title='0' onPress={() => this._appendPin(0)} />
            </View>

            <View style={styles.pinNumberContainer}>
              <Button backgroundColor={colors.main} buttonStyle={styles.pinNumber} raised title='Ok' onPress={() => this._comparePin(this.state.pinNumbers)}/>
            </View>

          </View>
      </View>

    )
  }
}

export default PinContainer;

const styles = StyleSheet.create({
  pinContainer: {
    flexWrap: 'wrap',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.main
  },
  enterPinLabel: {
    textAlign: 'center',
    fontSize: 24
  },
  mainPin: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: colors.main
  },
  pinNumberContainer: {
    width: Dimensions.get('window').width / 3,
    flexDirection: 'row'
  },
  pinNumber: {
    marginLeft: 1,
    marginRight: 1,
    marginBottom: 1,
    flex: 1,
    height: 80,
    elevation: 0
  },
  pinStar: {
    marginBottom: 50,
    fontSize: 25
  }
});
