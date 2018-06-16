import React from 'react';
import {Text, Image} from 'react-native';
import {Container, Content, Button} from 'native-base';

const styles = {
  container: {
    height: 45,
    marginTop: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    marginBottom: 0,
    backgroundColor: '#FFF',
    width: 280
  },
  text: {
    fontSize: 20,
    alignSelf: 'center',
    fontFamily: 'Raleway'
  },
  img: {
    height: 40,
    resizeMode: 'contain'
  }
};

class GoogleButton extends React.Component {

  render() {
    return (
      <Container>
        <Content>
          <Button
            rounded bordered iconLeft
            style={styles.container}
            onPress={() => this.props.onPress()}
          >
            <Image style = {styles.img} source={require('../../assets/img/google.png')} />
            <Text style = {styles.text}> Entrar com Google</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default GoogleButton;
