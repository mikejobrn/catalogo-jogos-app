export async function listarCatalogo() {
    const promessas = [
        fetch('https://mikejobrn.github.io/catalogo-jogos-api/'),
        fetch('https://mikejobrn.github.io/catalogo-jogos-api/generos.json'),
        fetch('https://mikejobrn.github.io/catalogo-jogos-api/plataformas.json'),
    ];

    const promessasCumpridas = await Promise.all(promessas);

    const [catalogo, generos, plataformas] = await Promise.all(
        promessasCumpridas.map(
            async (promessa) => await promessa.json()
        )
    );

    const catalogoMapeado = catalogo.map((jogo) => {
        return {
            ...jogo,
            generos: generos.filter(
                genero => {
                    if (Array.isArray(jogo.generos)) {
                        return genero.id in jogo.generos;
                    }

                    return genero.id === jogo.generos;
                }
            ),
            plataformas: plataformas.filter(
                plataforma => {
                    if (Array.isArray(jogo.plataformas)) {
                        return plataforma.id in jogo.plataformas;
                    }

                    return plataforma.id === jogo.plataformas;
                }
            )
        };
    })

    return catalogoMapeado;
}
