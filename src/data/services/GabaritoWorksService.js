export const GabaritoWorksService = {
    getWorksData() {
        return [
            {
                id: "1",
                name: "Cozinha Moderna",
                description: "Cozinha moderna",
                image: "gabaritoworks-cozinha-id1.jpg",
            },
            {
                id: "2",
                name: "Cozinha Americana",
                description: "Cozinha americana",
                image: "gabaritoworks-cozinha-id2.jpg",
            },
            {
                id: "3",
                name: "Quarto",
                description: "Quarto",
                image: "gabaritoworks-quarto-id3.jpg",
            },
            {
                id: "4",
                name: "Quiosque",
                description: "Quiosque",
                image: "gabaritoworks-quiosque-id4.jpg",
            },
            {
                id: "5",
                name: "Banheiro",
                description: "Banheiro",
                image: "gabaritoworks-banheiro-id5.jpg",
            },
        ]
    },

    getProducts() {
        return Promise.resolve(this.getWorksData());
    },
};
