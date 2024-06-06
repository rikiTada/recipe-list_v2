import db from "@/lib/firebase";
import {
  collection,
  doc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  QuerySnapshot,
} from "firebase/firestore";

export const getSaveItems = async (ref: string) => {
  const itemsRef = collection(db, ref);

  const querySnapshot = await getDocs(
    query(itemsRef, orderBy("timeStamp", "desc"))
  );

  const items: any = [];

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    data.id = doc.id;
    data.timeStamp = data.timeStamp.toDate().toLocaleDateString();
    items.push(data);
  });

  return items;
};

export const deleteItems = async (ref: string, id: string) =>
  await deleteDoc(doc(db, ref, id));
