
const entrada = document.getElementById("senha");
const resultado = document.getElementById("resultado");
const explicacao = document.getElementById("explicacao");

const btnCriptografar = document.getElementById("btnCriptografar");
const btnDescriptografar = document.getElementById("btnDescriptografar");
const btnLimpar = document.getElementById("btnLimpar");

// Criptografar os números
function criptografar(senha) {
    let senhaNova = "";

    for (let i = 0; i < senha.length; i++) {
        let numero = Number(senha[i]);

        let novoNumero = (numero + 1) % 10;

        senhaNova += novoNumero;
    }

    return senhaNova;
}

// Descriptografar os números
function descriptografar(senha) {
    let senhaOriginal = "";

    for (let i = 0; i < senha.length; i++) {
        let numero = Number(senha[i]);

        let novoNumero = (numero + 9) % 10;

        senhaOriginal += novoNumero;
    }

    return senhaOriginal;
}

// Verificar se a entrada é válida
function validarSenha() {
    const senha = entrada.value;

    if (senha === "") {
        resultado.textContent = "Digite uma sequência primeiro!";
        explicacao.textContent = "O campo não pode ficar vazio.";
        return false;
    }

    if (!/^\d+$/.test(senha)) {
        resultado.textContent = "Entrada inválida!";
        explicacao.textContent = "Utilize somente números.";
        return false;
    }

    return true;
}

// Botão criptografar
btnCriptografar.addEventListener("click", function() {
    if (!validarSenha()) return;

    const senha = entrada.value;

    const senhaProtegida = criptografar(senha);

    resultado.textContent = senhaProtegida;

    explicacao.textContent =
        "Cada algarismo foi substituído pelo próximo número.";
});

// Botão descriptografar
btnDescriptografar.addEventListener("click", function() {
    if (!validarSenha()) return;

    const senha = entrada.value;

    const senhaOriginal = descriptografar(senha);

    resultado.textContent = senhaOriginal;

    explicacao.textContent =
        "A regra inversa recuperou a sequência original.";
});

// Botão limpar
btnLimpar.addEventListener("click", function() {
    entrada.value = "";

    resultado.textContent = "Seu resultado aparecerá aqui.";

    explicacao.textContent =
        "Aguardando uma sequência numérica...";

    entrada.focus();
});
