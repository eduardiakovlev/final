import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView,
   ScrollView, 
   ImageBackground, Image} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
    <ScrollView>
    <View style={styles.container}>
      <ImageBackground style={styles.bgHeader} source={{uri: 'https://preview.colorlib.com/theme/appy/images/header-bg.jpg.webp'}}>
      <View style={styles.bgColor}/>
      <View style={styles.header}>
        <Text style={styles.titleHeader}>Start your amazing stuff through appy.</Text>
        <Text style={styles.descriptionHeader}>Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor incididunt ut labore et laborused sed do eiusmod tempor incididunt ut labore et laborused.</Text>
        <TouchableOpacity style={styles.btHeader}>
          <Text style={styles.btHeaderText}>DOWNLOAD APP</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
      <View style={styles.about}>
        <Image style={styles.iconFirst} source={{uri: 'https://preview.colorlib.com/theme/appy/images/xabout-logo.png.pagespeed.ic.ZikXDhfoEL.webp'}}/>
        <Text style={styles.title}>ABOUT APPY</Text>
        <Text style={styles.abouth2}>A beautiful app for consectetur adipisicing elit, sed do eiusmod tempor incididunt ut mollit anim id est laborum. Sedut perspiciatis unde omnis.</Text>
        <Text style={styles.aboutp}>Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor incididunt ut labore et laborused sed do eiusmod tempor incididunt ut labore et laborused.</Text>
      </View>
      <View style={[styles.containerContent, {backgroundColor: '#f5f6ff'}]}>
        <Text style={styles.ourTitle}>OUR PROGRESS</Text>
        <Text style={styles.ourSubtitle}>Grat Application Ever</Text>
        <Text style={styles.oursDescription}>Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor incididunt ut labore et laborused sed do eiusmod tempor incididunt ut labore et laborused.</Text>
        <TouchableOpacity style={styles.btColor}>
          <Text style={styles.btColorText}>Learn More</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerContent}>
        <ImageBackground style={styles.bgVideo} source={{uri: 'https://preview.colorlib.com/theme/appy/images/xvideo-image.jpg.pagespeed.ic.80EovOFKLC.webp'}}>
            <Image style={styles.play} source={{uri: 'https://preview.colorlib.com/theme/appy/images/xplay-button.png.pagespeed.ic.twR8ssnldH.webp'}}/> 
          </ImageBackground>
        <Text style={styles.ourTitle}>VIDEO FEATURES</Text>
        <Text style={styles.ourSubtitle}>Grat Application Ever</Text>
        <Text style={styles.oursDescription}>Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor incididunt ut labore et laborused sed do eiusmod tempor incididunt ut labore et laborused.</Text>
        <TouchableOpacity style={styles.btColor}>
          <Text style={styles.btColorText}>Learn More</Text>
        </TouchableOpacity>
      </View>
    <View style={styles.featuresContainer}>
      <Text style={[styles.title, {color: '#fff', textAlign: 'center'}]}>FEATURES</Text>
      <Text style={{fontSize: 18, textAlign: 'center', color: '#fff', paddingBottom: 16}}>Pwoerful Features As Always</Text>
      <View style={styles.item}>
        <View style={styles.iconContainer}>
        </View>
        <View>
          <Text style={styles.itemTitle}>Fast  Powerful</Text>
          <Text style={styles.itemDescription}>Lorem ipsum dolor sit amet.</Text>
        </View>
      </View>
      <View style={styles.item}>
        <View style={styles.iconContainer}>
        </View>
        <View>
          <Text style={styles.itemTitle}>Easily Editable</Text>
          <Text style={styles.itemDescription}>Lorem ipsum dolor sit amet.</Text>
        </View>
      </View>
      <View style={styles.item}>
        <View style={styles.iconContainer}>
        </View>
        <View>
          <Text style={styles.itemTitle}>Cloud Storage</Text>
          <Text style={styles.itemDescription}>Lorem ipsum dolor sit amet.</Text>
        </View>
      </View>
      <View style={styles.item}>
        <View style={styles.iconContainer}>
        </View>
        <View>
          <Text style={styles.itemTitle}>Easy Notifications</Text>
          <Text style={styles.itemDescription}>Lorem ipsum dolor sit amet.</Text>
        </View>
      </View>
      <View style={styles.item}>
        <View style={styles.iconContainer}>
        </View>
        <View>
          <Text style={styles.itemTitle}>Fully Responsive</Text>
          <Text style={styles.itemDescription}>Lorem ipsum dolor sit amet.</Text>
        </View>
      </View>
      <View style={styles.item}>
        <View style={styles.iconContainer}>
        </View>
        <View>
          <Text style={styles.itemTitle}>Editable Layout</Text>
          <Text style={styles.itemDescription}>Lorem ipsum dolor sit amet.</Text>
        </View>
      </View>
    </View>
    </View>
    <View style={styles.containerContent}>
      <Text style={[styles.title, {textAlign: 'center'}]}>TESTIMONIALS</Text>
      <Text style={[styles.ourSubtitle, {textAlign: 'center'}]}>Our Client Loves US</Text>
    </View>
    <View style={[styles.containerContent, {backgroundColor: '#482cbf'}]}>
        <Text style={[styles.ourTitle, {color: '#fff'}]}>SCREENSHOTS</Text>
        <Text style={[styles.ourSubtitle, {color: '#fff'}]}>Screenshot 01</Text>
        <Text style={[styles.oursDescription, {color: '#fff'}]}>Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor incididunt ut labore et laborused sed do eiusmod tempor incididunt ut labore et laborused.</Text>
        <TouchableOpacity style={styles.btColor}>
          <Text style={styles.btColorText}>Learn More</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.containerContent]}>
        <Text style={[styles.ourTitle]}>OUR FEATURES</Text>
        <Text style={[styles.ourSubtitle]}>Aour Approach of Design is Prety Simple and Clear</Text>
        <Text style={[styles.oursDescription]}>Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor incididunt ut labore et laborused sed do eiusmod tempor incididunt ut labore et laborused.</Text>
        <TouchableOpacity style={styles.btColor}>
          <Text style={styles.btColorText}>Learn More</Text>
        </TouchableOpacity>
        <View style={{paddingVertical: 42}}>
        <View style={styles.item}>
        <View style={styles.iconContainer}>
        </View>
        <View>
          <Text style={[styles.itemTitle, {color: '#8790af'}]}>Editable Layout</Text>
          <Text style={[styles.itemDescription, {color: '#8790af'}]}>Lorem ipsum dolor sit amet.</Text>
        </View>
      </View>
      <View style={styles.item}>
        <View style={styles.iconContainer}>
        </View>
        <View>
          <Text style={[styles.itemTitle, {color: '#8790af'}]}>Fully Responsive</Text>
          <Text style={[styles.itemDescription, {color: '#8790af'}]}>Lorem ipsum dolor sit amet.</Text>
        </View>
      </View>
      <View style={styles.item}>
        <View style={styles.iconContainer}>
        </View>
        <View>
          <Text style={[styles.itemTitle, {color: '#8790af'}]}>Editable Layout</Text>
          <Text style={[styles.itemDescription, {color: '#8790af'}]}>Lorem ipsum dolor sit amet.</Text>
        </View>
      </View>
      </View>
      </View>
      <ImageBackground style={styles.bgHeader} source={{uri: 'https://preview.colorlib.com/theme/appy/images/xdownload-bg.png.pagespeed.ic.rs5beqBEtE.jpg'}}>
      <View style={styles.bgColor}/>
      <View style={styles.header}>
        <Text style={styles.titleHeader}>Download The App</Text>
        <Text style={styles.descriptionHeader}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam possimus eaque magnam eum praesentium unde.</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.dBt}>
          <Text>Apple Store</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dBt}>
          <Text>Play Store</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleHeader: {
    fontWeight: '400',
    fontSize: 32,
    paddingBottom: 16,
    color: '#fff'
  },
  descriptionHeader: {
    fontSize: 18,
    color: '#fff'
  },
  bgHeader: {
    width: '100%',
    height: 400,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  header: {
    paddingHorizontal: 32
  },
  bgColor: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(72,44,191,1)',
    opacity: .5
  },
  btHeader: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 22,
    borderRadius: 30,
    marginTop: 16,
    maxWidth: 220,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btHeaderText: {
    fontWeight: '600',
    color: '#768ede'
  },
  iconFirst: {
    width: 56,
    height: 56
  },
  about: {
    alignItems: 'center',
    paddingVertical: 22,
    paddingHorizontal: 16
  },
  title: { 
    fontWeight: '600',
    color: '#8790af',
    paddingVertical: 16,
    fontSize: 22
  },
  abouth2: {
    textAlign: 'center',
    fontSize: 22,
    color: '#5e88fc'
  },
  aboutp: {
    textAlign: 'center',
    color: '#8790af',
    fontSize: 18,
    paddingVertical: 16
  },
  containerContent: {
    paddingVertical: 55,
    paddingHorizontal: 16
  },
  ourTitle: {
    fontWeight: '600',
    color: '#8790af',
    fontSize: 18
  },
  ourSubtitle: {
    fontSize: 28,
    color: '#000',
    paddingVertical: 16
  },
  oursDescription: {
    color: '#8790af',
    fontSize: 18
  },
  btColor: {
    backgroundColor: '#337ab7',
    paddingHorizontal: 16,
    paddingVertical: 22,
    borderRadius: 30,
    marginTop: 16,
    maxWidth: 220,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btColorText: {
    color: '#fff',
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: '700'
  },
  bgVideo: {
    width: '100%',
    height: 300,
    marginBottom: 22,
    alignItems: 'center',
    justifyContent: 'center'
  },
  play: {
    width: 85,
    height: 85
  },
  featuresContainer: {
    backgroundColor: '#5e88fc',
    paddingVertical: 32,
    paddingHorizontal: 16
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25
  },
  iconContainer: {
    width: 70,
    height: 70,
    borderRadius: 100,
    backgroundColor: '#fff',
    marginRight: 16,
    flexDirection: 'row'
  },
  itemTitle: {
    fontSize: 20,
    color: '#fff'
  },
  itemDescription: {
    fontSize: 16,
    color: '#fff',
    paddingTop: 8,
  },
  dBt: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 30,
    marginRight: 16,
    marginTop: 20
  }
});
