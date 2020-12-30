# dingdongbaby

## About
Dingdong Baby is a photo challenge game for parents with young children, where winning means building an album of funny and unique photos.

Built with React Native, not exported from Expo. Run `yarn start` to start project (please note RN requires an android/iOS emulator to run).

## App Structure
The App mounts the Main component from the App component. The Main component currently houses the Screen Navigation, App wide state (with React Hooks Create Context API), imports the theme and different styles, and houses the helpers that manage the state. 

## Dingdong Baby State
The application state generally consists of two parts: User and App. Right now, the app uses the phones local storage for storing information about the app, but in the future it will also utilize the Node server and Mongo Atlas database.

### User State
User information that is specific to this user. Such as family information, unlocked packages, dates updated (for choosing which state to use in the server/local storage), user settings, and where the completed challenge photos are stored on the device. 

### App State
App wide information that is generic and can be pulled from the server (TODO, right now is just hardcoded local storage). Such as conditionally rendering screens/information, unlocked challenges to display in the app, randomized sales copy, and general settings. In the app, for ease of use, the settings array within the app state returned from Local Storage/Server is put into its own React Context, so we can easily list/render the different settings themselves. 

## Folder Explanations
### /assets
Expo app assets and fonts.

### /app
Houses the ... well ... App.

### /app/assets
General app photos, SVGs and test images.

### /app/database
Deprecated, to be removed and be handled by server.

### /app/screens
Highest level components, components first seen when navigating between screens. Container/smart components.

### /app/components
Components that are of a smaller scale than a screen component. Generally a smart component.

### /app/components/styleComponents
Reusable components that are generally simple styled components. There are a lot of text components, because in RN it is difficult to use classes, so to replace the CSS class way of thinking we export components instead. 

### /app/helpers
Reusable JavaScript functions, getting/setting state from local storage, and initial state for application state.

### /app/state
Used for setting initial app state context.
