# Churrascometro

 Esse é um código que eu fiz com a ajuda do curso [Programadores BR](https://programadorbr.com/). Segui a base do curso e fiz algumas alterações para deixar o projeto mais útil e agradável.

![Screenshot do Site](https://imgur.com/VHgk5gF.png)

## Demo

[Clique aqui](https://allan-carlos.github.io/Churrascometro/) e você será redirecionado(a) para o site.

## Tecnologias Usadas

- HTML
- CSS
- JAVASCRIPT

## Aprendizados

Nesse projeto, consegui, pela primeira vez, adicionar funcionalidades reais usando JavaScript puro! Consegui explorar coisas como: funções, Math, e um pouco do if! Fiquei muito satisfeito com o resultado final, e aprendi muita coisa com o desenvolvimento dessa página!

## Observações

Os cálculos para a quantidade de alimentos e bebidas são baseados nos seguintes critérios:

- Carne:
  - A quantidade base de carne consumida por pessoa é de 360 gramas. Para cada incremento de 2 horas na duração do evento, adiciona-se um adicional de 5% a essa quantidade base.
  - A distribuição entre os tipos de carne é: 45% de carne bovina, 35% de frango e 20% de linguiça.
 
- Pão de alho:
  - Para eventos com duração inferior a 6 horas, é aceito um pão de alho por pessoa.
  - Para eventos com duração superior a 6 horas, a porção sugerida é de dois pães de alho por pessoa.

- Cerveja:
  - A quantidade base de cerveja consumida por pessoa é de 950ml. Para cada incremento de 2 horas na duração do evento, adiciona-se um adicional de 5% a essa quantidade base.

- Refrigerante/Água:
  - A quantidade base de bebidas consumida por pessoa é de 750ml. Para cada incremento de 2 horas na duração do evento, adiciona-se um adicional de 5% a essa quantidade base.

- Copos descartáveis:
  - Para eventos, é necessário 4 copos descartáveis por pessoa.
 
- Carvão:
  - Para eventos, é aceitável 5kg de carvão a cada 6kg de carne.

Mulheres valem por 0.75 e crianças valem por 0.50

## Nota

Os dados utilizados para os cálculos neste projeto foram coletados de vários sites de churrasco. Por favor, note que esses valores são **aproximados**, pois não existem estudos aprofundados sobre as quantidades exatas de alimentos e bebidas necessárias para um churrasco, e também não estou levando em conta várias variáveis como: sexo, metabolismo, etc. Portanto, esses valores devem ser ajustados conforme você necessite. Atualize a função **calcular** para obter um melhor resultado.

## Como Executar o Projeto

Para executar o projeto, basta fazer o download ou clonar este repositório em seu computador. Em seguida, abra o arquivo index.html no seu navegador e a página será exibida.

## Estrutura do Projeto

- `style.css`: Arquivo que contém todos os estilos do site.
- `script.js`: Arquivo que abriga todo código JS responsável pelas interações da página.
- `index.html`: Arquivo príncipal do site.

## Licença

Este projeto é licenciado sob a Licença MIT. Consulte o arquivo `LICENSE` para obter mais informações.
