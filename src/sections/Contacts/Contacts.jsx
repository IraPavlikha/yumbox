import styles from "./Contacts.module.scss";

const Contacts = () => {
    return (
        <section className={`section ${styles.contacts}`}>
            <div className="container">
                <h2>Contacts</h2>

                <div className={styles.grid}>
                    <div>
                        <p>+380 93 823 92 93</p>
                        <p>Instagram: @yumbox</p>
                        <p>Facebook: @yumbox</p>
                        <p>Lutsk, Ukraine</p>
                    </div>

                    <div className={styles.map}>
                        MAP PLACEHOLDER
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;