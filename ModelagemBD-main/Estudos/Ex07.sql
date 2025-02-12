exercicio 01
select unidade as "Fatec", count(*) as "Quantidade"
from tbcurso
group by unidade
order by unidade asc;

exercicio 02
select unidade as "Fatec", count(*) as "Quantidade"
from tbcurso
group by unidade
order by "Quantidade" desc

exercicio 03
select unidade as "Fatec", count(*) as "Quantidade"
from tbcurso
group by unidade
order by "Quantidade" desc

exercicio 04
select unidade as "Fatec", count(*) as "Quantidade"
from tbcurso
group by unidade
order by "Quantidade" desc limit 1

exercicio 05
select unidade as "Fatec", count(*) as "Quantidade"
from tbcurso
group by unidade
having count(*) = 3
order by unidade asc;

exercicio 6

select unidade as "fatec", count(curso) as Quantidade, turno
from tbcurso
group by fatec, turno
order by fatec asc;

exercicio 7

select unidade as "fatec", count(curso) as Quantidade, turno
from tbcurso
group by fatec, turno
having count (*) = 5 
order by fatec asc;

exercicio 8
select unidade as "fatec", count(curso) as Quantidade, turno
from tbcurso
where municipio = 'São José dos Campos'
group by fatec, turno
order by fatec asc;

exercicio 9
select unidade as "fatec", turno, sum (vaga)
from tbcurso
where municipio = 'São José dos Campos'
group by fatec, turno
order by fatec asc;

exercicio 10
select turno, sum (vaga)
from tbcurso
group by turno
order by turno asc
