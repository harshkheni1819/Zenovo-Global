"use client";

import { ArrowRight, Building2, UserRound } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";


export default function CTASection(){


return(

<section
className="
py-24
bg-white
"
>


<Container>


<div className="
relative
overflow-hidden
rounded-3xl
bg-blue-600
px-8
py-16
lg:px-16
"
>


{/* Background Effect */}

<div
className="
absolute
w-96
h-96
bg-blue-500
rounded-full
blur-3xl
opacity-40
top-0
right-0
"
/>



<div className="
relative
text-center
text-white
max-w-3xl
mx-auto
">


<h2 className="
text-4xl
lg:text-5xl
font-bold
">

Ready To Build The Future?

</h2>


<p className="
mt-5
text-blue-100
text-lg
">

Whether you are building a technology team
or looking for your next opportunity,
Zenovo Global helps you move forward.

</p>


</div>





<div className="
relative
grid
lg:grid-cols-2
gap-6
mt-12
">



{/* Employer */}

<motion.div

whileHover={{
y:-8
}}

className="
bg-white
rounded-2xl
p-8
text-slate-900
"

>


<div className="
w-14
h-14
rounded-xl
bg-blue-50
flex
items-center
justify-center
">


<Building2
className="
text-blue-600
"
size={28}
/>


</div>



<h3 className="
mt-6
text-2xl
font-bold
">

For Organizations

</h3>


<p className="
mt-3
text-gray-500
">

Build high-performing technology teams
with professionals aligned to your goals.

</p>



<button
className="
mt-6
flex
items-center
gap-2
font-semibold
text-blue-600
"
>

Hire Talent

<ArrowRight size={18}/>

</button>


</motion.div>






{/* Candidate */}

<motion.div

whileHover={{
y:-8
}}

className="
bg-white
rounded-2xl
p-8
text-slate-900
"

>


<div className="
w-14
h-14
rounded-xl
bg-blue-50
flex
items-center
justify-center
">


<UserRound
className="
text-blue-600
"
size={28}
/>


</div>



<h3 className="
mt-6
text-2xl
font-bold
">

For Professionals

</h3>


<p className="
mt-3
text-gray-500
">

Discover opportunities that match
your skills and career goals.

</p>



<button
className="
mt-6
flex
items-center
gap-2
font-semibold
text-blue-600
"
>

Explore Careers

<ArrowRight size={18}/>

</button>


</motion.div>



</div>


</div>


</Container>


</section>

)

}