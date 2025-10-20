## Projecte: Articles

---

## Pt02: Connexions PDO

### Descripció
Aplicació PHP que gestiona articles utilitzant el patró MVC i la connexió a una base de dades MySQL amb PDO i Prepared Statements.

### Estructura de carpetes
- `index.php`: Punt d'entrada de l'aplicació.
- `app/controller/`: Controladors que gestionen la lògica de les peticions (`ArticleController.php`).
- `app/model/connection.php`: Configuració i creació de la connexió PDO a la base de dades.
- `app/model/dao/`: Accés a dades (DAO) per interactuar amb la base de dades (`ArticleDAO.php`).
- `app/model/entities/`: Definició de les entitats (classe `Article.php`).
- `app/model/services/`: Serveis que encapsulen la lògica de negoci (`ArticleService.php`).
- `app/view/`: Vistes que mostren els formularis i llistats d'articles.
- `sql_seed/`: Fitxer SQL amb la seed per crear la base de dades.

### Connexió a la base de dades
La connexió es fa mitjançant PDO a `app/model/connection.php`, on es defineixen els paràmetres de connexió (host, usuari, contrasenya, nom de la base de dades). Aquesta connexió s'utilitza a les DAO per fer consultes i operacions CRUD. 

> Per simplificar, utilitzem un usuari root sense contrasenya assignada.

### Flux de l'aplicació
1. L'usuari accedeix a `index.php`, que redirigeix a `app/view/list.php` (vista on es llistaràn els articles).
2. El controlador (`ArticleController.php`) rep la petició i utilitza els serveis i DAO per obtenir o modificar dades.
3. Les DAO utilitzen la connexió PDO per accedir a la base de dades.
4. El controlador passa les dades a la vista (`app/view/`), que mostra el resultat (llistat, formulari d'inserció/actualització, etc.).

### Resum
El projecte separa la lògica en MVC i utilitza PDO per a la connexió segura a la base de dades.

---

## Pt03: Paginació

