import { useState } from "react";
import styles from "./Products.module.scss";
import { products } from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";
import CategoryTabs from "../../components/CategoryTabs/CategoryTabs";

const categories = [
    "All",
    "Sushi",
    "Pizza",
    "Wok",
    "Desserts",
    "Drinks",
    "Boxes",
];

const Products = () => {
    const [active, setActive] = useState("All");

    const filtered =
        active === "All"
            ? products
            : products.filter((p) => p.category === active);

    return (
        <section className={`section ${styles.products}`}>
            <div className="container">
                <CategoryTabs
                    categories={categories}
                    active={active}
                    setActive={setActive}
                />
                <div id="catalog" className={styles.grid}>
                    {filtered.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Products;