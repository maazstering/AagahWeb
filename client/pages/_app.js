import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from '../components/Navigation'
import Head from "next/head"


export default function MyApp ({
    Component, pageProps}){
        return(
            <>
            <Head>
                <link rel="stylesheet" href="/css/style.css"/>
            </Head>
            <Navigation />
            <Component {...pageProps}/> 
            </>
        ) 
    }