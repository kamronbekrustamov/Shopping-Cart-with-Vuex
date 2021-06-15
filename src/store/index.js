import { createStore } from 'vuex'


const store = createStore({
  modules: {

  },
  state() {
    return {
      products: [
        {
          id: 1,
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg',
          title: 'Book Collection',
          description: 'A collection of must-read books. All-time classics included!',
          price: 99.99,
        },
        {
          id: 2,
          image: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Tent_at_High_Shelf_Camp_cropped.jpg/640px-Tent_at_High_Shelf_Camp_cropped.jpg',
          title: 'Mountain Tent',
          description: 'A tent for the ambitious outdoor tourist.',
          price: 129.99,
        },
        {
          id: 3,
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
          title: 'Food Box',
          description: 'May be partially expired when it arrives but at least it is cheap!',
          price: 6.99,
        },
      ],
      isLoggedIn: false,
      cart: { items: [], total: 0, quantity: 0 },
    };
  },
  getters: {
    products(state) {
      return state.products;
    },
    isLoggedIn(state) {
      return state.isLoggedIn;
    },
    cart(state) {
      return state.cart;
    }
  },
  mutations: {
    addProductToCart(state, product) {
      const productIndexInCart = state.cart.items.findIndex(
        cartItem => cartItem.id === product.id
      );

      if (productIndexInCart >= 0) {
        state.cart.items[productIndexInCart].quantity++;
      } else {
        const newItem = {
          id: product.id,
          title: product.title,
          image: product.image,
          price: product.price,
          quantity: 1,
        };
        state.cart.items.push(newItem);
      }
      state.cart.quantity++;
      state.cart.total += product.price;
    },

    removeProductFromCart(state, productId) {
      const productIndexInCart = state.cart.items.findIndex(
        cartItem => cartItem.id === productId
      );
      const cartItem = state.cart.items[productIndexInCart];
      state.cart.items.splice(productIndexInCart, 1);
      state.cart.quantity -= cartItem.quantity;
      state.cart.total -= cartItem.price * cartItem.quantity;
    },

    login(state) {
      state.isLoggedIn = true;
    },

    logout(state) {
      state.isLoggedIn = false;
    }
  },
  actions: {

  }
});

export default store;