import { Toaster } from "react-hot-toast";
import Header from "./components/Header/Header";
import PromoSlider from "./components/PromoSlider/PromoSlider";
import CartDrawer from "./components/CartDrawer/CartDrawer";
import FloatingCTA from "./components/FloatingCTA/FloatingCTA";
import Products from "./sections/Products/Products";
import Contacts from "./sections/Contacts/Contacts";
import Footer from "./sections/Footer/Footer";
function App() {
  return (
      <>
        <Toaster position="top-right" />
        <Header />
        <CartDrawer />
        <main>
          <PromoSlider />
          <Products />
          <Contacts />
        </main>
        <Footer />
        <FloatingCTA />
      </>
  );
}
export default App;