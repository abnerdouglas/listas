import { Component } from "react";
import CadastradorProduto from "../../cadastradores/cadastradorProduto";

class FormularioProduto extends Component {
    private nome!: string;
    private marca!: string;
    private preco!: string;
    private generoConsumidor!: string;
    private quantidadeConsumida!: string;
    

    constructor(props:any) {
        super(props);
        this.capturarNome = this.capturarNome.bind(this);
        this.capturarMarca = this.capturarMarca.bind(this);
        this.capturarPreco = this.capturarPreco.bind(this);
        this.capturarGeneroConsumidor = this.capturarGeneroConsumidor.bind(this);
        this.capturarQuantidadeConsumida = this.capturarQuantidadeConsumida.bind(this);
        this.submeterFormulario = this.submeterFormulario.bind(this);
        this.cadastrarProduto = this.cadastrarProduto.bind(this);
    }

    public cadastrarProduto(objeto: Object) {
        let cadastrador = new CadastradorProduto();
        cadastrador.cadastrar(objeto);
    }

    public capturarNome(evento: any) {
        this.nome = evento.target.value;
    }

    public capturarMarca(evento: any) {
        this.marca = evento.target.value;
    }

    public capturarPreco(evento: any) {
        this.preco = evento.target.value;
    }

    public capturarGeneroConsumidor(evento: any) {
        this.generoConsumidor = evento.target.value;
    }

    public capturarQuantidadeConsumida(evento: any) {
        this.quantidadeConsumida = evento.target.value;
    }

    public submeterFormulario(evento: any) {
        evento.preventDefault();
        let produto = {
            nome: this.nome,
            marca: this.marca,
            preco: this.preco,
            generoConsumidor: this.generoConsumidor,
            quantidadeConsumida: this.quantidadeConsumida
        };
        this.cadastrarProduto(produto);
        evento.target.reset();
    }

    render() {
        return (
            <div className="col s12 m7">
                <div className="card horizontal z-depth-0">
                    <div className="card-stacked">
                        <form className="col s12" onSubmit={(e) => this.submeterFormulario(e)}>
                            <div className="card-content">
                                <div className="row">

                                    <h5><strong>Formulário Produto</strong></h5>

                                    <div className="input-field col s6">
                                        <input onChange={this.capturarNome} id="nomeProduto" type="text" className="validate active" maxLength={30} />
                                        <label htmlFor="nomeProduto">Nome</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input onChange={this.capturarMarca} id="marca" type="text" className="validate" maxLength={30} />
                                        <label htmlFor="marca">Marca</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input onChange={this.capturarPreco} id="preco" type="text" className="validate" maxLength={30} />
                                        <label htmlFor="preco">Preço(R$)</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input onChange={this.capturarGeneroConsumidor} id="generoConsumidor" type="text" className="validate" maxLength={30} />
                                        <label htmlFor="generoConsumidor">Gênero Consumidor</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input onChange={this.capturarQuantidadeConsumida} id="quantidadeConsumida" type="text" className="validate" maxLength={30} />
                                        <label htmlFor="quantidadeConsumida">Quantidade Consumida (unidades)</label>
                                    </div>

                                </div>
                            </div>
                            <div className="center-align">
                                <button className="btn purple lighten btn-large" type="submit" name="action"> Cadastrar
                                    <i className="material-icons right">send</i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormularioProduto;