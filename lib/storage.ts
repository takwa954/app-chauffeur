import AsyncStorage from "@react-native-async-storage/async-storage";

export async function saveAuth(token: string, user: any) {
  await AsyncStorage.setItem("token", token);
  await AsyncStorage.setItem("user", JSON.stringify(user));
}

export async function getToken() {
  return AsyncStorage.getItem("token");
}

export async function getUser() {
  const user = await AsyncStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

export async function clearAuth() {
  await AsyncStorage.removeItem("token");
  await AsyncStorage.removeItem("user");
}