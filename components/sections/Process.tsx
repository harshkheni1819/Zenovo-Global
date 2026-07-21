"use client";

import {
  ClipboardList,
  Search,
  Code2,
  Users,
  CheckCircle
} from "lucide-react";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";


const steps = [

{
number:"01",
icon:ClipboardList,
title:"Understand Requirements",
description:
"We understand your business goals, technology needs, and team requirements."
},

{
number:"02",
icon:Search,
title:"Identify Qualified Professionals",
description:
"Our team searches and evaluates professionals aligned with your requirements."
},

{
number:"03",
icon:Code2,
title:"Technical Evaluation",
description:
"Candidates are assessed based on skills, experience, and technical expertise."
},

{
number:"04",
icon:Users,
title:"Interview & Selection",
description:
"We support the process to connect organizations with the right professionals."
},

{
number:"05",
icon:CheckCircle,
title:"Successful Partnership",
description:
"Build long-term technology teams that contribute to business growth."
}

];


export default function Process(){


return(

<section
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

Our Process

</p>


<h2 className="
mt-3
text-4xl
lg:text-5xl
font-bold
text-slate-900
">

A Simple Approach
To Building Great Teams

</h2>


<p className="
mt-5
text-gray-500
text-lg
">

Our structured process helps organizations
connect with technology professionals
efficiently and confidently.

</p>


</div>




<div className="
mt-16
max-w-4xl
mx-auto
"
>


{
steps.map((step,index)=>{


const Icon=step.icon;


return(

<motion.div

key={step.number}

initial={{
opacity:0,
x:index%2===0?-40:40
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

transition={{
duration:0.5
}}

className="
relative
flex
gap-6
mb-10
"


>


{/* Number */}

<div className="
flex
flex-col
items-center
">


<div className="
w-14
h-14
rounded-full
bg-blue-600
text-white
flex
items-center
justify-center
font-bold
"
>

{step.number}

</div>


{
index !== steps.length-1 &&

<div className="
w-px
h-full
bg-gray-200
mt-3
"
/>

}


</div>





{/* Content */}

<div className="
flex-1
bg-gray-50
border
border-gray-100
rounded-2xl
p-6
hover:shadow-lg
transition
"
>


<div className="
flex
items-center
gap-4
">


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
text-xl
font-bold
text-slate-900
">

{step.title}

</h3>


</div>



<p className="
mt-4
text-gray-500
">

{step.description}

</p>


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