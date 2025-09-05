import { Dimensions, Image, ImageBackground, SafeAreaProvider, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get('window');

const backgroundImage = require('../assets/images/background.png'); 

export default function Index() {
  return (
    <SafeAreaProvider style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.contentContainer}>
            <Image
              style={styles.logo}
              source={require('../assets/images/logo.png')}
            />
            <Text style={styles.heading}>Your journey starts now</Text>
            <Text style={styles.subheading}>Learn and build more with us</Text>
            <View style={styles.buttonGroup}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Get Started</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Log in</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.navPromptContainer}>
              <Text style={styles.navPromptText}>
                Are you an existing user?
              </Text>
              <TouchableOpacity>
                <Text style={styles.navPromptLink}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  safeArea: {
    flex: 1,
    width: '100%',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  logo: {
    width: width * 0.4,
    height: width * 0.4,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  heading: {
    fontSize: width * 0.08,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 5,
  },
  subheading: {
    fontSize: width * 0.04,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#007aff',
    fontSize: 18,
    fontWeight: '600',
  },
  navPromptContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  navPromptText: {
    color: '#fff',
    marginRight: 5,
  },
  navPromptLink: {
    color: '#007aff',
    fontWeight: 'bold',
  },
});
