interface Props{

title:string;
description:string;

}


export default function SectionHeading({
title,
description
}:Props){


return(

<div className="
text-center
max-w-3xl
mx-auto
mb-12
">


<h2
className="
text-4xl
font-bold
text-slate-900
"
>

{title}

</h2>


<p
className="
mt-4
text-lg
text-slate-500
"
>

{description}

</p>


</div>

)

}