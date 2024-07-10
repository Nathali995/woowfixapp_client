import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const SkelPlaceholder = () => {

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item flexDirection="row">
          <SkeletonPlaceholder.Item marginLeft={2}>
            <SkeletonPlaceholder.Item width={120} height={20} borderRadius={4} />
            <SkeletonPlaceholder.Item marginTop={6} width={80} height={20} borderRadius={4} />
            <SkeletonPlaceholder.Item flexDirection="row" marginTop={6}>
              <SkeletonPlaceholder.Item width={80} height={20} borderRadius={4} />
              <SkeletonPlaceholder.Item marginLeft={10} width={50} height={20} borderRadius={4} />
            </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item marginLeft={2}>
            <SkeletonPlaceholder.Item width={150} height={20} borderRadius={4}  />
            <SkeletonPlaceholder.Item marginTop={6} width={80} height={20} borderRadius={4} />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </View>
  );
};

export default SkelPlaceholder;
