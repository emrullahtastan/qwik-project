import {component$} from "@builder.io/qwik";
import type {DocumentHead} from "@builder.io/qwik-city";
import {Link} from "@builder.io/qwik-city";


export default component$(() => {

    const list = [{
        image: "https://cdn.trtmarket.com/tay-bir-hicret-yolculugu-kitabi-hikaye-kitaplari-tay-6544-25-O.jpg",
        key: "tay",
        title: "Tay",
        description: "Tay description"
    }, {
        image: "https://cdn.trtmarket.com/aslanin-icat-gunlugu-etkinlik-kitaplari-erdem-yayinlari-aslan-5524-22-O.jpg",
        key: "aslan-hurkus",
        title: "Aslan Hürkuş",
        description: "Aslan Hürkuş description"
    }]

    return (
        <>
            <div class="container">
                <ul>
                {list.map((item,key) => (
                    <li key={key}>
                        <Link prefetch href={"/products/"+item['key']}>{item['title']}</Link>
                    </li>
                ))}
                </ul>
            </div>
        </>
    );
});

export const head: DocumentHead = {
    title: "Welcome to Qwik",
    meta: [
        {
            name: "description",
            content: "Qwik site description",
        },
    ],
};
