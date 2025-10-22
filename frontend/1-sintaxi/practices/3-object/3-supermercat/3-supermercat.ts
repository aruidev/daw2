type article = {
    id: number;
    name: string;
    price: number;
    stock: number;
    pes?: number;
    dte?: number;
};

const articles: article[] = [
    { id: 1, name: "Poma", price: 0.5, stock: 100, dte: 0.1 },
    { id: 2, name: "Plàtan", price: 0.3, stock: 150, pes: 0.25 },
    { id: 3, name: "Taronja", price: 0.4, stock: 200, pes: 0.3 },
];

function displayArticles(articles: article[]) {
    console.table(articles);
}

displayArticles(articles);
