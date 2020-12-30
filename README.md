# dingdongbaby

## About
Dingdong Baby is a photo challenge game for parents with young children, where winning means building an album of funny and unique photos.

Built with React Native, not exported from Expo. Run yarn start to start project

## App Structure
The App mounts the Main component from the App component. The Main component currently houses the Screen Navigation, App wide state (with React Hooks Create Context API), imports the theme and different styles, and houses the helpers that manage the state. 

## Dingdong Baby State
The application state generally consists of two parts: User and App. Right now, the app uses the phones local storage for storing information about the app, but in the future it will also utilize the Node server and Mongo Atlas database.

### User State
User information that is specific to this user. Such as family information, unlocked packages, dates updated (for choosing which state to use in the server/local storage), user settings, and where the completed challenge photos are stored on the device. 

### App State
App wide information that is generic and can be pulled from the server (TODO, right now is just hardcoded local storage). Such as conditionally rendering screens/information, unlocked challenges to display in the app, randomized sales copy, and general settings. 
