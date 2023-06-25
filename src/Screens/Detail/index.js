import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {cHight, cWidth} from '../../Constants/helper';
import {useSelector} from 'react-redux';
import {colors} from '../../Constants/color';
import Property from './comp';
import {Icons} from '../../assets';

const Detail = ({route, navigation}) => {
  console.log('route', route);
  const ItemID = route?.params?.id;
  const AllGames = useSelector(state => state.app.AllGames);
  const Obj = AllGames.find(image => image.gameID === ItemID) || null;

  return (
    <View style={styles.container}>
      <View>
        <ImageBackground
          // imageStyle={{tintColor: 'red'}}
          source={{uri: Obj?.thumb}}
          style={styles.BImg}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{position: 'absolute', top: 0, left: cWidth(0.05)}}>
            <Image
              source={Icons.arrow}
              resizeMode="contain"
              style={styles.backArrow}
            />
          </TouchableOpacity>
          <Text style={styles.Price}>{'$ ' + Obj?.cheapest + ' / Year'}</Text>
        </ImageBackground>
        <Property label={Obj?.external} value={Obj?.internalName} />
        <Property label={`cheapest Deal ID`} value={Obj?.cheapestDealID} />
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: cHight(0.02),
  },
  InternalName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.Black,
    paddingLeft: cWidth(0.05),
    paddingTop: '2%',
  },
  BImg: {
    height: cHight(0.4),
    width: cWidth(1),
    justifyContent: 'flex-end',
  },
  backArrow: {
    tintColor: colors.blue,
    height: cHight(0.09),
    width: cWidth(0.06),
  },
  Price: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: cHight(0.02),
    paddingLeft: cWidth(0.05),
  },
});
