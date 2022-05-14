import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  Image,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Header from "../../components/Header";
import { styles } from "./style";
import axios from "axios";
import ReadMore from "react-native-read-more-text";
import { NavigationContainer } from "@react-navigation/native";

const API_KEY = "7c94c4bf82af4e18a0ba534482945782";

function Home({ navigation }) {
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`)
      .then((response) => {
        setNewsData(response.data.articles);
      });
  }, []);

  const handlePress = (value) => {
    navigation.navigate("NewsDetails", value);
  };

  return (
    <View>
      <Header HeaderText="Top Headlines" showRestIcons={true} />
      <View style={styles.contentContainer}>
        <View style={styles.MainContainer}>
          <FlatList
            data={newsData}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => handlePress(item)}
              >
                <View style={styles.container}>
                  <Image
                    source={{ uri: item.urlToImage }}
                    indicatorProps={{
                      size: 80,
                      borderWidth: 0,
                      color: "rgba(150, 150, 150, 1)",
                      unfilledColor: "rgba(200, 200, 200, 0.2)",
                    }}
                    style={styles.contentImage}
                  />
                  <Text style={styles.welcome}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            )}
            numColumns={2}
            keyExtractor={(item, index) => index}
          />
        </View>
      </View>
    </View>
  );
}

export default Home;
