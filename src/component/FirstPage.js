
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Button, TextInput, Image} from 'react-native';
//import all the components we are going to use.

export default class FirstPage extends Component {
  static navigationOptions = {
    title: 'Artifacial Intelligence',
    //Sets Header text of Status Bar
    headerStyle: {
      backgroundColor: '#f4511e',
      //Sets Header color
    },
    headerTintColor: '#fff',
    //Sets Header text color
    headerTitleStyle: {
      fontWeight: 'bold',
      //Sets Header text style
    },
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View>
        <Image source={{uri:'https://facebook.github.io/react/logo-og.png'}}
               style={{width: 400, height: 120}} />
        </View>
        <View>
          <TextInput style={{height: 60, borderWidth: 5, borderColor: 'white', color: '#f4511e'}}
           placeholder=' Email'
          />
        </View>
        <View>
          <TextInput style={{height: 60, borderWidth: 5, borderColor: 'white', color: '#f4511e' }}
            placeholder=' Password'
          />
        </View>
        <View>
          <Button title='Log In'
          onPress={() =>navigate('SecondPage')}
          color='#f4511e'
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});
