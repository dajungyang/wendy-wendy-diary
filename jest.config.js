module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/no-babel',
    "moduleNameMapper": {
          "^@/(.*)$": "<rootDir>/$1"
        },
        "moduleFileExtensions": [
          "js",
          "json",
          "vue"
        ],
        "transform": {
          ".*\\.(vue)$": "vue-jest"
        }
}
