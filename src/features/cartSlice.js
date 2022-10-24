import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify'

const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,


}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            )
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
                toast.info(`Outro ${state.cartItems[itemIndex].name} adicionado ao carrinho`, {
                    position: "bottom-left",
                })
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 }
                state.cartItems.push(tempProduct);
                toast.success(`${action.payload.name} adicionado ao carrinho `, {
                    position: "bottom-left",
                })
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))

        },
        removeFromCart(state, action) {
            const nextCartItems = state.cartItems.filter(
                (cartItem) => cartItem.id !== action.payload.id
            )
            state.cartItems = nextCartItems
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems)) // Remover do local storage

            toast.error(`${action.payload.name} removido do carrinho `, {
                position: "bottom-left",
            })
        },
        decreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );

            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;

                toast.info(`Diminuida a quantia de ${action.payload.name} do carrinho `, {
                    position: "bottom-left",
                });
            } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const nextCartItems = state.cartItems.filter(
                    (item) => item.id !== action.payload.id
                );

                state.cartItems = nextCartItems;

                toast.error(`${action.payload.name} removido do carrinho `, {
                    position: "bottom-left",
                });
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        clearCart(state, action) {
            state.cartItems = [];
            toast.error(`Todos os itens removidos do carrinho!`, {
                position: "bottom-left",
            });
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

        },
        checkout(state, action) {
            state.cartItems = [];
            toast.success(`Compra finalizada com sucesso`, {
                position: "bottom-left",
            });
           state.cartTotalQuantity = 0
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            

        },
        getTotals(state, action) {
            let { total, quantity } = state.cartItems.reduce
                ((cartTotal, cartItem) => {
                    const { price, cartQuantity } = cartItem
                    const itemTotal = price * cartQuantity

                    cartTotal.total += itemTotal
                    cartTotal.quantity += cartQuantity

                    return cartTotal
                },
                    {
                        total: 0,
                        quantity: 0
                    })
                    state.cartTotalQuantity = quantity;
                    state.cartTotalAmount = total;
        },
        filter(state, action){
            const data = (data.filter(({ name }) => name === `${state.value}`))
        }

    }
})

export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotals, checkout, filter } = cartSlice.actions;

export default cartSlice.reducer;