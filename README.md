# React Native Submission App

A mobile application built with React Native that allows users to submit posts with titles and images, and view their submission history.

## 📱 Features

- **Create Submissions**: Submit posts with a title and image from your gallery
- **View History**: Browse all your previous submissions
- **Image Support**: Select images from your device's gallery
- **Offline Resilience**: Handles network errors gracefully
- **Modern UI**: Clean and intuitive user interface

## 🛠 Tech Stack

- **Framework**: React Native with TypeScript
- **Navigation**: React Navigation
- **HTTP Client**: Axios
- **Image Picker**: Expo Image Picker
- **State Management**: React Hooks
- **Build Tool**: Expo

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- Android Studio (for Android development) or Xcode (for iOS development)
- Expo Go app on your physical device

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/jeikudev/mobile-developer-test.git
cd mobile-developer-test
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure Environment

The app is pre-configured with the API endpoint. If needed, update it in `src/constants/api.ts`:

```typescript
export const API_BASE_URL = "http://35.88.88.102:9000";
export const USER = "juan-cruz"; // Hardcoded user identifier
```

### 4. Start the Development Server

```bash
npx expo start
```

This will open the Expo Dev Tools in your browser. You can:

- Scan the QR code with Expo Go app (on your physical device)
- Press `a` to open on Android emulator
- Press `i` to open on iOS simulator

## 🌐 HTTP Configuration

This app includes special HTTP configuration for development:

### Network Security Config

The app uses a custom `network_security_config.xml` to allow HTTP connections to the backend server:

```xml
<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
    <base-config cleartextTrafficPermitted="true">
        <trust-anchors>
            <certificates src="system" />
            <certificates src="user" />
        </trust-anchors>
    </base-config>
    <domain-config cleartextTrafficPermitted="true">
        <domain includeSubdomains="true">35.88.88.102</domain>
    </domain-config>
</network-security-config>
```

### Expo Configuration

The `app.json` is configured to allow cleartext traffic:

```json
{
  "android": {
    "usesCleartextTraffic": true,
    "networkSecurityConfig": "res/xml/network_security_config.xml"
  }
}
```

## 📱 Building the APK

### For Development Build

```bash
npx expo prebuild
npx eas build --platform android --profile development
```

### For Preview APK (Recommended for testing)

```bash
npx expo prebuild
npx eas build --platform android --profile preview
```

### For Production Build

```bash
npx expo prebuild
npx eas build --platform android --profile production
```

The APK will be available for download from your Expo dashboard.

## 🏗 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button/
│   └── SubmissionCard/
├── screens/            # App screens
│   ├── SubmitScreen/
│   └── ViewSubmissionScreen/
├── hooks/              # Custom React hooks
│   ├── useImagePicker.ts
│   ├── useRetrieve.ts
│   └── useSubmitForm.ts
├── api/                # API functions
│   └── index.ts
├── constants/          # App constants
│   ├── api.ts
│   ├── colors.ts
│   └── layout.ts
└── types/              # TypeScript type definitions
    └── index.ts
```

## 🔧 API Integration

The app integrates with two endpoints:

- **POST** `/api/form/submit` - Submit new post with title and image
- **GET** `/api/retrieve/{user}` - Retrieve user's submission history

### Example Payload

```json
{
  "user": "juan-cruz",
  "text": "My submission title",
  "file": "data:image/png;base64,..."
}
```

## 🎨 Customization

### Colors

Edit `src/constants/colors.ts` to change the app's color scheme:

```typescript
export const Colors = {
  primary: "#2563eb",
  background: "#ffffff",
  // ... other colors
};
```

### Layout

Modify `src/constants/layout.ts` to adjust spacing and borders:

```typescript
export const Layout = {
  padding: 16,
  borderRadius: 12,
  // ... other layout values
};
```

## 🐛 Troubleshooting

### Common Issues

1. **White text in APK build**

   - Fixed by explicitly setting text colors in styles

2. **Network errors**

   - Ensure the API endpoint is correctly configured
   - Check device network connectivity
   - Verify the server is running on `35.88.88.102:9000`

3. **Image picker not working**

   - Verify camera roll permissions are granted
   - Check Expo Image Picker configuration

4. **Build failures**

   - Clear cache: `npx expo start --clear`
   - Delete node_modules and reinstall dependencies

5. **HTTP connection issues**
   - The app is configured for HTTP cleartext traffic
   - Ensure network security config is properly set up

## 📝 Scripts

- `yarn start` - Start development server
- `yarn android` - Run on Android
- `yarn ios` - Run on iOS
- `yarn web` - Run on web
- `yarn build` - Build production APK

## 📄 License

This project is for assessment purposes as part of the React Native Developer practical test.

---

**Note**: This app is configured to connect to `http://35.88.88.102:9000` with cleartext HTTP traffic enabled for development purposes.
