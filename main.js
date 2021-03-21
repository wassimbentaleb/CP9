
function dot_product(V1, V2) {
    let scalar = 0;

    for (let i = 0; i < V1.length; i++)
        scalar += V1[i] * V2[i]

    return scalar
}

function orthogonal() {
    var N = document.getElementById('1')
    const T = [
        {
            V1: [0, 2, 0],
            V2: [4, 0, 6]
        },
        {
            V1: [0, 2, 0],
            V2: [5, 7, 6]
        },
        {
            V1: [7, 0, 4],
            V2: [0, 11, 0]
        }
    ]

    let memoire = ""

    for (let i = 0; i < T.length; i++) {
        if (T[i].V1.length == T[i].V2.length) {
            let resultat = dot_product(T[i].V1, T[i].V2)
            if (resultat == 0) {
                console.log(`[${T[i].V1}] et [${T[i].V2}] est orthogonal`)
                memoire += `[${T[i].V1}] et [${T[i].V2}] est orthogonal `
            }
        }
    }

    N.innerHTML = memoire

}

