### Exercicio 1
a)  o VARCHAR e para o tio string e o DATE é especificamente para datas.

b) o show Tables exibe a tabela

c) mostra informaçoes da tabela referente ao tipo usado com cada item...

### Exercicio 2

b) Nao pode existir item com o mesmo id.

c) Nao consegue adicionar o item pois esta faltando atributos para serem inseridos como o gender e o birth_date

d) Nao consegue adicionar o item pois esta faltando atributos para serem inseridos como o name

e) Nao consegue adicionar o item pois o birth_date foi tipado como string, entao nao pode receber um number

### Exercicio 3

a) select name from Actor where gender = "female"

b) select salary from Actor where name = "tony Ramos"

c) ela retornou uma lista vazia.. nao relatou nenhum erro

d) select name, salary, id from Actor where salary < 500000;

e) o erro ocasionou porque nao existe a coluna nome.. o certo seria "name"

## exercicio 4

a) 

b) select * from Actor where name not like "a%" and salary > 350000; 

c) select * from Actor where name like "%g%" or name like "%G%";

d) select * from Actor where (name like "%a%" or name like "%A%") or (name like "%g%" or name like "%G%") and salary between 350000 and 500000;

## exercicio 5

a)

b)

c)

d)

e)

## exercicio 6

a) select id, titulo, avaliacao from Filmes where id = (Digite aqui o ID do filme)

b) select * from Filmes where titulo = (Digite aqui o titulo do filme)

c) select id, titulo, sinopse from Filmes where avaliacao >= 7;

## exercicio 7

a)  select * from Filmes where titulo like "%vida%" or titulo like "%Vida%" ;

b)

c)

d)

e)
