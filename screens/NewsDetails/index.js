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

function NewsDetails({ navigation, route }) {
  const [singleNewsData, setSingleNewsData] = useState({});
  useEffect(() => {
    setSingleNewsData(route.params);
  }, []);

  return (
    <View>
      <Header
        HeaderText="News Detail"
        showBackIcon={true}
        onbackpressData={() => navigation.goBack()}
        changeBackground="#00e6ac"
      />
      <View>
        <Image
          source={{ uri: singleNewsData.urlToImage }}
          style={styles.imageContent}
        />
      </View>
      <View style={styles.textOneContainer}>
        <Text style={{ marginLeft: 10, fontSize: 20, color: "#595959" }}>
          {singleNewsData.title}
        </Text>
      </View>
      <View style={styles.textTwoContainer}>
        <Text style={{ marginLeft: 10, fontSize: 15, color: "#999999" }}>
          {singleNewsData.author}
        </Text>
      </View>
      <View style={styles.textThreeContainer}>
        <Text
          style={{
            marginLeft: 10,
            fontSize: 15,
            color: "#999999",
            paddingRight: 20,
          }}
        >
          {singleNewsData.description}
        </Text>
      </View>
    </View>
  );
}

export default NewsDetails;
