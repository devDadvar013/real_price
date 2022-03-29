//animation list: card, fade, box3D, glide, flip, slice, pixel

$(document).ready(function () {
    $('.slideWiz').slideWiz({
        auto: true,
        speed: 5000,
        type: 'flip',
        row: 9,
        file: [
            {
                    src: {
                        main: "img/5e96f36fa35f8.jpg",
                        cover: "img/5e96f36fa35f8.jpg"
                    },
                    title: 'Multimax',
                    desc: 'We help the companies to build products',
                    button: {
                        text: 'Get started',
                        class: 'btn button btn-hover',
                    }
            },

            {
                src: {
                    main: "img/16460939051519.jpg",
                    cover: "img/16460939051519.jpg"
                },
                title: 'Multimax',
                desc: 'We help the companies to build products',
                button: {
                    text: 'Get started',
                    class: 'btn button btn-hover',
                }
            },

            {
                src: {
                    main: "img/m1n2qel8_bitcoin-650_625x300_15_November_21.webp",
                    cover: "img/m1n2qel8_bitcoin-650_625x300_15_November_21.webp"
                },
                title: 'Multimax',
                desc: 'We help the companies to build products',
                button: {
                    text: 'Get started',
                    class: 'btn button btn-hover',
                }
            },




        ]

    });
});
