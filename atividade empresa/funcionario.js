class funcionario{
    nomeCompleto;
    númeroDeMatrícula
    anoDeAdmissaoNaEmpresa;
    enderecoResidencial;

    
    constructor(nomeComplet, numeroDeMatricula, anoDeAdmissaoNaEmpresa,  enderecoResidencial) {
        this.nomeCompleto = nomeCompleto
        this.numeroDeMatricula = numeroDeMatricula;
        this.anoDeNascimento =  anoDeNascimento;
        this.enderecoResidencial = enderecoResidencial;
    }

    receberSalario(valor) {
        return `${this._nomeCompleto} recebeu o salario de R$ 2000${valor.toFixed(2)}.`;
        console.log("valor 2000");
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
            const valorBolsa = 1500;  // Exemplo de valor fixo de bolsa
            return `${this.nome} recebeu a bolsa de R$${valorBolsa.toFixed(2)}`;
        }
    
        registrarAtividade(descricao) {
            return `Atividade registrada para ${this.nome}: ${descricao}`;
        }
    }
    

    
}

    receberSalario(valor) {
            return `${this.nome} recebeu o salário de R$${valor.toFixed(2)}`;
        }
    
        tempoDeEmpresa(anoAtual) {
            return anoAtual - this.anoAdmissao;
        }
    
        baterPonto() {
            return `Ponto registrado para ${this.nome}`;
        }
    
    
class Gerente extends Funcionario {
        constructor(nome, matricula, anoAdmissao, endereco) {
            super(nome, matricula, anoAdmissao, endereco);
        }
    
        autorizarDespesas(valor) {
            if (valor > 10000) {  // Exemplo de valor limite para autorização
                return `Despesa de R$${valor.toFixed(2)} autorizada por ${this.nome}`;
            } else {
                return `Despesa de R$${valor.toFixed(2)} não necessita de autorização`;
            }
        }
    
        receberSalario(valor) {
            const bonus = valor * 0.20;
            const salarioComBonus = valor + bonus;
            return super.receberSalario(salarioComBonus);
        }
    }
    
class OperadorDeCaixa extends Funcionario {
        constructor(nome, matricula, anoAdmissao, endereco) {
            super(nome, matricula, anoAdmissao, endereco);
        }
    
        fecharCaixa(totalMovimentado) {
            return `Caixa fechado com total de R$${totalMovimentado.toFixed(2)} por ${this.nome}`;
        }
    }
    
class Estagiario extends Funcionario {
        constructor(nome, matricula, anoAdmissao, endereco) {
            super(nome, matricula, anoAdmissao, endereco);
        }
    
        receberSalario() {
            const valorBolsa = 1500;  // Exemplo de valor fixo de bolsa
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
      
        autorizarDespesa(valor) {
          return `Despesa de R$${valor.toFixed(2)} autorizada por ${this.nomeCompleto}.`;
        }
      }
      
      class OperadorDeCaixa extends Funcionario {
        constructor(nomeCompleto, matricula, anoAdmissao, endereco) {
          super(nomeCompleto, matricula, anoAdmissao, endereco);
        }
      
        fecharCaixa(totalMovimentado) {
          return `Caixa fechado por ${this.nomeCompleto}. Total movimentado: R$${totalMovimentado.toFixed(2)}.`;
        }
      
        // O método receberSalario mantém o comportamento da classe base por enquanto
      }
      
      class Estagiario extends Funcionario {
        constructor(nomeCompleto, matricula, anoAdmissao, endereco, bolsa) {
          super(nomeCompleto, matricula, anoAdmissao, endereco);
          this._bolsa = bolsa;
          this._atividades = [];
        }
      
        receberSalario() {
          return `${this.nomeCompleto} recebeu bolsa de estágio no valor de R$${this._bolsa.toFixed(2)}.`;
        }
      
        registrarAtividade(descricao) {
          this._atividades.push(descricao);
          return `Atividade '${descricao}' registrada para ${this.nomeCompleto}.`;
        }
      
        // Estagiários não terão os métodos autorizarDespesa e fecharCaixa
      }
      
      // Exemplos de uso:
      const gerente = new Gerente("Ana Silva", "G123", 2020, "Rua das Flores, 100", 5000);
      const operador = new OperadorDeCaixa("Pedro Souza", "OC456", 2021, "Avenida Central, 25");
      const estagiario = new Estagiario("Mariana Oliveira", "E789", 2023, "Travessa da Paz, 5", 1200);
      
      console.log(gerente.receberSalario());
      console.log(gerente.autorizarDespesa(500));
      console.log(gerente.verificarTempoEmpresa());
      console.log(gerente.baterPonto());
      console.log("-" .repeat(20));
      console.log(operador.receberSalario(2000));
      console.log(operador.fecharCaixa(15000));
      console.log(operador.verificarTempoEmpresa());
      console.log(operador.baterPonto());
      console.log("-" .repeat(20));
      console.log(estagiario.receberSalario());
      console.log(estagiario.registrarAtividade("Participou de treinamento sobre atendimento ao cliente."));
      console.log(estagiario.verificarTempoEmpresa());
      console.log(estagiario.baterPonto());
      // estagiario.autorizarDespesa(100); // Isso geraria um erro, pois o método não existe na classe Estagiario
    
    
    
    