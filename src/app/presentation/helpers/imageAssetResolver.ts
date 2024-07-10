import {Image} from 'react-native';

export default function retrieveUriFromAsset(assetFolderImage: string): string {
  return Image.resolveAssetSource(Number(assetFolderImage)).uri;
}
