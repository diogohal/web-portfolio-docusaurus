---
sidebar_position: 1
---

# Face Superposition Normalization
Esse projeto tem como objetivo ajustar um conjunto de fotos de rostos a fim de criar uma sobreposição padrão entre elas.
O código pode ser encontrado no [repositório GitHub](https://github.com/diogohal/face-superposition-normalization).

## Motivação

A principal motivação para esse projeto foi automatizar a geração de fotos para um efeito de time-lapse. Em 2021, eu deixei meu cabelo crescer e, durante o ano, tirei uma foto por dia do meu rosto. O intuito era criar um vídeo time-lapse no último dia do ano para observar a evolução. Na época, eu não conhecia ferramentas que poderiam fazer isso, e como eu também não sabia programar, fiz a edição de todas as 365 fotos na mão, o que me tomou muitas horas.

O vídeo do time-lapse pode ser encontrado no meu perfil do [Instagram](https://instagram.com/diogohal).

## Demonstração
Após clonar o repositório, podem ser encontradas as 9 primeiras fotos do vídeo na pasta **test_samples**. A pasta **result_samples** contém as imagens após a transformação.
Para rodar o programa, use a linha de comando:
```bash
python face-superposition-normalization.py -i test_samples -o test_results
```
onde **-i** é a pasta de entrada e **-o** a pasta de saída. Outras argumentos podem ser usados:
* **-h** ou **--help:** Imprime um guia no terminal.
* **-i** ou **--input-folder:** Caminho para a pasta que contém as imagens de entrada.
* **-o** ou **--output-folder:** Caminho para a pasta onde as imagens normalizadas serão salvas.
* **-d** ou **--default-image:** O nome da imagem que servirá como padrão para a normalização. Padrão: a primeira imagem.
* **-q** ou **--quantity:** A quantidade de imagens que serão normalizadas. Padrão: todas as imagens.
* **-s** ou **--size-ratio:** Valor usado para redimensionar as imagens de entrada. Padrão: 1.0.
* **-l** ou **--lines:** Desenha linhas horizontais e verticais das interseções da posição dos olhos.

## Como funciona?
A lógica por trás do código baseia-se na posição dos olhos. A ideia é reposicioná-los em um local padrão para que os rostos fiquem sobrepostos. Para isso, foi utilizado um modelo pré-treinado para a detecção dos olhos, o Haar Cascade.

### Primeiro passo: achar as coordenadas dos olhos
O modelo retorna uma caixa com as posições de cada olho encontrado, fornecendo três informações: as coordenadas **(x, y)** do canto superior esquerdo da caixa, a distância horizontal **h** até o canto superior direito e a distância vertical **v** até o canto inferior esquerdo. Em outras palavras, as coordenadas dos quatro cantos dessa caixa são **(x, y)**, **(x+h, y)**, **(x, y+v)** e **(x+h, y+v)**. Usando um cálculo de média simples, podemos estimar as coordenadas do ponto central dos olhos.

### Segundo passo: rotacionar a imagem para manter a linha do rosto horizontal
Agora que temos as informações das coordenadas dos dois olhos, podemos calcular o ângulo entre eles e realizar uma rotação para alinhar os olhos horizontalmente. Isso envolve o uso de propriedades trigonométricas, uma vez que as posições dos olhos formam um triângulo retângulo. Podemos calcular a tangente e, em seguida, usar a tangente inversa para encontrar o ângulo correto. Por fim, aplicamos essa rotação à imagem.

### Terceiro passo: redimensionar a foto e colocar na posição padrão
Agora precisamos redimensionar a imagem para atender à proporção padrão. Lembre-se de que, se esta for a primeira imagem a ser analisada, ela se tornará o padrão. Para fazer isso, basta encontrar a razão entre a distância dos olhos padrão e a distância dos olhos na imagem em análise. Essa razão é usada para redimensionar a foto. Por fim, basta posicionar os olhos nas mesmas coordenadas das posições padrão dos olhos, o que resulta na sobreposição das imagens.

## Problemas
Por vezes o modelo de detecção do Haar Cascade tem problemas em encontrar os olhos. Em análises empíricas, notei que algumas vezes encontrava-se apenas um olho e, em outros momentos, confundia-se uma das narinas com um dos olhos. No primeiro caso, o algoritmo para a execução do programa, já no segundo ele realiza as transformações de forma errônea. Além disso, imagens muito grandes aparentam apresentar uma maior ocorrência desses erros.