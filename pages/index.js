import Head from 'next/head'
import Layout from './Layout'


export default function Home() {

    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <title> SHADOW DESCENDANTS</title>
                <meta content="If they stand behind you, protect them · If they stand beside you, respect them · If they stand against you, defeat them." name="description" />
                <meta content="SHADOW DESCENDANTS" property="og:title" />
                <meta content="If they stand behind you, protect them · If they stand beside you, respect them · If they stand against you, defeat them." property="og:description" />
                <meta content="https://uploads-ssl.webflow.com/61eb0a43c6673a087bcfb2c2/61eb17ee16ea58c9d351196e_Banner2.png" property="og:image" />
                <meta content="SHADOW DESCENDANTS" property="twitter:title" />
                <meta content="If they stand behind you, protect them · If they stand beside you, respect them · If they stand against you, defeat them." property="twitter:description" />
                <meta content="https://uploads-ssl.webflow.com/61eb0a43c6673a087bcfb2c2/61eb17ee16ea58c9d351196e_Banner2.png" property="twitter:image" />
                <meta property="og:type" content="website" />
                <meta content="summary_large_image" name="twitter:card" />
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                <meta content="Webflow" name="generator" />

                <link href="https://uploads-ssl.webflow.com/61eb0a43c6673a087bcfb2c2/61eb2025d48ce939d4edd234_61bb0dca55a4dbce9d02b34e_samurai-2.png" rel="shortcut icon" type="image/x-icon" />
                <link href="https://uploads-ssl.webflow.com/61eb0a43c6673a087bcfb2c2/61eb2025d48ce939d4edd234_61bb0dca55a4dbce9d02b34e_samurai-2.png" rel="apple-touch-icon" />

                {/* Global site tag (gtag.js) - Google Analytics */}
                <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n        .hero-jp {\n            pointer-events: none;\n        }\n    " }} />
                <style dangerouslySetInnerHTML={{ __html: "\n        ::-webkit-scrollbar {\n            width: 4px;\n        }\n\n        /* Track */\n        ::-webkit-scrollbar-track {}\n\n        /* Handle */\n        ::-webkit-scrollbar-thumb {\n\n\n            background: rgba(184, 7, 7, 1);\n\n        }\n    " }} />
            </Head>
            <Layout></Layout>
        </div>
    )
}
