# prodev-mobile-app-0x01

## 📱 React Native Components and Styling

### Objective

In React Native, you work with predefined components that map directly to native components on iOS and Android.  
These components act as the building blocks of your application, much like HTML elements in web development:

- `<View>` → similar to `<div>`
- `<Text>` → similar to `<p>`

Styling in React Native is achieved using **JavaScript objects** (via `StyleSheet`), similar to inline styles in React web applications. This keeps styling flexible and consistent across platforms.

---

## 🚀 Steps Followed

1. **Initialize Project**

   ```bash
   cd prodev-mobile-setup
   npx create-expo-app@latest prodev-mobile-app-0x01
   ```

2. **Reset Application**

   ```bash
   cd prodev-mobile-app-0x01
   npm run reset-project
   ```

   - Selected **Y** to move the default template into `/app-example`.
   - Left with a clean `/app` directory for customization.

3. **Update Entry Screen**

   - Opened `app/index.tsx`.
   - Updated main `<Text>` component to:

     ```
     Entry Screen - Awesome
     ```

4. **Modify Root `<View>`**

   - Replaced inline styles with:

     ```tsx
     style={styles.container}
     ```

5. **Added Additional Text Components**

   ```tsx
   <View style={styles.container}>
     <Text style={styles.largeText}>
       Typescript is great if you practice more
     </Text>
     <Text style={styles.mediumText}>
       React Native provides you a single codebase for cross platforms
     </Text>
     <Text style={styles.smallText}>ALX is awesome</Text>
   </View>
   ```

6. **Defined Styles**

   ```tsx
   const styles = StyleSheet.create({
     container: {
       backgroundColor: "#90caf9",
     },
     largeText: {
       fontSize: 30,
       color: "#f44336",
       marginBottom: 5,
       fontWeight: "700",
       fontVariant: ["small-caps"],
     },
     mediumText: {
       fontSize: 20,
       color: "#9c27b0",
       marginBottom: 10,
       fontWeight: "500",
       textAlign: "right",
     },
     smallText: {
       fontSize: 15,
       color: "#2196f3",
       fontWeight: "400",
       textAlign: "center",
     },
   });
   ```

---