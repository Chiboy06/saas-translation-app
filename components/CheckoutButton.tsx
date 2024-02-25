'use client'

import { useSession } from "next-auth/react"
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase";

function CheckoutButton() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  const createCheckoutSession = async () => {
    if (!session?.user.id) return;

    // push a document to firestore db
    setLoading(true);

    const docRef = await addDoc(collection(db, 'customers', session.user.id, 'checkout_sessions'), {
      price: "price_1O0998KDjTc6FlwiIL3eBoYQ",
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    })

    // ... stripe extension on firebse will create a checkout session

    // redirect user to checkout page
  }

  return (
    <div className='flex flex-col space-y-2'>
      {/* If subscribed show that the user is subscribed */}
      <button onClick={() => createCheckoutSession()} className='mt-8 block bg-indigo-600 text-center text-sm 
      px-3.5 py-2 text-white rounded-600 leading-6 cursor-pointer disabled:opacity-60 font-semibold
      shadow-sm hover:bg-indigo-500 focus-visible:outline-offset-2 focus-visible:outline 
      focus-visible:outline-2 disabled:bg-indigo-600/50 disabled:text-white disabled:cursor-default'>
        Sign Up
      </button>
    </div>
  )
}

export default CheckoutButton