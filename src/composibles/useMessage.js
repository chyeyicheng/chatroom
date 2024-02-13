import { db } from "@/firebase/config";
import { collection, addDoc } from "firebase/firestore"; 


const useMessage = async (message) => {
    const docRef = await addDoc(collection(db, "messages"), {
        createdAt: message.createdAt,
        message: message.message,
        user :message.user
    });
}   

export default useMessage;