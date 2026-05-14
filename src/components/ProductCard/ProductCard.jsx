import styles from "./ProductCard.module.scss";
import { useCartStore } from "../../store/cartStore";
import { HiCheckCircle } from "react-icons/hi";

const ProductCard = ({ product }) => {
    const { addToCart, cart } = useCartStore();

    const cartItem = cart.find((item) => item.id === product.id);
    const isAdded = !!cartItem;

    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <img src={product.image} alt={product.title} />
            </div>

            <div className={styles.content}>
                <h3>{product.title}</h3>
                <span className={styles.weight}>{product.weight || "1500 гр"}</span>

                <div className={styles.interactiveArea}>
                    {isAdded ? (
                        <div className={styles.addedStatus}>
                            <HiCheckCircle className={styles.icon} />
                            <span>
                                В кошику <strong>{cartItem.quantity} шт</strong> за <strong>{cartItem.price * cartItem.quantity} грн</strong>
                            </span>
                        </div>
                    ) : (
                        <div className={styles.priceWrapper}>
                            <span className={styles.price}>{product.price} грн</span>
                            <button
                                className={styles.addBtn}
                                onClick={() => addToCart(product)}>
                                Добавити в кошик
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default ProductCard;