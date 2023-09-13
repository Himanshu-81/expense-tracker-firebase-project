import {addDoc, collection, serverTimestamp} from 'firebase/firestore'
import {db} from '../config/firebase-config'
import { useGetUserInfo } from './useGetUserInfo';

export const  useAddTransaction = () => {
    const transactionCollectionRef = collection(db, "transactions");
    const {userId} = useGetUserInfo()

    const addTransactions = async ({description, transactionAmount, transactionType}) => {
        await addDoc(transactionCollectionRef, {
            userId,
            description,
            transactionAmount,
            transactionType,
            createdAt: serverTimestamp()
        })
    }
    return {addTransactions}
}