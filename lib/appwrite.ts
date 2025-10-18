import { Client, Databases } from "react-native-appwrite";

const endpoint = process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT;
const projectId = process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID;

if (!endpoint || !projectId) {
  throw new Error(
    "Missing Appwrite endpoint or project ID environment variables."
  );
}

const client = new Client().setEndpoint(endpoint).setProject(projectId);

export const database = new Databases(client);
export default client;
