import React from "react";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import Svg, { Path } from "react-native-svg";

const { width } = Dimensions.get("window");

type BinMarkerProps = {
  percent: string;
  color: string;
  top: number;
  left: number;
  badge: string;
};

function BinMarker({ percent, color, top, left, badge }: BinMarkerProps) {
  return (
    <View style={[styles.markerWrapper, { top, left }]}>
      <View style={[styles.markerGlow, { backgroundColor: color }]} />
      <View style={[styles.marker, { backgroundColor: color }]}>
        <Text style={styles.markerPercent}>{percent}</Text>
      </View>
      <View style={styles.markerBadge}>
        <Text style={styles.markerBadgeText}>{badge}</Text>
      </View>
    </View>
  );
}

export default function RouteMapScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.mapArea}>
          <View style={styles.gridOverlay} />

          <Svg width="100%" height="100%" style={styles.routeSvg}>
            <Path
              d="
                M10 85
                C60 120, 120 110, 160 90
                S220 80, 260 115
                S320 140, 360 120
                S420 95, 470 130
              "
              stroke="#22C55E"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>

          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={20} color="#374151" />
          </TouchableOpacity>

          <View style={styles.topCenterBadge}>
            <View style={styles.badgeDot} />
            <Text style={styles.topCenterBadgeText}>Active Route</Text>
          </View>

          <TouchableOpacity style={styles.progressButton}>
            <Text style={styles.progressButtonText}>Progress</Text>
          </TouchableOpacity>

          <View style={styles.truckMarker}>
            <LinearGradient
              colors={["#5B9CFF", "#3B82F6"]}
              style={styles.truckCircle}
            >
              <Ionicons name="trash-outline" size={24} color="#fff" />
            </LinearGradient>
            <View style={styles.truckSmallDot} />
          </View>

          <BinMarker
            percent="95%"
            color="#EF4444"
            top={95}
            left={width * 0.12}
            badge="1"
          />
          <BinMarker
            percent="78%"
            color="#F59E0B"
            top={155}
            left={width * 0.19}
            badge="2"
          />
          <BinMarker
            percent="30%"
            color="#10B981"
            top={120}
            left={width * 0.28}
            badge="3"
          />
          <BinMarker
            percent="88%"
            color="#F59E0B"
            top={175}
            left={width * 0.35}
            badge="4"
          />
          <BinMarker
            percent="98%"
            color="#EF4444"
            top={135}
            left={width * 0.42}
            badge="5"
          />
        </View>

        <View style={styles.bottomCard}>
          <View style={styles.cardHeader}>
            <View style={styles.nextStopLeft}>
              <View style={styles.redIconBox}>
                <Ionicons name="trash-outline" size={18} color="#FF5A5F" />
              </View>

              <View>
                <Text style={styles.nextStopLabel}>Next Stop</Text>
                <Text style={styles.binCode}>BIN-001</Text>
              </View>
            </View>

            <View style={styles.fullBadge}>
              <View style={styles.fullBadgeDot} />
              <Text style={styles.fullBadgeText}>95% Full</Text>
            </View>
          </View>

          <View style={styles.addressBar}>
            <Ionicons name="location-outline" size={16} color="#16A34A" />
            <Text style={styles.addressText}>Main St & 5th Ave</Text>
          </View>

          <View style={styles.statsRow}>
            <View style={styles.infoCard}>
              <Text style={styles.infoLabel}>Distance</Text>
              <Text style={styles.infoValue}>850m</Text>
            </View>

            <View style={styles.infoCard}>
              <Text style={styles.infoLabel}>Est. Arrival</Text>
              <Text style={styles.infoValue}>3 min</Text>
            </View>
          </View>

          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.navigateButton}>
              <Ionicons name="navigate-outline" size={16} color="#fff" />
              <Text style={styles.navigateButtonText}>Navigate</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.refreshButton}>
              <Ionicons name="refresh-outline" size={18} color="#374151" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.reportButton}>
            <Ionicons name="alert-circle-outline" size={16} color="#FF5A5F" />
            <Text style={styles.reportButtonText}>Report Issue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF1F4",
  },

  scrollContent: {
    paddingBottom: 30,
  },

  mapArea: {
    height: 280,
    backgroundColor: "#EEF1F4",
    position: "relative",
    overflow: "hidden",
  },

  gridOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#EEF1F4",
  },

  routeSvg: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
  },

  backButton: {
    position: "absolute",
    top: 16,
    left: 14,
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    zIndex: 10,
  },

  topCenterBadge: {
    position: "absolute",
    top: 16,
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    elevation: 4,
    zIndex: 10,
  },

  badgeDot: {
    width: 8,
    height: 8,
    borderRadius: 99,
    backgroundColor: "#10B981",
    marginRight: 8,
  },

  topCenterBadgeText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1F2937",
  },

  progressButton: {
    position: "absolute",
    top: 16,
    right: 14,
    backgroundColor: "#159A61",
    borderRadius: 14,
    paddingHorizontal: 15,
    paddingVertical: 10,
    zIndex: 10,
  },

  progressButtonText: {
    color: "#FFFFFF",
    fontWeight: "700",
  },

  truckMarker: {
    position: "absolute",
    top: 82,
    left: 100,
    alignItems: "center",
    zIndex: 8,
  },

  truckCircle: {
    width: 54,
    height: 54,
    borderRadius: 27,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "#FFFFFF",
    shadowColor: "#3B82F6",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 12,
    elevation: 8,
  },

  truckSmallDot: {
    position: "absolute",
    top: -2,
    right: -4,
    width: 12,
    height: 12,
    borderRadius: 99,
    backgroundColor: "#EAF2FF",
    borderWidth: 1.5,
    borderColor: "#3B82F6",
  },

  markerWrapper: {
    position: "absolute",
    alignItems: "center",
    zIndex: 7,
  },

  markerGlow: {
    position: "absolute",
    width: 50,
    height: 50,
    borderRadius: 25,
    opacity: 0.14,
  },

  marker: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2.5,
    borderColor: "#FFFFFF",
    elevation: 4,
  },

  markerPercent: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "800",
  },

  markerBadge: {
    marginTop: 2,
    minWidth: 18,
    height: 18,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  markerBadgeText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#111827",
  },

  bottomCard: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 10,
    borderRadius: 22,
    padding: 16,
    elevation: 8,
    marginTop: -8,
  },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
    alignItems: "center",
  },

  nextStopLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  redIconBox: {
    width: 34,
    height: 34,
    borderRadius: 12,
    backgroundColor: "#FFF1F2",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  nextStopLabel: {
    fontSize: 12,
    color: "#9CA3AF",
  },

  binCode: {
    fontSize: 18,
    fontWeight: "800",
    color: "#102A43",
  },

  fullBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF1F2",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
  },

  fullBadgeDot: {
    width: 6,
    height: 6,
    borderRadius: 99,
    backgroundColor: "#FF5A5F",
    marginRight: 6,
  },

  fullBadgeText: {
    color: "#FF5A5F",
    fontSize: 12,
    fontWeight: "700",
  },

  addressBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F4F7F8",
    borderRadius: 14,
    padding: 12,
    marginBottom: 12,
  },

  addressText: {
    marginLeft: 8,
    color: "#374151",
    fontWeight: "500",
  },

  statsRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 14,
  },

  infoCard: {
    flex: 1,
    backgroundColor: "#F3FBF7",
    borderRadius: 14,
    padding: 12,
    borderWidth: 1,
    borderColor: "#B7E4D0",
  },

  infoLabel: {
    fontSize: 12,
    color: "#94A3B8",
    marginBottom: 4,
  },

  infoValue: {
    color: "#10A66A",
    fontWeight: "800",
    fontSize: 15,
  },

  actionRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 10,
  },

  navigateButton: {
    flex: 1,
    height: 48,
    borderRadius: 14,
    backgroundColor: "#15A566",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  navigateButtonText: {
    color: "#FFFFFF",
    fontWeight: "700",
    marginLeft: 6,
  },

  refreshButton: {
    width: 80,
    height: 48,
    borderRadius: 14,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
  },

  reportButton: {
    height: 40,
    borderRadius: 14,
    backgroundColor: "#FFF1F2",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  reportButtonText: {
    color: "#FF5A5F",
    marginLeft: 6,
    fontWeight: "600",
  },
});