import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import { styles } from "./style";

function Header({
  HeaderText,
  showBackIcon,
  showRestIcons,
  onbackpressData,
  changeBackground,
}) {
  return (
    <View
      style={[
        styles.headerContainer,
        changeBackground ? { backgroundColor: changeBackground } : null,
      ]}
    >
      {showBackIcon ? (
        <TouchableOpacity
          style={{ justifyContent: "center" }}
          onPress={onbackpressData}
        >
          <Image
            source={require("../../assets/images/BackIcon.png")}
            style={{
              height: 20,
              width: 20,
            }}
          />
        </TouchableOpacity>
      ) : null}
      <View style={showBackIcon ? { marginRight: 200 } : null}>
        <Text style={[styles.headingText]}>{HeaderText}</Text>
      </View>
      {showRestIcons ? (
        <View style={styles.imageContainer}>
          <View style={{ justifyContent: "center", marginRight: 20 }}>
            <Image
              source={require("../../assets/images/searchIconNew.png")}
              style={styles.imgIcon}
            />
          </View>
          <View>
            <Image
              source={require("../../assets/images/hemburgerNew.png")}
              style={styles.imgIcon2}
            />
          </View>
        </View>
      ) : null}
    </View>
  );
}

export default Header;
