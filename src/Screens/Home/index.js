import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Suspense, useEffect} from 'react';
import {GetGamesList} from '../../../Store/action';
import {useDispatch, useSelector} from 'react-redux';
import {colors} from '../../Constants/color';
import {cHight, cWidth} from '../../Constants/helper';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const AllGames = useSelector(state => state.app.AllGames);
  const GetAllGames = async () => {
    const cbSucess = e => {
      //   console.log('cbSucess', e);
    };
    const cbFailure = e => {
      console.log(e, 'cbFailure');
    };
    dispatch(GetGamesList(cbSucess, cbFailure));
  };
  useEffect(() => {
    GetAllGames();
  }, []);

  const _RenderItem = item => {
    console.log('_RenderItem', item);
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Detail', {id: item?.gameID})}
        style={styles.Listcomp}>
        <Image style={styles.Img} source={{uri: item.thumb}} />
        <View style={styles.ListcompC1}>
          <View style={styles.txtContainer}>
            <Text style={styles.GameName}>{item?.external}</Text>
            <Text
              style={[
                styles.GameName,
                {fontWeight: 'bold', color: colors.blue},
              ]}>
              {'$' + item?.cheapest}
            </Text>
          </View>
          <View style={styles.Rating}></View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Text style={styles.Header}>Games World</Text>
      <Text
        style={[
          styles.Header,
          {fontWeight: 'normal', paddingTop: cHight(0.02)},
        ]}>
        Batman Games
      </Text>
      <Suspense fallback={<ActivityIndicator />}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={AllGames}
          keyExtractor={item => item.item}
          renderItem={({item, index}) => _RenderItem(item, index)}
        />
      </Suspense>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: cWidth(0.05),
    paddingTop: cHight(0.02),
    backgroundColor: colors.background,
  },
  Header: {
    paddingTop: cHight(0.02),
    color: colors.Black,
    fontSize: 26,
    fontWeight: 'bold',
  },
  Listcomp: {
    width: cWidth(0.9),
    backgroundColor: colors.white,
    height: cHight(0.2),
    marginTop: cHight(0.03),
    borderRadius: 15,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  Img: {
    height: cHight(0.2),
    width: cWidth(0.28),
    // borderTopLeftRadius: 15,
    // borderBottomLeftRadius: 15,
  },
  GameName: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.Black,
  },
  txtContainer: {
    justifyContent: 'space-between',
    height: cHight(0.12),
    paddingLeft: cWidth(0.03),
    paddingTop: cHight(0.012),
    width: cWidth(0.41),
  },
  ListcompC1: {
    flexDirection: 'row',

    justifyContent: 'space-between',
  },
  Rating: {
    height: cHight(0.2),
    width: cWidth(0.21),
  },
});
