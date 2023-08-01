import React from 'react';
import styles from "@/app/styles/common.module.css"
import Image from "next/image";

const Page = async ({params}) => {
    const id = params.id;

    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '09b023ea50mshaf89a36eda963e6p1244e0jsn694cdd4bdcae',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data[0].details;

    return (

        <div className={styles.container}>
            <h2 className={styles.movie_title}>   Netflix \ <span> {main_data.type} </span> </h2>
            <div className={styles.card_section}>
                <div>
                    <Image src={main_data.backgroundImage.url} alt={main_data.title} width={600} height={300} />
                </div>
                <div>
                    <h1>{main_data.title}</h1>
                    <p>{main_data.synopsis}</p>
                </div>
            </div>
        </div>

    );
};

export default Page;

// import React from 'react';
// import styles from "@/app/styles/common.module.css"
// import Image from "next/image";
//
// const Page = async ({params}) => {
//     const id = params.id;
//
//
//     const url = 'https://netflix54.p.rapidapi.com/title/details/?ids=$[id]&lang=en';
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '09b023ea50mshaf89a36eda963e6p1244e0jsn694cdd4bdcae',
//             'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
//         }
//     };
//     const res = await fetch(url, options);
//     const data = await res.json();
//     const main_data = data[0].details;
//
//     return (
//
//             <div className={styles.container}>
//                 <h2 className={styles.movie_title}>   Netflix \ <span> {main_data.type} </span> </h2>
//                 <div className={styles.card_section}>
//                     <div>
//                         <Image src={main_data.backgroundImage.url} alt={main_data.title} width={600} height={300} />
//                     </div>
//                     <div>
//                         <h1>{main_data.title}</h1>
//                         <p>{main_data.synopsis}</p>
//                     </div>
//                 </div>
//             </div>
//
//     );
// };
//
// export default Page;