'use strict'

var link = '';

if (process.argv[2] == null) {
	// defaults to this URL
	link =  'http://prograd.ufabc.edu.br/doc/turmas_ofertadas_2016.3.pdf';
} else {
	link = process.argv[2];
};


Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
};

let fs = require('fs'),
        PDFParser = require("pdf2json"),
        request = require("request"),
        http = require('http'),
        jsonfile = require('jsonfile');

var response = [];

// this function gets the objects and push it to the response array
// that will be outputed to a json
var work = function (obj, titles) {
    if(!(obj.pratica === titles.pratica) && obj.disciplina != '') {
        // trabalha nas disciplinas
        var tmp = obj.disciplina;
        var splitted = tmp.split("-");

        var flag_found = null;

        splitted.map(function(item, i){
        	if(item.indexOf('urno') != -1) {
        		obj.turno = item.split(' ')[0].toLowerCase();
				var regEx = new RegExp(obj.turno, "ig");
        		obj.campus = item
        			.replace(regEx, "")
        			.replace("(", "")
        			.replace(")", "")
        			.trim();
        	}
        });


        // separa a turma da disciplina
        var tmp = splitted[0].split(" ");
        obj.turma = tmp[tmp.length -1];
        tmp.pop();
        obj.disciplina = tmp.join(' ');

        // horrible fix 
        if(obj.teoria != null) {
        	if (obj.teoria == "") obj.teoria = null;
        }

        if(obj.teoria == '0') obj.teoria = null
        if(obj.pratica == '0') obj.pratica = null
        
        response.push(obj);
        console.log(obj);
	}
    obj = {
            disciplina : '',
            teoria : null,
            pratica : null,
           	turno: '',
           	campus: '',
           	turma: ''
    };
    return obj;
}

function parsePDF() {

let pdfParser = new PDFParser();

pdfParser.on("pdfParser_dataReady", function(pdfData) {

    var pages = pdfData.formImage.Pages;

	// page that starts (usually 2)
	var FIRST_PAGE = 0;

	// IMPORTANT
	// using this it gets the x position of each column by its title

	// codigo - disciplina (disciplina)
	// horario_pratica - teoria (teoria)
	// teoria - pratica (pratica)
	var titles = {
		codigo: 'CÓD. TURMA',
    disciplina : 'TURMA',
    before_teoria: 'docente teoria',
    after_teoria: 'docente prática',
    before_pratica : 'docente prática',
    after_pratica: 'TOTAL DE '
	}

	var positions = {
    disciplina: -1,
    codigo: -1,
    before_teoria: -1, //64,
    after_teoria: -1, //75,

    before_pratica: -1, //75,
    after_pratica: -1, //85,
	}

	// tries to find the title positions in x
	// this implies that the PDF does not changes its titles until de PDF end
	// this is true (??)
  pages[FIRST_PAGE].Texts.forEach(t => {
    let title = decodeURIComponent(t.R[0].T)

    for(var key in titles) {
      if(titles[key] == title) positions[key] = t.x
    }
  })

	// make sure that found every column of the table
	for (var key in positions) {
	        if(positions[key] == -1) {
	        		console.log(positions);
	                throw 'Error: title (' + titles[key] + ') not found';
	        }
	}

	// creates a model of the discipline obj
	var obj = {
    disciplina : '',
    teoria : '',
    pratica : ''
	};

	// iterate
	for (var i = FIRST_PAGE; i < pages.length; i++) {
	         for (var j = 0; j < pages[i].Texts.length; j++) {
	        		// codigo da turma -> significa que chegamos ao comeco -> podemos terminar
	        		// if all values are ready, push it to the output JSON
                  //console.log(pages[i].Texts[j].R[0].T, pages[i].Texts[j].x)
	                if (pages[i].Texts[j].x < positions.codigo + 0.5) {
	                        obj = work(obj, titles);
	                }
	                // disciplina
	                if (pages[i].Texts[j].x > positions.codigo && pages[i].Texts[j].x <= positions.disciplina) {
	                        obj.disciplina += decodeURIComponent(pages[i].Texts[j].R[0].T);
	                }
                  // docente teoria
	                if (pages[i].Texts[j].x >= positions.before_teoria && pages[i].Texts[j].x < positions.after_teoria) {
	                       	if(obj.teoria === null) {
	                        	obj.teoria = '';
	                        }
	                        obj.teoria += decodeURIComponent(pages[i].Texts[j].R[0].T);
	                }
	                // docente pratica
	                if (pages[i].Texts[j].x >= positions.before_pratica && pages[i].Texts[j].x < positions.after_pratica) {
	                        if(obj.pratica === null) {
	                        	obj.pratica = '';
	                        }
	                        obj.pratica += decodeURIComponent(pages[i].Texts[j].R[0].T);
	                }
	        }
	}
	// write json document
	jsonfile.writeFileSync("tmp/horarios.json", response);
});

pdfParser.loadPDF("tmp/tmp.pdf");

}

var file = fs.createWriteStream("tmp/tmp.pdf");
console.log('Fazendo download do PDF...');
var stream = request.get(link).pipe(file);
stream.on('finish', function () { parsePDF(); });