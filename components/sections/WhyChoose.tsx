"use client";

import {
  Globe2,
  Target,
  Clock,
  Award,
  Users,
  Handshake
} from "lucide-react";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";


const reasons = [

{
icon:Globe2,
title:"Global Talent Network",
description:
"Access a diverse network of technology professionals across global markets."
},

{
icon:Target,
title:"Technology-Focused Expertise",
description:
"Our understanding of modern technology helps organizations find the right skills."
},

{
icon:Clock,
title:"Faster Hiring Process",
description:
"Streamlined approaches help companies connect with qualified professionals efficiently."
},

{
icon:Award,
title:"Quality-First Approach",
description:
"We focus on delivering professionals aligned with business goals and requirements."
},

{
icon:Users,
title:"Industry Knowledge",
description:
"Deep understanding of technology and business domains enables better outcomes."
},

{
icon:Handshake,
title:"Long-Term Partnership",
description:
"We build relationships that support continuous growth and success."
}

];


export default function WhyChoose(){


return(

<section
className="
py-24
bg-gray-50
"
>


<Container>


<div className="
grid
lg:grid-cols-2
gap-16
items-center
">


{/* LEFT */}

<div>


<p className="
text-blue-600
font-semibold
uppercase
tracking-wide
">

Why Xenova Global

</p>


<h2 className="
mt-3
text-4xl
lg:text-5xl
font-bold
text-slate-900
">

A Trusted Partner
For Technology Growth

</h2>


<p className="
mt-5
text-lg
text-gray-500
leading-relaxed
">

We help organizations build high-performing
technology teams through expertise,
innovation, and a commitment to quality.

</p>



<div className="
mt-8
p-6
bg-white
rounded-2xl
border
border-gray-100
">


<p className="
text-4xl
font-bold
text-blue-600
">

10+

</p>


<p className="
mt-2
text-gray-600
">

Years of combined technology
and talent experience

</p>


</div>


</div>





{/* RIGHT */}

<div className="
grid
sm:grid-cols-2
gap-6
">


{
reasons.map((item,index)=>{


const Icon=item.icon;


return(

<motion.div

key={item.title}

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
p-6
rounded-2xl
border
border-gray-100
hover:shadow-lg
transition
"


>


<div className="
w-12
h-12
rounded-xl
bg-blue-50
flex
items-center
justify-center
">


<Icon

size={24}

className="
text-blue-600
"

/>


</div>



<h3 className="
mt-5
font-bold
text-slate-900
">

{item.title}

</h3>


<p className="
mt-2
text-sm
text-gray-500
leading-relaxed
">

{item.description}

</p>


</motion.div>

)


})

}


</div>


</div>


</Container>


</section>

)

}