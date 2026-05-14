import styles from "./Header.module.scss";

import {
    Menu,
    X,
} from "lucide-react";

import {
    FaLinkedinIn,
    FaInstagram,
    FaFacebookF,
} from "react-icons/fa";

import { useCartStore } from "../../store/cartStore";
import { useState } from "react";

const Header = () => {
    const { cart, openCart } = useCartStore();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const total = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );
    const count = cart.reduce(
        (acc, item) => acc + item.quantity,
        0
    );
    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };
    return (
        <header className={styles.header}>
            <div className={`container ${styles.wrapper}`}>
                <div className={styles.logo}>
                    <div className={styles.logoFrame}></div>

                    <div className={styles.logoText}>
                        <span className={styles.yellowText}>yum</span>box
                    </div>
                </div>

                <nav className={styles.nav}>
                    <a href="#">Каталог</a>
                    <a href="#">Кейтеринг</a>
                    <a href="#">Про нас</a>
                    <a href="#">Контакти</a>
                </nav>
                <div className={styles.actions}>
                    <button
                        className={styles.cart}
                        onClick={openCart}
                    >
                        <span className={styles.countBadge}>
                            {count}
                        </span>
                        <span className={styles.totalPrice}>
                            {total} грн
                        </span>
                    </button>
                    <button
                        className={styles.burger}
                        onClick={toggleMenu}
                    >
                        <span className={styles.menuText}>
                            Меню
                        </span>
                        {isMenuOpen ? (
                            <X size={34} />
                        ) : (
                            <Menu size={34} />
                        )}
                    </button>
                </div>
            </div>
            <div
                className={`${styles.mobileMenu} ${
                    isMenuOpen
                        ? styles.mobileMenuOpen
                        : ""
                }`}
            >
                <div className={styles.mobileContent}>
                    <button
                        className={styles.mobileCart}
                        onClick={openCart}
                    >
                        <span className={styles.countBadge}>
                            {count}
                        </span>
                        <span className={styles.totalPrice}>
                            {total} грн
                        </span>
                    </button>
                    <nav className={styles.mobileNav}>
                        <a href="#" onClick={toggleMenu}>
                            Каталог
                        </a>
                        <a href="#" onClick={toggleMenu}>
                            Кейтеринг
                        </a>
                        <a href="#" onClick={toggleMenu}>
                            Про нас
                        </a>
                        <a href="#" onClick={toggleMenu}>
                            Контакти
                        </a>
                    </nav>
                    <div className={styles.mobileContacts}>
                        <a href="mailto:yumbox.lutsk@gmail.com">
                            yumbox.lutsk@gmail.com
                        </a>
                        <a href="tel:+380938239293">
                            +380 93 823 92 93
                        </a>
                    </div>
                    <div className={styles.socials}>
                        <a href="#">
                            <FaLinkedinIn/>
                        </a>
                        <a href="#">
                            <FaInstagram/>
                        </a>
                        <a href="#">
                            <FaFacebookF/>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Header;