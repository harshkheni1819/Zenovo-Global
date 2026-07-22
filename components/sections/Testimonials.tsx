"use client";

import { Quote, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";


const testimonials = [

{
name:"Michael Anderson",
role:"CTO, Technology Company",
text:
"Xenovo Global helped us connect with exceptional technology professionals and scale our engineering team efficiently."
},


{
name:"Sarah Williams",
role:"VP Engineering, Enterprise Organization",
text:
"Their understanding of technology requirements and commitment to quality made the entire process seamless."
},


{
name:"David Miller",
role:"Founder, Growing Startup",
text:
"Xenovo became a trusted partner in helping us build a strong technology foundation."
}

];



const stories=[

{
title:"Scaling Engineering Teams",
category:"Technology Platform",
result:"40+ technology professionals connected within 90 days"
},

{
title:"Digital Transformation Support",
category:"Enterprise Organization",
result:"Built specialized teams for critical technology initiatives"
},

{
title:"Rapid Growth Expansion",
category:"Startup",
result:"Accelerated hiring process during business expansion"
}

];



export default function Testimonials(){


return(

<section
className="
py-24
bg-gray-50
"
>


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
tracking-wide
">

Success Stories

</p>


<h2 className="
mt-3
text-4xl
lg:text-5xl
font-bold
text-slate-900
">

Trusted By Organizations
Building The Future

</h2>


<p className="
mt-5
text-gray-500
text-lg
">

See how organizations use Xenovo Global
to build stronger technology teams.

</p>


</div>





{/* Testimonials */}


<div className="
grid
lg:grid-cols-3
gap-8
mt-16
">


{
testimonials.map((item,index)=>(


<motion.div

key={item.name}

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
"


>


<Quote
className="
text-blue-600
"
/>


<p className="
mt-5
text-gray-600
leading-relaxed
">

"{item.text}"

</p>


<h3 className="
mt-6
font-bold
text-slate-900
">

{item.name}

</h3>


<p className="
text-sm
text-gray-500
">

{item.role}

</p>


</motion.div>


))

}


</div>





{/* Case Studies */}


<div className="
mt-20
">


<h3 className="
text-3xl
font-bold
text-slate-900
text-center
">

Featured Success Stories

</h3>



<div className="
grid
md:grid-cols-3
gap-8
mt-10
">


{
stories.map((story)=>(


<div

key={story.title}

className="
bg-white
rounded-2xl
p-7
border
border-gray-100
hover:shadow-xl
transition
"

>


<p className="
text-blue-600
text-sm
font-semibold
">

{story.category}

</p>


<h4 className="
mt-3
text-xl
font-bold
text-slate-900
">

{story.title}

</h4>


<p className="
mt-4
text-gray-500
">

{story.result}

</p>



<button
className="
mt-6
flex
items-center
gap-2
text-blue-600
font-semibold
"
>

Read Case Study

<ArrowRight size={18}/>

</button>


</div>


))

}


</div>


</div>


</Container>


</section>

)

}