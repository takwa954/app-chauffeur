import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Dashboard() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <LinearGradient colors={["#0E8E63", "#19C37D"]} style={styles.header}>
        <View style={styles.headerTopRow}>
          <View style={styles.headerTextBlock}>
            <Text style={styles.greeting}>Good Evening</Text>
            <Text style={styles.name}>Ahmed</Text>
          </View>

          <View style={styles.headerIcons}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.iconButton}
              onPress={() => router.push("/notifications")}
            >
              <Ionicons
                name="notifications-outline"
                size={20}
                color="#FFFFFF"
              />
              <View style={styles.notificationDot} />
            </TouchableOpacity>

<TouchableOpacity
  activeOpacity={0.8}
  style={[styles.iconButton, styles.secondIconButton]}
  onPress={() => router.push("/profile")}
>
  <Ionicons name="person-outline" size={20} color="#FFFFFF" />
</TouchableOpacity>
          
          
          </View>
        </View>

        <View style={styles.truckCard}>
          <View style={styles.truckIconBox}>
            <Ionicons name="trash-outline" size={20} color="#fff" />
          </View>

          <View style={styles.truckTextWrap}>
            <Text style={styles.truckLabel}>Truck ID</Text>
            <Text style={styles.truckId}>TR-2847</Text>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.alertCardRed}>
        <View style={styles.alertLeft}>
          <View style={styles.alertIconRed}>
            <Ionicons name="warning-outline" size={18} color="#EF4444" />
          </View>

          <View style={styles.alertTextWrap}>
            <Text style={styles.alertTitle}>
              Bin #2847-15 reached 98% capacity
            </Text>
            <Text style={styles.alertTime}>5 min ago</Text>
          </View>
        </View>

        <Ionicons name="close" size={18} color="#94A3B8" />
      </View>

      <View style={styles.alertCardOrange}>
        <View style={styles.alertLeft}>
          <View style={styles.alertIconOrange}>
            <Ionicons name="paper-plane-outline" size={18} color="#F59E0B" />
          </View>

          <View style={styles.alertTextWrap}>
            <Text style={styles.alertTitle}>
              Heavy traffic on Main Street. Route updated.
            </Text>
            <Text style={styles.alertTime}>12 min ago</Text>
          </View>
        </View>

        <Ionicons name="close" size={18} color="#94A3B8" />
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Tournée du Jour</Text>

        <View style={styles.progressCard}>
          <View style={styles.progressHeader}>
            <View>
              <Text style={styles.progressLabel}>Route Progress</Text>
              <Text style={styles.progressValue}>0 / 24</Text>
            </View>

            <View style={styles.progressRight}>
              <Text style={styles.progressPercent}>0%</Text>
              <Text style={styles.progressSubText}>Completed</Text>
            </View>
          </View>

          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>
        </View>

        <View style={styles.infoItem}>
          <View style={styles.infoLeft}>
            <View style={styles.infoIconGreen}>
              <Ionicons name="trash-outline" size={18} color="#10B981" />
            </View>
            <View>
              <Text style={styles.infoTitle}>Total Bins</Text>
              <Text style={styles.infoNumber}>24</Text>
            </View>
          </View>

          <View style={styles.infoRight}>
            <Text style={styles.infoTitle}>Collected</Text>
            <Text style={styles.infoNumber}>0</Text>
          </View>
        </View>

        <View style={styles.infoItem}>
          <View style={styles.infoLeft}>
            <View style={styles.infoIconGreen}>
              <Ionicons name="time-outline" size={18} color="#10B981" />
            </View>
            <View>
              <Text style={styles.infoTitle}>Estimated Time</Text>
              <Text style={styles.infoNumber}>2h 45m</Text>
            </View>
          </View>
        </View>

        <View style={styles.infoItem}>
          <View style={styles.infoLeft}>
            <View style={styles.infoIconBlue}>
              <Ionicons name="git-network-outline" size={18} color="#3B82F6" />
            </View>
            <View>
              <Text style={styles.infoTitle}>Total Distance</Text>
              <Text style={styles.infoNumber}>18.5 km</Text>
            </View>
          </View>
        </View>

        <View style={styles.statusRow}>
          <View style={styles.statusLeft}>
            <View style={styles.statusDot} />
            <Text style={styles.statusText}>Route Status</Text>
          </View>
          <Text style={styles.statusReady}>Ready To Start</Text>
        </View>

        <TouchableOpacity
          style={styles.startButton}
          onPress={() => router.push("/route-map")}
          activeOpacity={0.85}
        >
          <Ionicons name="play-outline" size={18} color="white" />
          <Text style={styles.startText}>Start Route</Text>
        </TouchableOpacity>

        <TouchableOpacity
  style={styles.mapButton}
  activeOpacity={0.85}
  onPress={() => router.push("/map")}
