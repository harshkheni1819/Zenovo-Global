"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";


const stats = [
    {
        number:"10,000+",
        title:"Technology Professionals",
        description:"Connected with organizations"
    },
    {
        number:"500+",
        title:"Hiring Partners",
        description:"Across multiple industries"
    },
    {
        number:"98%",
        title:"Success Rate",
        description:"Client satisfaction"
    },
    {
        number:"50+",
        title:"Technology Skills",
        description:"Across modern platforms"
    }
];


export default function TrustMetrics(){


return (

<section className="
py-20
bg-gray-50
">


<Container>


{/* Heading */}

<div className="
text-center
max-w-3xl
mx-auto
">


<p className="
text-blue-600
font-semibold
uppercase
tracking-wider
">

Trusted Network

</p>


<h2 className="
mt-3
text-4xl
font-bold
text-slate-900
">

Empowering organizations
with exceptional technology talent

</h2>


<p className="
mt-4
text-gray-500
text-lg
">

Xenovo Global helps companies build
high-performing teams through modern
talent solutions.

</p>


</div>




{/* Placeholder Logos */}

<div className="
grid
grid-cols-2
md:grid-cols-4
gap-6
mt-12
">


{
[
"Technology",
"Healthcare",
"Finance",
"Enterprise"
].map((item)=>(

<div
key={item}
className="
h-20
bg-white
rounded-xl
border
border-gray-100
flex
items-center
justify-center
text-gray-400
font-medium
"
>

{item}

</div>

))
}


</div>





{/* Statistics */}


<div className="
grid
sm:grid-cols-2
lg:grid-cols-4
gap-6
mt-16
">


{
stats.map((stat,index)=>(


<motion.div

key={stat.title}

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:index*0.1
}}

viewport={{
once:true
}}

className="
bg-white
rounded-2xl
p-8
border
border-gray-100
shadow-sm
text-center
"


>


<h3 className="
text-4xl
font-bold
text-blue-600
">

{stat.number}

</h3>


<p className="
mt-3
font-semibold
text-slate-900
">

{stat.title}

</p>


<p className="
mt-2
text-sm
text-gray-500
">

{stat.description}

</p>


</motion.div>


))
}


</div>


</Container>


</section>

)

}