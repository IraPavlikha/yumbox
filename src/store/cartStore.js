import { create } from "zustand";

export const useCartStore = create((set) => ({
    cart: [],
    isOpen: false,

    openCart: () => set({ isOpen: true }),
    closeCart: () => set({ isOpen: false }),

    addToCart: (product) =>
        set((state) => {
            const existing = state.cart.find((i) => i.id === product.id);

            if (existing) {
                return {
                    cart: state.cart.map((item) =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            }

            return {
                cart: [...state.cart, { ...product, quantity: 1 }],
            };
        }),

    increase: (id) =>
        set((state) => ({
            cart: state.cart.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ),
        })),

    decrease: (id) =>
        set((state) => ({
            cart: state.cart
                .map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0),
        })),

    removeItem: (id) =>
        set((state) => ({
            cart: state.cart.filter((item) => item.id !== id),
        })),
    clearCart: () => set({ cart: [] }),
}));