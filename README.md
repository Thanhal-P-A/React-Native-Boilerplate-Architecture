# R N Architecture

### This architecture is configured with react-navigation, redux, redux-saga and redux-persist.

## Screens

* Splash
* Login
* Home
* Profile

## Getting Started

1. Clone this repo, `git clone https://github.com/Thanhal-P-A/React-Native-Boilerplate-Architecture.git`
2. Go to project's root directory, run `cd React-Native-Boilerplate-Architecture`
3. Remove `.git` folder, run `rm -rf .git`
4. Run `yarn` or `npm install` to install dependencies
5. After installing dependencies run `npx react-native start` to start the packager
6. Connect a mobile device to your development machine or open an emulator
7. Run the application :
  * On Android:
    * Open another terminal and run `npx react-native run-android`
  * On iOS:
    * Open `ios/YourReactProject.xcodeproj` in Xcode
    * Hit `Run` after selecting the desired device
8. If build failed in android :
    * Open `android/app` in android studio and wait for indexing and synching the project. Then run `npx react-native run-android` or hit `Run` button after selecting device or emulator from android studio
    * If connection error occur, try running command `adb reverse tcp:8081 tcp:8081` to reverse proxy then retry.
9. There You Go !!!!
