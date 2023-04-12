//evento

document.querySelector('.button').addEventListener('click', verificar);

//function

function verificar(){

var data = new Date();
let ano = data.getFullYear(); //retorna o ano da data especificada de acordo com a hora local.
let fAno = document.getElementById("txtano");
var res =  document.querySelector("div#res");

if(fAno.value.length == 0 || fAno.value > ano){ //se o ano preenchido for menor que zero (for vazio) ou então for maior que o ano atual

   window.alert('ERROR - Verifique os dados novamente')
    
} else{

      var fsex = document.getElementsByName("radsex");
      var idade = ano - fAno.value;
      var genero = "";

      // Preste atenção nessa parte
      var img = document.createElement('img'); // criei um elemento <img>
      img.setAttribute("id", 'foto') //coloquei um id nesse elemento e classifiquei ele como foto

      // isso que fiz acima é a mesma coisa que eu fizesse isso no HTML => <img id="foto">

      if(fsex[0].checked){ //  esse array em 0 significa que o btão de cheked masculino

         genero = 'masculino';

         if(idade >=0 && idade <10){

            //CRIANÇA
            img.src="image/hbebe.png"; //posso usar desse jeito, ou igual dos exemplos abaixo

         } else if(idade<21){

            //JOVEM
            img.setAttribute("src", 'image/hjoven.png');

         } else if(idade <50){

            //ADULTO
            img.setAttribute("src", 'image/homem.png');

         } else{

            //IDOSO
            img.setAttribute("src", 'image/hvelho.png');


         }

   } else if (fsex[1].checked){ //  esse array em 1 significa que o btão de cheked masculino

      genero = 'feminino';

      if(idade >=0 && idade <10){

         //CRIANÇA

         img.setAttribute("src", 'image/mbebe.png');

      } else if(idade<21){

         //JOVEM
         img.setAttribute("src", 'image/mjoven.png');


      } else if(idade <50){

         //ADULTA
         img.setAttribute("src", 'image/mulher.png');


      } else{

         //IDOSA
         img.setAttribute("src", 'image/mvelha.png');

      }

   }

   res.innerHTML= `Você é uma pessoa do sexo ${genero} com ${idade} anos`
   res.appendChild(img); // estou inserindo essa variavel img na variável "res"

}

}
