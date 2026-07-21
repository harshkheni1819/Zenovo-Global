"use client";

import {
  Monitor,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Factory,
  Building2,
  GraduationCap,
  Zap
} from "lucide-react";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";


const industries = [

{
icon:Monitor,
title:"Technology",
description:
"Supporting software companies and digital organizations with specialized technology talent."
},

{
icon:HeartPulse,
title:"Healthcare",
description:
"Helping healthcare organizations build reliable technology teams."
},

{
icon:Landmark,
title:"Financial Services",
description:
"Connecting financial institutions with professionals who understand secure digital systems."
},

{
icon:ShoppingBag,
title:"Retail",
description:
"Supporting modern retail businesses with technology-driven solutions."
},

{
icon:Factory,
title:"Manufacturing",
description:
"Helping manufacturers adopt innovative technology solutions."
},

{
icon:Building2,
title:"Government",
description:
"Supporting public organizations with skilled technology professionals."
},

{
icon:GraduationCap,
title:"Education",
description:
"Helping educational institutions improve digital capabilities."
},

{
icon:Zap,
title:"Energy",
description:
"Supporting energy organizations with technology expertise."
}

];



export default function Industries(){


return(

<section
id="industries"
className="
py-24
bg-white
"
>


<Container>


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

Industries

</p>


<h2 className="
mt-3
text-4xl
lg:text-5xl
font-bold
text-slate-900
">

Industry Expertise
That Drives Results

</h2>


<p className="
mt-5
text-gray-500
text-lg
">

Zenovo Global partners with organizations
across multiple industries to deliver
technology talent solutions.

</p>


</div>




<div className="
grid
sm:grid-cols-2
lg:grid-cols-4
gap-6
mt-16
">


{
industries.map((industry,index)=>{


const Icon=industry.icon;


return(

<motion.div

key={industry.title}

initial={{
opacity:0,
y:25
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:index*0.08
}}

viewport={{
once:true
}}

className="
group
p-6
rounded-2xl
border
border-gray-100
bg-white
hover:border-blue-200
hover:shadow-xl
transition-all
duration-300
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
group-hover:bg-blue-600
transition
">


<Icon

size={24}

className="
text-blue-600
group-hover:text-white
transition
"

/>


</div>



<h3 className="
mt-5
font-bold
text-lg
text-slate-900
">

{industry.title}

</h3>


<p className="
mt-2
text-sm
text-gray-500
leading-relaxed
">

{industry.description}

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