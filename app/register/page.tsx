import { authOptions } from "@/auth"
import PricingCards from "@/components/PricingCards";
import { getServerSession } from "next-auth"
import MembershipDetails from '@/components/MembershipDetails'

async function Register() {
    const session = await getServerSession(authOptions);
  return (
    <div className="isolate h-full overflow-hidden bg-gray-900 pb-40">
        <MembershipDetails session={session} />

        <PricingCards redirect={false}/>
    </div>
  )
}

export default Register