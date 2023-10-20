import React from 'react';
import { SafeAreaView, ScrollView, Image, View, Text } from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView contentContainerStyle={globalStyle.flexGrow}>
        <View style={style.profileImageContainer}>
          <View style={style.profileImageContent}>
            <Image
              style={style.profileImage}
              source={require('../../assets/images/default_profile.png')}
            />
          </View>
        </View>
        <Text style={style.userName}>Gabriel Guilhen</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
