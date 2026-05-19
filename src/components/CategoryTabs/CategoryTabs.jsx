import styles from "./CategoryTabs.module.scss";
import clsx from "clsx";

const CategoryTabs = ({ categories, active, setActive }) => {

    const handleTabClick = (category) => {
        setActive(category);

        const catalogElement = document.getElementById("catalog");

        if (catalogElement) {
            const offset = 140;
            const elementPosition = catalogElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className={styles.tabs}>
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => handleTabClick(category)}
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