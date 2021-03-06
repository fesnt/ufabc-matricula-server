ENDPOINT: http://desolate-lake-30493.herokuapp.com/stats/info_all_cursos/:order

exemplo: http://desolate-lake-30493.herokuapp.com/stats/info_all_cursos/gap_noturno_abs

Ele ordena decrescentemente do maior gap absoluto (diferenca entre requisicoes e vagas)
no noturno todos os cursos.

returna array de objetos dessa forma:
```javascript
{
	"numeros": {
		"total_vagas_geral": 6983,
		"total_requisicoes_geral": 10141,
		"gap_geral_abs": 3158,
		"gap_geral_rel": 1.452241157095804,
		"total_vagas_matutino": 3901,
		"total_requisicoes_matutino": 4954,
		"gap_matutino_abs": 1053,
		"gap_matutino_rel": 1.2699307869776981,
		"total_vagas_noturno": 3082,
		"total_requisicoes_noturno": 5187,
		"gap_noturno_abs": 2105,
		"gap_noturno_rel": 1.6829980532122
	},
	"curso": "Engenharia de Gestão"
}
```
order -> total_vagas_geral, total_requisicoes_geral, gap_geral_abs ... gap_noturno_rel

ENDPOINT: http://desolate-lake-30493.herokuapp.com/stats/demanda/:turno/:type/:curso_id

exemplo: http://desolate-lake-30493.herokuapp.com/stats/demanda/matutino/rel_ratio/16
Pega a lista de disciplinas do matutino ordenadas pelo ratio relativo (divisao das requisicoes pelas vagas) e filtra pelo curso 16 (Bacharelado em Ciencia da Computacao).

turno -> matutino, noturno, 

type -> rel_ratio, abs_ratio

curso_id -> 16, 23, 20, 0 (lista completa em utils.js)

P.S: lista geral chame com curso_id = 0

array de objetos
```javascript
{
	"geral": {
		"vagas": 90,
		"requisicoes": 237,
		"abs_ratio": 147,
		"rel_ratio": 2.6333333333333333
	},
	"nome": "Vida Artificial na Computação",
	"curso": [
		{
		"obrigatoriedade": "limitada",
		"curso_id": 24
		},
		{
		"obrigatoriedade": "limitada",
		"curso_id": 16
		}
	],
	"matutino": {
		"vagas": 45,
		"requisicoes": 95,
		"abs_ratio": 50,
		"rel_ratio": 2.111111111111111
	},
	"noturno": {
		"vagas": 45,
		"requisicoes": 142,
		"abs_ratio": 97,
		"rel_ratio": 3.1555555555555554
	}
}
```

ENDPOINT: http://desolate-lake-30493.herokuapp.com/stats/previsao/:curso_id

exemplo: http://desolate-lake-30493.herokuapp.com/stats/previsao/0

Retorna as previsoes de corte de disciplinas que pelo menos 25% dos alunos usaram a extensao de determinado curso (parametro curso_id da URL), no caso do exemplo 0 serve para nao fazer distincao de curso.

array de objetos
```javascript
{
	"nome": "Análise de Sistemas e Modelagem Ambiental A-Noturno (Santo André)",
	"extensao": 21,
	"corte": {
		"cr": 2.112,
		"cp": 0.72,
		"ik": 0.6664399999999999,
		"reserva": true,
		"turno": "Matutino",
		"curso": "Engenharia Ambiental e Urbana",
		"id": 3109
	},
	"posicao": 11,
	"vagas": 30,
	"requisicoes": 56,
	"disciplina_id": 811,
	"curso": [
		{
			"obrigatoriedade": "limitada",
			"curso_id": 20
		},
		{
			"obrigatoriedade": "obrigatoria",
			"curso_id": 6
		}
	],
	"codigo": "ESTU001-13",
	"criterio": "cp"
}
```