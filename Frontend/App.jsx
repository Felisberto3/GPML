import { useFonts } from "expo-font"; 
import fonts from "./config/fonts";

import Navigation from "./navigation";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  return !fontsLoaded ? null : (
    <AuthProvider>
      <Navigation/>
    </AuthProvider>
  );
}
