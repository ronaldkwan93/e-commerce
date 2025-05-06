import { collection, doc, getDoc, getDocs } from "firebase/firestore"; 
import { db } from "../firebase";

export const getMenuData = async() => {
    const querySnapshot = await getDocs(collection(db, "Items"));
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({
        id: doc.id,
        ...doc.data()
      })
    });
    return data;
}

export const getItemById = async(itemId) => {
  const docRef = doc(db, "Items", itemId);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    return {
      id: docSnap.id,
      ...docSnap.data()
    };
  } else {
    console.log("No such document!");
    return null;
  }
}