"use client";

import {
  Code2,
  Users,
  BriefcaseBusiness,
  Layers,
  Search,
  Rocket
} from "lucide-react";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";


const solutions = [

{
icon:Code2,
title:"Technology Talent Solutions",
description:
"Connect with skilled technology professionals who help organizations build innovative digital teams."
},


{
icon:Users,
title:"Flexible Hiring Solutions",
description:
"Scale your teams efficiently with flexible workforce options designed around your business needs."
},


{
icon:BriefcaseBusiness,
title:"Executive Talent Search",
description:
"Identify experienced technology leaders and specialists for critical roles."
},


{
icon:Layers,
title:"Workforce Solutions",
description:
"Create sustainable workforce strategies that support long-term growth."
},


{
icon:Search,
title:"Recruitment Solutions",
description:
"Streamline your hiring process with experienced talent specialists and proven approaches."
},


{
icon:Rocket,
title:"Project Talent Teams",
description:
"Build dedicated technology teams for short-term and long-term initiatives."
}

];



export default function Solutions(){


return(

<section
id="solutions"
className="
py-24
bg-white
"
>


<Container>


{/* Heading */}

<div className="
max-w-3xl
mx-auto
text-center
">


<p className="
text-blue-600
font-semibold
uppercase
tracking-wide
">

Our Solutions

</p>


<h2 className="
mt-3
text-4xl
lg:text-5xl
font-bold
text-slate-900
">

Solutions Designed For
Modern Technology Teams

</h2>


<p className="
mt-5
text-lg
text-gray-500
">

From specialized talent discovery to complete
workforce solutions, Xenova Global helps
organizations achieve their technology goals.

</p>


</div>





{/* Cards */}

<div className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-8
mt-16
">


{
solutions.map((item,index)=>{


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
group
p-8
rounded-2xl
border
border-gray-100
bg-white
hover:shadow-xl
transition-all
duration-300
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
group-hover:bg-blue-600
transition
">


<Icon

size={28}

className="
text-blue-600
group-hover:text-white
transition
"

/>


</div>



<h3 className="
mt-6
text-xl
font-bold
text-slate-900
">

{item.title}

</h3>


<p className="
mt-3
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


</Container>


</section>

)

}