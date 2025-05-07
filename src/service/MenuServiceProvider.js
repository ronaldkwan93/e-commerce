import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

export const getMenuData = async () => {
  const querySnapshot = await getDocs(collection(db, "Items"));
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return data;
};

export const getItemById = async (itemId) => {
  const docRef = doc(db, "Items", itemId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return {
      id: docSnap.id,
      ...docSnap.data(),
    };
  } else {
    console.log("No such document!");
    return null;
  }
};

export const addItemToCart = async (item) => {
  try {
    const docRef = await addDoc(collection(db, "Cart"), item);
    console.log("Cart item added with ID: ", docRef.id);
    return docRef;
  } catch (e) {
    console.error("Error adding item to cart: ", e);
    throw e;
  }
};

export const getCartItems = async () => {
  const querySnapshot = await getDocs(collection(db, "Cart"));
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return data;
};

export const subscribeToCartItems = (callback) => {
  const unsubscribe = onSnapshot(collection(db, "Cart"), (snapshot) => {
    const cartItems = [];
    snapshot.forEach((doc) => {
      cartItems.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    callback(cartItems);
  }, (error) => {
    console.error("Error subscribing to cart: ", error);
  });
  
  return unsubscribe;
};

export const deleteItemFromCard = async (itemId) => {
  await deleteDoc(doc(db, "Cart", itemId));
  return true;
}
