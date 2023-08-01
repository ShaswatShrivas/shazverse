import heroStyles from "@/app/styles/herosection.module.css"
import styles from "@/app/styles/common.module.css"
import Image from "next/image";
import Link from "next/link";
import { Mulish } from 'next/font/google';

const mulish = Mulish({
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap'
})


const Herosection = ({title, imageUrl}) => {
    return (
        <main className={heroStyles.main_section}>
            <div className={styles.container}>
                <div className={styles.grid_two_section}>
                    <div className={heroStyles.hero_content}>
                        <h1>{title}</h1>
                        <p> Embark on a cinematic adventure like no other! Shazverse is a captivating movie website that acts as a gateway to a vast universe of films, offering a one-of-a-kind experience for cinephiles and casual viewers alike.
                            Discover hidden gems, critically acclaimed masterpieces, and upcoming blockbusters with ease. From thought-provoking dramas to pulse-pounding thrillers, Shazverse curates an eclectic collection that transcends genres and transports you to the heart of storytelling. Get ready to immerse yourself in the magic of cinema,
                            as Shazverse invites you to set sail on an unforgettable voyage through the world of movies.
                        </p>
                        <Link href="/movie">
                            <button className={mulish.className}>
                                Explore Amazing Movies
                            </button>
                        </Link>
                    </div>

                    <div className={heroStyles.hero_image}>
                        <Image src={imageUrl} alt="watching netflix" width={500} height={500}/>
                    </div>
                </div>
            </div>
            <div className={heroStyles['custom-shape-divider-bottom-1681647578']}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        className={heroStyles["shape-fill"]}></path>
                </svg>
            </div>
        </main>
    );
};

export default Herosection;