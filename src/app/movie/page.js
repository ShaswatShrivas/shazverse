import React from 'react';
import MovieCard from "@/app/components/MovieCard";
import styles from "@/app/styles/common.module.css"

const Movie = async () => {

    await new Promise(resolve => setTimeout(resolve, 2000));


    const url = process.env.RAPID_KEY;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '09b023ea50mshaf89a36eda963e6p1244e0jsn694cdd4bdcae',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data.titles;
    console.log(main_data.jawSummary)

    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Series & Movie</h1>
                    <div className={styles.card_section}>
                        {
                            main_data.map((curElem) => {
                                return <MovieCard key={curElem.id} {...curElem} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Movie;
// import React from 'react';
// import MovieCard from "@/app/components/MovieCard";
// import styles from "@/app/styles/common.module.css"
//
// const Movie = async () => {
//
//     await new Promise(resolve => setTimeout(resolve, 2000));
//
//
//     const url = process.env.RAPID_KEY;
//
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '09b023ea50mshaf89a36eda963e6p1244e0jsn694cdd4bdcae',
//             'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
//         }
//     };
//     const res = await fetch(url, options);
//     const data = await res.json();
//     data.titles = undefined;
//     const main_data = data.titles;
//     console.log(main_data.jawSummary)
//
//     return (
//         <>
//             <section className={styles.movieSection}>
//                 <div className={styles.container}>
//                     <h1>Series & Movie</h1>
//                     <div className={styles.card_section}>
//                         {
//                             main_data.map((curElem) => {
//                                 return <MovieCard key={curElem.id} {...curElem} />
//                             })
//                         }
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };
//
// export default Movie;