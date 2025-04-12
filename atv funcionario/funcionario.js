class Funcionario {
  nomeCompleto;
  númeroDeMatrícula
  anoDeAdmissaoNaEmpresa;
  enderecoResidencial;


  constructor(nomeCompleto, numeroDeMatricula, anoDeAdmissaoNaEmpresa, enderecoResidencial) {
    this.nomeCompleto = nomeCompleto
    this.numeroDeMatricula = numeroDeMatricula;
    this.anoDeNascimento = anoDeNascimento;
    this.enderecoResidencial = enderecoResidencial;
  }
}

receberSalario(valor) {
  return `${this._nomeCompleto} recebeu o salario de R$ 2000${valor.toFixed(2)}.`;
}

verificarTempoEmpresa() {
  const tempo = anoAtual - this._anoAdmissao;
  return `${this._nomeCompleto} trabalha na empresa há ${tempo} anos.`;
}

baterPonto() {
  return `Ponto registrado para ${this._nomeCompleto}.`;
}



class Estagiario extends Funcionario {
  constructor(nome, matricula, anoAdmissao, endereco) {
    super(nome, matricula, anoAdmissao, endereco);
  }

  receberSalario() {
    const valorBolsa = 1500;
    return `${this.nome} recebeu a bolsa de R$${valorBolsa.toFixed(2)}`;
  }

  registrarAtividade(descricao) {
    return `Atividade registrada para ${this.nome}: ${descricao}`;
  }
}
class Gerente extends Funcionario {
  constructor(nomeCompleto, matricula, anoAdmissao, endereco, salario) {
    super(nomeCompleto, matricula, anoAdmissao, endereco);
    this._salarioBase = salario;
  }

  receberSalario() {
    const bonus = this._salarioBase * 0.20;
    const salarioTotal = this._salarioBase + bonus;
    return `${this.nomeCompleto} recebeu R$${salarioTotal.toFixed(2)} (salário base: R$${this._salarioBase.toFixed(2)} + bônus de 20%).`;
  }

  autorizacaoDeDespesas(determinadoValor, valorMaximo) {
    if (determinadoValor > 500) {
      console.log(`Despesa autorizada: ${determinadoValor}`);
    } else {
      console.log(`Despesa não autorizada: ${determinadoValor}`);
    }
  }
}

class OperadorDeCaixa extends Funcionario {
  constructor(nomeCompleto, matricula, anoAdmissao, endereco) {
    super(nomeCompleto, matricula, anoAdmissao, endereco);
  }

  fecharCaixa(totalMovimentado) {
    return `Caixa fechado por ${this.nomeCompleto}. Total movimentado: R$${totalMovimentado.toFixed(2)}.`;
  }
}
class Estagiario extends Funcionario {
  constructor(nomeCompleto, matricula, anoAdmissao, endereco, bolsa) {
    super(nomeCompleto, matricula, anoAdmissao, endereco);
    this._bolsa = bolsa;
    this._atividades = [];
  }

  receberSalario(valorBolsa) {
    super.receberSalario(valorBolsa);
    let salarioFixo = 850; // valor da bolsa
    console.log('valoeBolsa: ${salarioFixo}')

  }
  registrarAtividade(descricao) {
    this._atividades.push(descricao);
    return `Atividade '${descricao}' registrada para ${this.nomeCompleto}.`;
  }


}


const gerente = new Gerente("Beatriz Dias", "G123", 2020, "Rua das Flores, 100", 5000);
const operador = new OperadorDeCaixa("Pedro Souza", "OC456", 2021, "Avenida Central, 25");
const estagiario = new Estagiario("Mariana Oliveira", "E789", 2023, "Travessa da Paz, 5", 1200);

