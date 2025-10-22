/*
2 - Clients
Pensa quins atributs es poden necessitar per guardar les dades dels clients d'una botiga on-line.

Crea 3 objectes amb les dades de 3 clients i guarda'ls en un array.

Fes una funció que mostri aquestes dades en una taula amb encapçalaments.
*/

type Client = {
    id: number;
    name: string;
    email: string;
    age: number;
};

const clients: Client[] = [
    { id: 1, name: "John Doe", email: "john@example.com", age: 30 },
    { id: 2, name: "Jane Smith", email: "jane@example.com", age: 25 },
    { id: 3, name: "Alice Johnson", email: "alice@example.com", age: 28 },
];

function displayClients(clients: Client[]) {
    console.table(clients);
}
displayClients(clients);