/**
 * Nodc Modules
 */
import { Client, Account } from 'appwrite';
/**
 * Initialize Appwrite client
 */
const client = new Client();
client
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)
  .setEndpoint('https://cloud.appwrite.io/v1');
/**
 * Initialize Appwrite account
 */
const account = new Account(client);

export { account };
