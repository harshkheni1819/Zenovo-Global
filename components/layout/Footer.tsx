import Container from "@/components/ui/Container";


const footerLinks = {


Solutions:[
"Technology Talent",
"Flexible Hiring",
"Executive Search",
"Workforce Solutions"
],


Company:[
"About Us",
"Leadership",
"Careers",
"Contact"
],


Resources:[
"Blog",
"Insights",
"Case Studies",
"FAQs"
],


Professionals:[
"Find Jobs",
"Create Profile",
"Career Resources"
]

};



export default function Footer(){


return(

<footer
className="
bg-slate-900
text-white
mt-20
"
>


<Container>


<div className="
py-16
grid
md:grid-cols-2
lg:grid-cols-5
gap-10
">



{/* Brand */}

<div className="
lg:col-span-2
">


<h2 className="
text-3xl
font-bold
">

Zenovo
<span className="text-blue-400">
Global
</span>

</h2>



<p className="
mt-5
text-gray-400
max-w-sm
leading-relaxed
">

Connecting organizations with
exceptional technology professionals
through modern talent solutions.

</p>



<div className="
mt-6
flex
gap-4
">


<div className="
w-10
h-10
rounded-full
bg-slate-800
flex
items-center
justify-center
">

in

</div>


<div className="
w-10
h-10
rounded-full
bg-slate-800
flex
items-center
justify-center
">

X

</div>


<div className="
w-10
h-10
rounded-full
bg-slate-800
flex
items-center
justify-center
">

f

</div>


</div>


</div>





{/* Links */}


{
Object.entries(footerLinks).map(([title,links])=>(


<div key={title}>


<h3 className="
font-semibold
text-lg
">

{title}

</h3>



<ul className="
mt-5
space-y-3
">


{
links.map(link=>(

<li
key={link}
className="
text-gray-400
hover:text-white
cursor-pointer
transition
"
>

{link}

</li>

))
}


</ul>


</div>


))

}



</div>





{/* Bottom */}

<div className="
border-t
border-slate-700
py-6
flex
flex-col
md:flex-row
justify-between
gap-4
text-sm
text-gray-400
">


<p>

© 2026 Zenovo Global. All rights reserved.

</p>


<div className="
flex
gap-5
">

<span>
Privacy Policy
</span>

<span>
Terms
</span>

<span>
Cookie Policy
</span>


</div>


</div>


</Container>


</footer>

)

}