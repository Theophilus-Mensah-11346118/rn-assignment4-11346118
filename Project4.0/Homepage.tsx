import React from 'react';
import { StyleSheet, View, Text, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';

const Homepage: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.nameText}>Eric Atsu</Text>
          <Text style={styles.emailText}>eric@gmail.com</Text>
        </View>
        <Image source={require('./assets/Man.png')} style={styles.profileIcon} />
      </View>

      {/* Search Section */}
      <View style={styles.searchSection}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search a job or position"
        />
        <Image source={require('./assets/Filter.png')} style={styles.filterIcon} />
      </View>

      {/* Featured Jobs Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Featured Jobs</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.featuredJobs}>
        <View style={[styles.card, styles.facebookCard]}>
          <Image source={require('./assets/Facebook.png')} style={styles.companyIcon} />
          <View style={styles.cardContent}>
            <Text style={styles.jobTitle}>Software Engineer</Text>
            <Text style={styles.companyName}>Facebook</Text>
            <View style={styles.cardFooter}>
              <Text style={styles.salaryText}>$180.00</Text>
              <Text style={styles.locationText}>Accra, Ghana</Text>
            </View>
          </View>
        </View>
        <View style={[styles.card, styles.googleCard]}>
          <Image source={require('./assets/Google.png')} style={styles.companyIcon} />
          <View style={styles.cardContent}>
            <Text style={styles.jobTitle}>Software Engineer</Text>
            <Text style={styles.companyName}>Google</Text>
            <View style={styles.cardFooter}>
              <Text style={styles.salaryText}>$160.00</Text>
              <Text style={styles.locationText}>Accra, Ghana</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Popular Jobs Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Jobs</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>
      <View style={styles.popularJobs}>
        <View style={styles.popularCard}>
          <View style={styles.popularCardContent}>
            <Image source={require('./assets/King.png')} style={styles.popularIcon} />
            <View>
              <Text style={styles.popularText1}>Jr Executive</Text>
              <Text style={styles.popularText2}>Burger King</Text>
            </View>
          </View>
          <View>
            <Text style={styles.popularText3}>$96,000/y</Text>
            <Text style={styles.popularText4}>Los Angels, US</Text>
          </View>
        </View>
        <View style={styles.popularCard}>
          <View style={styles.popularCardContent}>
            <Image source={require('./assets/Beats.png')} style={styles.popularIcon} />
            <View>
              <Text style={styles.popularText1}>Product Manager</Text>
              <Text style={styles.popularText2}>Beats</Text>
            </View>
          </View>
          <View>
            <Text style={styles.popularText3}>$84,000/y</Text>
            <Text style={styles.popularText4}>Florida, us</Text>
          </View>
        </View>
        <View style={styles.popularCard}>
          <View style={styles.popularCardContent}>
            <Image source={require('./assets/Vector.png')} style={styles.popularIcon} />
            <View>
              <Text style={styles.popularText1}>Product Manager</Text>
              <Text style={styles.popularText2}>Facebook</Text>
            </View>
          </View>
          <View>
            <Text style={styles.popularText3}>86,000/y</Text>
            <Text style={styles.popularText4}>Florida, US</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5DEB3',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerLeft: {
    flexDirection: 'column',
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  emailText: {
    fontSize: 12,
    color: 'gray',
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginRight: 10,
  },
  filterIcon: {
    width: 20,
    height: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAll: {
    fontSize: 14,
    color: 'blue',
  },
  featuredJobs: {
    marginBottom: 20,
  },
  card: {
    width: 200,
    height: 150,
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  facebookCard: {
    backgroundColor: '#3b5998',
  },
  googleCard: {
    backgroundColor: '#34A853',
  },
  companyIcon: {
    width: 40,
    height: 40,
  },
  cardContent: {
    marginLeft: 10,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  companyName: {
    fontSize: 12,
    color: 'gray',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  salaryText: {
    fontSize: 14,
    color: 'white',
  },
  locationText: {
    fontSize: 12,
    color: 'white',
  },
  popularJobs: {
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popularCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  popularCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  popularIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  popularText1: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  popularText2: {
    fontSize: 12,
    color: 'gray',
  },
  popularText3: {
    fontSize: 14,
    color: 'black',
  },
  popularText4: {
    fontSize: 12,
    color: 'gray',
  },
});

export default Homepage;
