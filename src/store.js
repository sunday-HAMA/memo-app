import AsyncStorage from '@react-native-async-storage/async-storage';

export const save = async (text, createdAt) => {
  try {
  const key = `${createdAt}`; 
  const value = JSON.stringify({
    text,
    createdAt,  
  });
  await AsyncStorage.setItem(key, value); 
  } catch (e) {
    alert (e)
  }
};

export const loadAll = async () => {   
  try {
  const keys = await AsyncStorage.getAllKeys();
  keys.sort();   
  const entryList = await AsyncStorage.multiGet(keys);
  return entryList.map(entry => JSON.parse(entry[1]));   
  } catch (e) {
    alert(e)
  }
};