import {Website} from "@/types/Website";
import {redirect} from "next/navigation";

export async function getStaticPaths() {
    const data = await fetch("http://localhost:3000/assets/websites.json");
    const websites = await data.json();
    const paths = websites.map((website: Website) => ({params: {website: website.slug}}))
    return {paths, fallback: false};
}

export async function getStaticProps({params}) {
    const data = await fetch("http://localhost:3000/assets/websites.json");
    const websites: Website[] = await data.json();
    const website = websites.find((website: Website) => website.slug === params.slug);
    console.log({params})
    console.log({website})
    if (website === undefined) {
        return {
            redirect: {
                destination: "/404",
                permanent: false,
            }
        }
    }
    return (
        <div>
            <h1>{website.slug}</h1>
            <img src={website.thumbnail} alt={params.slug}/>
        </div>
    )

}

export default function website() {
    return <div>Website</div>;
}