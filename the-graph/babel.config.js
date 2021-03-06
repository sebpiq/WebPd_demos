module.exports = function (api) {
    api.cache(false)

    let presets = [];
    let plugins = [];
  
    presets = [                                 // NOTE: PRESET ORDER IS LAST TO FIRST
      [
        "@babel/preset-env", 
          { 
            targets: "> 0.25%, not dead" 
          }
      ],
      "@babel/preset-react",
      "@babel/preset-typescript"
    ];
  
    return ({
      presets,
      plugins,
    });
  };
  