# R N Architecture

### This architecture is configured with react-navigation, redux, redux-saga and redux-persist.

## Screens

* Splash
* Login
* Home
* Profile

## Getting Started

1. Clone this repo, `git clone https://github.com/Thanhal-P-A/React-Native-Boilerplate-Architecture.git <your project name>`
2. Go to project's root directory, `cd <your project name>`
3. Remove `.git` folder,  `rm -rf .git`
4. Open `package.json` and change the `name` property with your project name
5. Open `index.js` and replace `'RNArchitecture'` by your project name
6. Open `app.json` and replace `'RNArchitecture'` by your project name 
7. Run `yarn` or `npm install` to install dependencies
8. After installing dependencies run `npx react-native start` to start the packager
9. Connect a mobile device to your development machine or open an emulator
10. Run the test application :
  * On Android:
    * Open another terminal and run `npx react-native run-android`
  * On iOS:
    * Open `ios/YourReactProject.xcodeproj` in Xcode
    * Hit `Run` after selecting the desired device
11. If build failed in android :
    * Open `android/app` in android studio and wait for indexing and synching the project. Then run `npx react-native run-android` or hit `Run` button after selecting device or emulator from android studio
    * If connection error occur, try running command `adb reverse tcp:8081 tcp:8081` to reverse proxy then retry.
12. There You Go !!!!

# React-Native-Boilerplate-Architecture
