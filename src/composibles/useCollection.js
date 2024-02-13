import { db } from "@/firebase/config";
import { doc, onSnapshot ,collection , orderBy, query} from "firebase/firestore";
import { ref } from 'vue';

const useCollection = (T) => {
    const data = ref();
    const error = ref(null);

    const collectionRef = collection(db, T)

    const q = query(collectionRef, orderBy("createdAt", "asc"));

    const unsub = onSnapshot(q, (doc) => {
        let result = [];
        doc.forEach((doc) => {
            result.push({...doc.data(), id: doc.id});
        });
        data.value = result;
        error.value = null;
    });

    return { data, error , unsub};
}

export default useCollection;