import styles from "./FloatingCTA.module.scss";
import { ShoppingBag } from "lucide-react";
import { useCartStore } from "../../store/cartStore";

const FloatingCTA = () => {
    const { cart, openCart } = useCartStore();

    const count = cart.reduce((a, b) => a + b.quantity, 0);

    return (
        <button className={styles.cta} onClick={openCart}>
            <ShoppingBag />
            {count > 0 && <span>{count}</span>}
        </button>
    );
};

export default FloatingCTA;