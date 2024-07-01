// const loadPhn=async()=>{
//     const res=await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
//     const data=await res.json();
//     const phones=data.data;
//     // console.log(phones);
//     disPhn(phones);
// }
const searching=async(searchKey)=>{
    const res=await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchKey}`);
    const data=await res.json();
    const phones=data.data;
    // console.log(phones);
    disPhn(phones);
}

const disPhn=phones=>{
    const phnCon=document.getElementById('container');
    phnCon.textContent='';
    const show=document.getElementById('showAll');
    if(phones.length>12){
show.classList.remove('hidden');
    }
    else{
        show.classList.add('hidden');  
    }
    phones=phones.slice(0,12);
    phones.forEach(phone => {
        // console.log(phone);
        const phnCard=document.createElement('div');
        phnCard.classList=`card bg-base-100 w-96 shadow-xl`;
        phnCard.innerHTML=`
        <figure class="px-10 pt-10">
              <img
                src="${phone.image}"
                alt="Shoes"
                class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">${phone.phone_name}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions">
                <button onclick="showDetail('${phone.slug}')" class="btn btn-primary">Show Details</button>
              </div>
            </div>
        `;
        phnCon.appendChild(phnCard);
    });
}
// loadPhn();

const searchFunction=()=>{
const searchValue=document.getElementById('search');
const searchKey=searchValue.value;
// console.log(searchKey);
searching(searchKey);
}

const showDetail= async(id)=>{
const res=await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
const data=await res.json();
console.log(data);
const phone=data.data;
// const phnName=document.getElementById('phoneName');
// phnName.innerText=phone.name;

const detailContainer=document.getElementById('my_modal_3');
detailContainer.classList=`bg-red-100 text-center`;
detailContainer.innerHTML=`
<form method="dialog">
<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
</form>
<img src="${phone.image}" alt="">
    <h1>Name:${phone.name}</h1>
    <p>Brand:${phone.brand}</p>
    <p>Memory:${phone.mainFeatures.memory}</p>
    <p>Memory:${phone.mainFeatures.sensors.storage}</p>
`
my_modal_3.showModal(phone);
}