"use client";

import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";


const leaders = [

{
name:"Alex Morgan",
role:"Founder & CEO",
image:"/team/person1.png",
description:
"Building technology partnerships and driving the vision of Xenova Global."
},

{
name:"Emily Carter",
role:"Chief Operations Officer",
image:"/team/person1.png",
description:
"Leading operational excellence and creating scalable solutions."
},

{
name:"Daniel Wilson",
role:"Technology Director",
image:"/team/person1.png",
description:
"Driving technology strategy and innovation across organizations."
}

];



export default function Leadership(){


return(

<section
className="
py-24
bg-gray-50
"
>


<Container>


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

Leadership Team

</p>


<h2 className="
mt-3
text-4xl
lg:text-5xl
font-bold
text-slate-900
">

Meet The People
Behind Xenova Global

</h2>


<p className="
mt-5
text-gray-500
text-lg
">

Experienced professionals dedicated to
building meaningful technology partnerships.

</p>


</div>





<div className="
grid
md:grid-cols-3
gap-8
mt-16
">


{
leaders.map((leader,index)=>(


<motion.div

key={leader.name}

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
rounded-3xl
overflow-hidden
border
border-gray-100
hover:shadow-xl
transition
"

>


{/* Image Placeholder */}

<div className="
h-72
bg-gray-200
flex
items-center
justify-center
text-gray-400
">

Photo

</div>




<div className="
p-7
">


<h3 className="
text-xl
font-bold
text-slate-900
">

{leader.name}

</h3>


<p className="
mt-1
text-blue-600
font-medium
">

{leader.role}

</p>



<p className="
mt-4
text-gray-500
text-sm
leading-relaxed
">

{leader.description}

</p>



<button
className="
mt-5
flex
items-center
gap-2
text-blue-600
font-semibold
"
>

<FaLinkedin size={18} />

LinkedIn

</button>


</div>


</motion.div>


))

}


</div>


</Container>


</section>

)

}