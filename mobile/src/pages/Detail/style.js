import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  details: {
    marginTop: 48,
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 14
  },
  detailsProperty: {
      fontSize: 16,
      color: '#41414d',
      marginTop: 24,
      fontWeight: 'bold'
  },
  first: {
    marginTop: 0
  },
  detailsValue: {
      marginTop: 8,
      fontSize: 15,
      color: '#737380'
  },
  contactBox: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 14
  },
  heroTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#13131a',
    lineHeight: 30
  },
  heroDescription: {
    fontSize: 15,
    color: '#737380',
    marginTop: 16
  },
  actions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  action: {
    backgroundColor: '#e02041',
    height: 50,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  actionText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold'
  }
});