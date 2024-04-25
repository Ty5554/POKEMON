// containerを取得
const container = document.querySelector('#container');

//urlを変数baseURLに入れる
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

//pokemonは151匹いるのでその分ループを回す
for (let i = 1; i <= 151; i++) {
    //divの中にimgタグとspanが入るようにしたい
    const pokemon = document.createElement('div');
    //divに対してclass(pokemon)を割り当てる
    pokemon.classList.add('pokemon');
    const label = document.createElement('span');
    //labelにポケモンの番号が出力されるようにする
    label.innerText = `#${i}`;
    //containerに画像の要素を追加
    const newImg = document.createElement('img');

    //画像の要素newImgにbaseURLを追加
    newImg.src = `${baseURL}${i}.png`;

    //上で作ったdiv(pokemon)に画像(newImg)を入れる
    pokemon.appendChild(newImg);

    pokemon.appendChild(label);

    container.appendChild(pokemon);
}