import styles from "./CartDrawer.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useCartStore } from "../../store/cartStore";
import { HiOutlineTrash, HiOutlineX } from "react-icons/hi";

const CartDrawer = () => {
    const { cart, isOpen, closeCart, increase, decrease, removeItem } = useCartStore();
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const deliveryFee = 50;
    const discount = subtotal >= 1000 ? subtotal * 0.1 : 0;

    const totalToPay = (subtotal - discount) + deliveryFee;

    const handleCheckout = () => {
        console.log("Дані замовлення:", {
            items: cart,
            subtotal,
            discount,
            delivery: deliveryFee,
            total: totalToPay
        });
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        className={styles.backdrop}
                        onClick={closeCart}
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    />
                    <motion.div
                        className={styles.drawer}
                        initial={{x: "100%"}} animate={{x: 0}} exit={{x: "100%"}}
                        transition={{type: "tween", duration: 0.4}}
                    >
                        <div className={styles.header}>
                            <h2>Корзина</h2>
                            <button onClick={closeCart} className={styles.closeBtn}>
                                <HiOutlineX/>
                            </button>
                        </div>

                        <div className={styles.items}>
                            {cart.map((item) => (
                                <div key={item.id} className={styles.item}>
                                    <div className={styles.itemTop}>
                                        <img src={item.image} alt=""/>
                                        <div className={styles.itemInfo}>
                                            <h4>{item.title}</h4>
                                            <span>{item.weight || '1500 гр'}</span>
                                        </div>
                                        <button className={styles.removeBtn} onClick={() => removeItem(item.id)}>
                                            <HiOutlineTrash/>
                                        </button>
                                    </div>

                                    <div className={styles.itemBottom}>
                                        <div className={styles.price}>{item.price} ₴</div>
                                        <div className={styles.counter}>
                                            <button onClick={() => decrease(item.id)}>−</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => increase(item.id)}>+</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={styles.footer}>
                            <div className={styles.summary}>
                                <div className={styles.row}>
                                    <span>Сума замовлення</span>
                                    <span>{subtotal} ₴</span>
                                </div>

                                {discount > 0 && (
                                    <div className={`${styles.row} ${styles.discount}`}>
                                        <span>Знижка 10% (від 1000 ₴)</span>
                                        <span>-{discount.toFixed(0)} ₴</span>
                                    </div>
                                )}

                                <div className={styles.row}>
                                    <span>Доставка</span>
                                    <span>{deliveryFee} ₴</span>
                                </div>
                            </div>

                            <button className={styles.checkoutBtn} onClick={handleCheckout}>
                                оформити за {totalToPay.toFixed(0)} ₴
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartDrawer;