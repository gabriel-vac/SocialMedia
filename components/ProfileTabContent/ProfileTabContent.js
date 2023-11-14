import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import style from './style';

const ProfileTabContent = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={style.profileTabContainer}
    >
      <View style={style.profileTabContent}>
        <Image
          resizeMode="contain"
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          resizeMode="contain"
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          resizeMode="contain"
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          resizeMode="contain"
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          resizeMode="contain"
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          resizeMode="contain"
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
      </View>
    </ScrollView>
  );
};

export default ProfileTabContent;
