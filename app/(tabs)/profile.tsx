import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

export default function ProfileScreen() {
  const [darkMode, setDarkMode] = useState(false);
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
            activeOpacity={0.8}
          >
            <Ionicons name="arrow-back" size={20} color="#1F2937" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Profile</Text>

          <View style={styles.headerSpacer} />
        </View>

        <LinearGradient colors={["#12905C", "#1CC37B"]} style={styles.heroCard}>
          <View style={styles.avatarCircle}>
            <Ionicons name="person-outline" size={46} color="#FFFFFF" />
          </View>

          <Text style={styles.heroName}>Ahmed Al-Mansouri</Text>
          <Text style={styles.heroId}>Driver ID: DRV-2847</Text>
        </LinearGradient>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Driver Information</Text>

          <View style={styles.infoRow}>
            <View style={styles.infoIconGreen}>
              <Ionicons name="person-outline" size={18} color="#10B981" />
            </View>
            <View>
              <Text style={styles.infoLabel}>Full Name</Text>
              <Text style={styles.infoValue}>Ahmed Al-Mansouri</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <View style={styles.infoIconGray}>
              <Ionicons name="bus-outline" size={18} color="#64748B" />
            </View>
            <View>
              <Text style={styles.infoLabel}>Assigned Truck</Text>
              <Text style={styles.infoValue}>TR-2847</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <View style={styles.infoIconGreen}>
              <Ionicons name="calendar-outline" size={18} color="#10B981" />
            </View>
            <View>
              <Text style={styles.infoLabel}>Shift Schedule</Text>
              <Text style={styles.infoValue}>
                Monday - Friday, 8:00 AM - 4:00 PM
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.sectionHeader}>
            <Ionicons name="lock-closed-outline" size={18} color="#12905C" />
            <Text style={styles.sectionTitleInline}>Security Settings</Text>
          </View>

          <Text style={styles.inputLabel}>Current Password</Text>
          <View style={styles.inputWrap}>
            <Ionicons name="lock-closed-outline" size={18} color="#94A3B8" />
            <TextInput
              style={styles.input}
              placeholder="Enter current password"
              placeholderTextColor="#9CA3AF"
              secureTextEntry={!showCurrent}
            />
            <TouchableOpacity onPress={() => setShowCurrent(!showCurrent)}>
              <Ionicons
                name={showCurrent ? "eye-outline" : "eye-off-outline"}
                size={18}
                color="#94A3B8"
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.inputLabel}>New Password</Text>
          <View style={styles.inputWrap}>
            <Ionicons name="lock-closed-outline" size={18} color="#94A3B8" />
            <TextInput
              style={styles.input}
              placeholder="Enter new password"
              placeholderTextColor="#9CA3AF"
              secureTextEntry={!showNew}
            />
            <TouchableOpacity onPress={() => setShowNew(!showNew)}>
              <Ionicons
                name={showNew ? "eye-outline" : "eye-off-outline"}
                size={18}
                color="#94A3B8"
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.inputLabel}>Confirm New Password</Text>
          <View style={styles.inputWrap}>
            <Ionicons name="lock-closed-outline" size={18} color="#94A3B8" />
            <TextInput
              style={styles.input}
              placeholder="Confirm new password"
              placeholderTextColor="#9CA3AF"
              secureTextEntry={!showConfirm}
            />
            <TouchableOpacity onPress={() => setShowConfirm(!showConfirm)}>
              <Ionicons
                name={showConfirm ? "eye-outline" : "eye-off-outline"}
                size={18}
                color="#94A3B8"
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.updateButton} activeOpacity={0.85}>
            <Text style={styles.updateButtonText}>Update Password</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Settings</Text>

          <View style={styles.settingRow}>
            <View style={styles.settingLeft}>
              <View style={styles.infoIconGreen}>
                <Ionicons name="sunny-outline" size={18} color="#10B981" />
              </View>
              <View>
                <Text style={styles.infoValue}>Dark Mode</Text>
                <Text style={styles.infoLabel}>
                  {darkMode ? "Enabled" : "Disabled"}
                </Text>
              </View>
            </View>

            <Switch value={darkMode} onValueChange={setDarkMode} />
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>This Month</Text>

          <View style={styles.statsGrid}>
            <View style={[styles.statBox, styles.statGreen]}>
              <Text style={[styles.statNumber, { color: "#0E8E63" }]}>642</Text>
              <Text style={styles.statText}>Bins Collected</Text>
            </View>

            <View style={[styles.statBox, styles.statGreen]}>
              <Text style={[styles.statNumber, { color: "#19C37D" }]}>97%</Text>
              <Text style={styles.statText}>Efficiency</Text>
            </View>

            <View style={[styles.statBox, styles.statBlue]}>
              <Text style={[styles.statNumber, { color: "#3B82F6" }]}>418</Text>
              <Text style={styles.statText}>km Driven</Text>
            </View>

            <View style={[styles.statBox, styles.statYellow]}>
              <Text style={[styles.statNumber, { color: "#F59E0B" }]}>22</Text>
              <Text style={styles.statText}>Routes Done</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.logoutButton} activeOpacity={0.85}>
          <Ionicons name="log-out-outline" size={18} color="#FF5A5F" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F5F7",
  },

  content: {
    padding: 16,
    paddingBottom: 28,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
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

  headerSpacer: {
    width: 36,
  },

  heroCard: {
    borderRadius: 22,
    paddingVertical: 26,
    paddingHorizontal: 20,
    alignItems: "center",
    marginBottom: 18,
  },

  avatarCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 3,
    borderColor: "rgba(255,255,255,0.28)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
    backgroundColor: "rgba(255,255,255,0.12)",
  },

  heroName: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 4,
  },

  heroId: {
    color: "#D8FFF0",
    fontSize: 14,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 16,
    marginBottom: 18,
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

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },

  sectionTitleInline: {
    fontSize: 18,
    fontWeight: "700",
    color: "#102A43",
    marginLeft: 8,
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F7F9FB",
    borderRadius: 16,
    padding: 14,
    marginBottom: 10,
  },

  infoIconGreen: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#E9FBF3",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  infoIconGray: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#EEF2F7",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  infoLabel: {
    fontSize: 12,
    color: "#7C8DA6",
    marginBottom: 3,
  },

  infoValue: {
    fontSize: 15,
    fontWeight: "700",
    color: "#102A43",
  },

  inputLabel: {
    fontSize: 13,
    color: "#64748B",
    marginBottom: 8,
    marginTop: 4,
  },

  inputWrap: {
    height: 48,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    marginBottom: 14,
  },

  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    color: "#111827",
  },

  updateButton: {
    backgroundColor: "#19C37D",
    height: 48,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
  },

  updateButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },

  settingRow: {
    backgroundColor: "#F7F9FB",
    borderRadius: 16,
    padding: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  settingLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  statBox: {
    width: "48.5%",
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 12,
    alignItems: "center",
    marginBottom: 12,
  },

  statGreen: {
    backgroundColor: "#EEF8F3",
  },

  statBlue: {
    backgroundColor: "#EEF4FF",
  },

  statYellow: {
    backgroundColor: "#FFF7E8",
  },

  statNumber: {
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 4,
  },

  statText: {
    fontSize: 13,
    color: "#7C8DA6",
  },

  logoutButton: {
    height: 48,
    borderRadius: 14,
    backgroundColor: "#FFF1F2",
    borderWidth: 1,
    borderColor: "#FECACA",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  logoutText: {
    color: "#FF5A5F",
    fontWeight: "700",
    marginLeft: 6,
  },
});