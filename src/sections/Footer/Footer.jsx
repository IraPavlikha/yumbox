import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div>
                        <h3>YUMBOX</h3>
                        <p>Premium food delivery platform</p>
                    </div>

                    <div>
                        <h4>Navigation</h4>
                        <p>Menu</p>
                        <p>Catering</p>
                        <p>About</p>
                    </div>

                    <div>
                        <h4>Contacts</h4>
                        <p>+380 93 823 92 93</p>
                        <p>yumbox.lutsk@gmail.com</p>
                    </div>

                    <div>
                        <h4>Social</h4>
                        <p>Instagram</p>
                        <p>Facebook</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;