"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";


export default function Hero(){

return(

<section className="
relative
overflow-hidden
bg-white
py-24
lg:py-32
">


<Container>


<div className="
grid
lg:grid-cols-2
gap-12
items-center
">


{/* LEFT CONTENT */}

<motion.div

initial={{
opacity:0,
x:-40
}}

animate={{
opacity:1,
x:0
}}

transition={{
duration:0.7
}}

>


<h1 className="
text-5xl
lg:text-6xl
font-bold
leading-tight
text-slate-900
">


Building Exceptional

<span className="
text-blue-600
block
">

Technology Teams

</span>


With Zenovo Global


</h1>



<p className="
mt-6
text-lg
text-gray-500
max-w-xl
">

We connect organizations with exceptional
technology professionals through innovative
talent solutions and workforce partnerships.

</p>



<div className="
flex
gap-4
mt-8
flex-wrap
">


<Button>

Hire Talent

</Button>


<Button variant="outline">

Explore Careers

</Button>


</div>


</motion.div>





{/* RIGHT SIDE */}

<motion.div

initial={{
opacity:0,
scale:0.9
}}

animate={{
opacity:1,
scale:1
}}

transition={{
duration:0.8
}}

className="
relative
h-[450px]
flex
items-center
justify-center
"


>


{/* Main Visual */}

<div className="
w-80
h-80
rounded-full
bg-blue-50
flex
items-center
justify-center
">


<div className="
text-center
">


<p className="
text-5xl
font-bold
text-blue-600
">

10K+

</p>


<p className="
text-gray-600
mt-2
">

Technology Professionals

</p>


</div>


</div>





{/* Floating Card 1 */}

<div className="
absolute
top-10
right-10
bg-white
shadow-xl
rounded-xl
p-5
border
border-gray-100
">


<p className="
text-3xl
font-bold
text-slate-900
">

98%

</p>


<p className="
text-sm
text-gray-500
">

Success Rate

</p>


</div>






{/* Floating Card 2 */}

<div className="
absolute
bottom-10
left-10
bg-white
shadow-xl
rounded-xl
p-5
border
border-gray-100
">


<p className="
text-3xl
font-bold
text-slate-900
">

500+

</p>


<p className="
text-sm
text-gray-500
">

Hiring Partners

</p>


</div>



</motion.div>


</div>


</Container>


</section>

)

}