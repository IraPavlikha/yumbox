import styles from "./CategoryTabs.module.scss";
import clsx from "clsx";

const CategoryTabs = ({ categories, active, setActive }) => {
    return (
        <div className={styles.tabs}>
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => setActive(category)}
                    className={clsx(
                        styles.tab,
                        active === category && styles.active
                    )}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategoryTabs;