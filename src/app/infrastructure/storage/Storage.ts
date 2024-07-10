import {IStorage} from 'src/app/infrastructure/storage/IStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class AsyncStorageImpl implements IStorage {
  public async set(key: string, value: any): Promise<void> {
    try {
      const valueString = JSON.stringify(value);
      await AsyncStorage.setItem(key, valueString);
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public async get(key: string): Promise<any> {
    try {
      let valueJson: any = await AsyncStorage.getItem(key);
      valueJson = JSON.parse(valueJson);
      return Promise.resolve(valueJson);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public remove(key?: string): Promise<void> {
    try {
      // eslint-disable-next-line no-extra-boolean-cast
      if (!!key) {
        return AsyncStorage.removeItem(key);
      }

      return AsyncStorage.clear();
    } catch (error) {
      return Promise.reject(error);
    }
  }
}