import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function NotificationsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
          activeOpacity={0.8}
        >
          <Ionicons name="arrow-back" size={20} color="#1F2937" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Notifications</Text>

        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.clearAll}>Clear All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.cardImportant}>
          <View style={styles.left}>
            <View style={styles.iconWrapRed}>
              <Ionicons name="warning-outline" size={18} color="#FF4D4F" />
            </View>

            <View style={styles.textWrap}>
              <Text style={styles.title}>Bin Overflow Alert</Text>
              <Text style={styles.desc}>Bin #2847-15 reached 98% capacity</Text>
              <Text style={styles.time}>5 min ago</Text>
            </View>
          </View>

          <View style={styles.greenDot} />
        </View>

        <View style={styles.cardImportant}>
          <View style={styles.left}>
            <View style={styles.iconWrapOrange}>
              <Ionicons name="location-outline" size={18} color="#F59E0B" />
            </View>

            <View style={styles.textWrap}>
              <Text style={styles.title}>Traffic Warning</Text>
              <Text style={styles.desc}>
                Heavy traffic on Main Street. Route updated.
              </Text>
              <Text style={styles.time}>12 min ago</Text>
            </View>
          </View>

          <View style={styles.greenDot} />
        </View>

        <View style={styles.card}>
          <View style={styles.left}>
            <View style={styles.iconWrapBlue}>
              <Ionicons name="car-outline" size={18} color="#3B82F6" />
            </View>

            <View style={styles.textWrap}>
              <Text style={styles.title}>New Route Assigned</Text>
              <Text style={styles.desc}>
                Route for tomorrow is now available
              </Text>
              <Text style={styles.time}>2 hours ago</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.left}>
            <View style={styles.iconWrapGreen}>
              <Ionicons
                name="checkmark-circle-outline"
                size={18}
                color="#10B981"
              />
            </View>

            <View style={styles.textWrap}>
              <Text style={styles.title}>Route Completed</Text>
              <Text style={styles.desc}>
                Yesterday&apos;s route completed successfully
              </Text>
              <Text style={styles.time}>1 day ago</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F5F7",
  },

  header: {
    paddingHorizontal: 18,
    paddingTop: 14,
    paddingBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  backButton: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#102A43",
  },

  clearAll: {
    color: "#0E8E63",
    fontWeight: "600",
    fontSize: 14,
  },

  content: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },

  cardImportant: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
    borderLeftWidth: 3,
    borderLeftColor: "#12905C",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 4,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 4,
  },

  left: {
    flexDirection: "row",
    alignItems: "flex-start",
    flex: 1,
  },

  textWrap: {
    flex: 1,
  },

  iconWrapRed: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#FFF1F2",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  iconWrapOrange: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#FFF7ED",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  iconWrapBlue: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#EEF4FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  iconWrapGreen: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#E9FBF3",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#102A43",
    marginBottom: 4,
  },

  desc: {
    fontSize: 14,
    color: "#6B7C93",
    marginBottom: 8,
    lineHeight: 20,
  },

  time: {
    fontSize: 12,
    color: "#94A3B8",
  },

  greenDot: {
    width: 7,
    height: 7,
    borderRadius: 99,
    backgroundColor: "#12905C",
    marginLeft: 10,
    marginTop: 6,
  },
});