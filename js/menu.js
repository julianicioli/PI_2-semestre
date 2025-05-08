// Função para exibir ou ocultar a seção do professor com base no tipo de usuário
  // Exemplo: suponha que você tenha uma variável que identifica o tipo de usuário
  // Exemplo: let tipoUsuario = 'coordenador' ou 'professor'
  let tipoUsuario = 'coordenador'; // ou 'professor', conforme o login

  if (tipoUsuario === 'coordenador') {
    document.querySelector('.professor-section').style.display = 'none';
    // Se quiser, pode garantir que a outra está visível:
    // document.querySelector('.navbar').style.display = 'block';
    // document.querySelector('.container').style.display = 'block';
  } else if (tipoUsuario === 'professor') {
    document.querySelector('.professor-section').style.display = 'block';
    // Esconde a navbar/container do coordenador:
    document.querySelector('.navbar').style.display = 'none';
    document.querySelector('.container').style.display = 'none';
  }
