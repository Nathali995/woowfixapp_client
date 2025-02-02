 const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

module.exports = (async () => { 
	const {  
		resolver: { 
			sourceExts, 
			assetExts 
		}  
	} = await getDefaultConfig(); 

	return {
		transformer: {  
			getTransformOptions: async () => ({
				transform: {
					experimentalImportSupport: false,
					inlineRequires: false,
			  	},
			}),    
			babelTransformerPath: require.resolve("react-native-svg-transformer"),    
		},    
		resolver: {
			assetExts: assetExts.filter(ext => ext !== "svg"),
			sourceExts: [...sourceExts, "svg", 'jsx', 'js', 'ts', 'tsx']    
		}
	};
})();