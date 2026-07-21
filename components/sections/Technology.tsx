"use client";

import {
  Code2,
  Server,
  Cloud,
  BrainCircuit,
  ShieldCheck
} from "lucide-react";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";


const technologies = [

{
icon:Code2,
title:"Frontend Development",
items:[
"React.js",
"Next.js",
"Angular",
"Vue.js",
"TypeScript",
"HTML & CSS"
]
},


{
icon:Server,
title:"Backend Engineering",
items:[
"Java",
"Python",
".NET",
"Node.js",
"Go",
"PHP"
]
},


{
icon:Cloud,
title:"Cloud & DevOps",
items:[
"AWS",
"Microsoft Azure",
"Google Cloud",
"Docker",
"Kubernetes",
"CI/CD"
]
},


{
icon:BrainCircuit,
title:"Data & AI",
items:[
"Machine Learning",
"Artificial Intelligence",
"Data Engineering",
"Analytics",
"Big Data"
]
},


{
icon:ShieldCheck,
title:"Cybersecurity",
items:[
"Security Engineering",
"Cloud Security",
"Application Security",
"Risk Management"
]
}

];



export default function Technology(){


return(

<section
id="technology"
className="
py-24
bg-gray-50
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

Technology Expertise

</p>


<h2 className="
mt-3
text-4xl
lg:text-5xl
font-bold
text-slate-900
">

Technology Skills That
Power Innovation

</h2>


<p className="
mt-5
text-gray-500
text-lg
">

Our technology network spans modern platforms,
frameworks, and engineering disciplines.

</p>


</div>




<div className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-8
mt-16
">


{
technologies.map((tech,index)=>{


const Icon=tech.icon;


return(

<motion.div

key={tech.title}

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
hover:shadow-xl
transition
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


<Icon

className="
text-blue-600
"

size={28}

/>


</div>



<h3 className="
mt-6
text-xl
font-bold
text-slate-900
">

{tech.title}

</h3>



<div className="
mt-5
flex
flex-wrap
gap-2
">


{
tech.items.map(item=>(

<span

key={item}

className="
px-3
py-1
rounded-full
bg-gray-100
text-sm
text-gray-600
"

>

{item}

</span>

))
}


</div>


</motion.div>


)


})

}


</div>


</Container>


</section>

)

}