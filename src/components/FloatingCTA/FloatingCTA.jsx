import styles from "./FloatingCTA.module.scss";
import { ShoppingBag } from "lucide-react";
import { useCartStore } from "../../store/cartStore";

const FloatingCTA = () => {
    const { cart, openCart } = useCartStore();

    const count = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    if (count === 0) return null;

    return (
        <button className={styles.cta} onClick={openCart}>
            <div className={styles.badge}>
                <ShoppingBag className={styles.icon} />
                <span className={styles.count}>{count}</span>
            </div>
            <span className={styles.price}>{totalPrice} грн</span>
        </button>
    );
};

export default FloatingCTA;