>
  <Ionicons name="location-outline" size={18} color="#0E8E63" />
  <Text style={styles.mapText}>View Map</Text>
</TouchableOpacity>
      </View>

      <View style={styles.card}>
        <View style={styles.rowBetween}>
          <Text style={styles.sectionTitle}>Next Bins</Text>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.binCardActive}>
          <View style={styles.binLeft}>
            <View style={styles.binCircleRed}>
              <Text style={styles.binCircleTextRed}>1</Text>
            </View>

            <View style={styles.binContent}>
              <Text style={styles.binTitle}>#BIN-2847-01</Text>
              <Text style={styles.binAddress}>123 Green Street, Downtown</Text>

              <View style={styles.binMetaRow}>
                <Text style={styles.binMetaRed}>95%</Text>
                <Text style={styles.binMeta}>0.5 km</Text>
                <Text style={styles.binMeta}>5 min</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.collectButton} activeOpacity={0.85}>
            <Text style={styles.collectButtonText}>Collecter</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.binCard}>
          <View style={styles.binLeft}>
            <View style={styles.binCircleOrange}>
              <Text style={styles.binCircleTextOrange}>2</Text>
            </View>

            <View style={styles.binContent}>
              <Text style={styles.binTitle}>#BIN-2847-02</Text>
              <Text style={styles.binAddress}>456 Oak Avenue, District 2</Text>

              <View style={styles.binMetaRow}>
                <Text style={styles.binMetaOrange}>78%</Text>
                <Text style={styles.binMeta}>1.2 km</Text>
                <Text style={styles.binMeta}>12 min</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.collectButton} activeOpacity={0.85}>
            <Text style={styles.collectButtonText}>Collecter</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.binCard}>
          <View style={styles.binLeft}>
            <View style={styles.binCircleGreen}>
              <Text style={styles.binCircleTextGreen}>3</Text>
            </View>

            <View style={styles.binContent}>
              <Text style={styles.binTitle}>#BIN-2847-03</Text>
              <Text style={styles.binAddress}>789 Maple Road, East Side</Text>

              <View style={styles.binMetaRow}>
                <Text style={styles.binMetaGreen}>65%</Text>
                <Text style={styles.binMeta}>2.1 km</Text>
                <Text style={styles.binMeta}>18 min</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.collectButton} activeOpacity={0.85}>
            <Text style={styles.collectButtonText}>Collecter</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statTitle}>This Week</Text>
          <Text style={styles.statValue}>156</Text>
          <Text style={styles.statSub}>Bins Collected</Text>
        </View>

        <View style={[styles.statCard, styles.secondStatCard]}>
          <Text style={styles.statTitle}>Efficiency</Text>
          <Text style={styles.statValue}>98%</Text>
          <Text style={styles.statSub}>On-time Rate</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F5F7",
  },

  contentContainer: {
    paddingBottom: 24,
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 26,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },

  headerTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 18,
  },

  headerTextBlock: {
    flex: 1,
    paddingRight: 12,
  },

  greeting: {
    color: "#E8FFF5",
    fontSize: 14,
    marginBottom: 4,
  },

  name: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "800",
  },

  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconButton: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: "rgba(255,255,255,0.14)",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  secondIconButton: {
    marginLeft: 10,
  },

  notificationDot: {
    position: "absolute",
    top: 9,
    right: 9,
    width: 8,
    height: 8,
    borderRadius: 99,
    backgroundColor: "#FF4D4F",
    borderWidth: 1.5,
    borderColor: "#16A34A",
  },

  truckCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.12)",
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.18)",
  },

  truckIconBox: {
    width: 38,
    height: 38,
    borderRadius: 14,
    backgroundColor: "rgba(255,255,255,0.16)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  truckTextWrap: {
    flex: 1,
  },

  truckLabel: {
    color: "#D8FFF0",
    fontSize: 12,
    marginBottom: 2,
  },

  truckId: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },

  alertCardRed: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 16,
    marginTop: -12,
    marginBottom: 12,
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  alertCardOrange: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 16,
    marginBottom: 14,
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  alertLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginRight: 10,
  },

  alertTextWrap: {
    flex: 1,
  },

  alertIconRed: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#FFF1F2",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  alertIconOrange: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#FFF7ED",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  alertTitle: {
    fontSize: 13,
    fontWeight: "600",
    color: "#102A43",
    marginBottom: 3,
  },

  alertTime: {
    fontSize: 12,
    color: "#94A3B8",
  },

  card: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 16,
    marginBottom: 14,
    borderRadius: 20,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 4,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#102A43",
    marginBottom: 14,
  },

  progressCard: {
    backgroundColor: "#F2FBF7",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#BDE8D2",
    padding: 14,
    marginBottom: 14,
  },

  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 12,
  },

  progressLabel: {
    fontSize: 13,
    color: "#7C8DA6",
    marginBottom: 4,
  },

  progressValue: {
    fontSize: 18,
    fontWeight: "800",
    color: "#102A43",
  },

  progressRight: {
    alignItems: "flex-end",
  },

  progressPercent: {
    fontSize: 18,
    fontWeight: "800",
    color: "#0E8E63",
  },

  progressSubText: {
    fontSize: 12,
    color: "#7C8DA6",
    marginTop: 2,
  },

  progressBar: {
    height: 10,
    backgroundColor: "#E5EAF0",
    borderRadius: 999,
    overflow: "hidden",
  },

  progressFill: {
    width: "0%",
    height: "100%",
    backgroundColor: "#19C37D",
    borderRadius: 999,
  },

  infoItem: {
    backgroundColor: "#F7F9FB",
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  infoLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  infoRight: {
    alignItems: "flex-end",
  },

  infoIconGreen: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#E9FBF3",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  infoIconBlue: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#EEF4FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  infoTitle: {
    fontSize: 12,
    color: "#7C8DA6",
    marginBottom: 3,
  },

  infoNumber: {
    fontSize: 16,
    fontWeight: "700",
    color: "#102A43",
  },

  statusRow: {
    backgroundColor: "#F2FBF7",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#BDE8D2",
    paddingVertical: 12,
    paddingHorizontal: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },

  statusLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 99,
    backgroundColor: "#64748B",
    marginRight: 8,
  },

  statusText: {
    color: "#102A43",
    fontSize: 14,
  },

  statusReady: {
    color: "#0E8E63",
    fontWeight: "600",
    fontSize: 14,
  },

  startButton: {
    flexDirection: "row",
    backgroundColor: "#12905C",
    paddingVertical: 14,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  startText: {
    color: "white",
    marginLeft: 6,
    fontSize: 16,
    fontWeight: "700",
  },

  mapButton: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#D9DEE5",
    paddingVertical: 14,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },

  mapText: {
    marginLeft: 5,
    color: "#102A43",
    fontSize: 15,
    fontWeight: "600",
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },

  viewAll: {
    color: "#0E8E63",
    fontWeight: "600",
    fontSize: 14,
  },

  binCardActive: {
    backgroundColor: "#F2FBF7",
    borderWidth: 1,
    borderColor: "#BDE8D2",
    borderRadius: 16,
    padding: 12,
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  binCard: {
    backgroundColor: "#F7F9FB",
    borderRadius: 16,
    padding: 12,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  binLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginRight: 10,
  },

  binCircleRed: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#FFF1F2",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  binCircleOrange: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#FFF7ED",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  binCircleGreen: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#E9FBF3",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  binCircleTextRed: {
    color: "#EF4444",
    fontWeight: "800",
  },

  binCircleTextOrange: {
    color: "#F59E0B",
    fontWeight: "800",
  },

  binCircleTextGreen: {
    color: "#10B981",
    fontWeight: "800",
  },

  binContent: {
    flex: 1,
  },

  binTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#102A43",
    marginBottom: 4,
  },

  binAddress: {
    fontSize: 13,
    color: "#7C8DA6",
    marginBottom: 6,
  },

  binMetaRow: {
    flexDirection: "row",
  },

  binMeta: {
    fontSize: 12,
    color: "#7C8DA6",
    marginRight: 12,
  },

  binMetaRed: {
    fontSize: 12,
    color: "#EF4444",
    fontWeight: "700",
    marginRight: 12,
  },

  binMetaOrange: {
    fontSize: 12,
    color: "#F59E0B",
    fontWeight: "700",
    marginRight: 12,
  },

  binMetaGreen: {
    fontSize: 12,
    color: "#10B981",
    fontWeight: "700",
    marginRight: 12,
  },

  collectButton: {
    backgroundColor: "#19C37D",
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 999,
  },

  collectButtonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 13,
  },

  statsRow: {
    flexDirection: "row",
    marginHorizontal: 16,
  },

  statCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 4,
  },

  secondStatCard: {
    marginLeft: 12,
  },

  statTitle: {
    fontSize: 13,
    color: "#7C8DA6",
    marginBottom: 8,
  },

  statValue: {
    fontSize: 28,
    fontWeight: "800",
    color: "#0E8E63",
    marginBottom: 4,
  },

  statSub: {
    fontSize: 13,
    color: "#7C8DA6",
  },
});