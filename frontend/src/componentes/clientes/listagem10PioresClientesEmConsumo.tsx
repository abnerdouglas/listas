import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import BuscadorClientes from "../../buscadores/buscadorCliente";
import RemovedorCliente from "../../removedores/removedorCliente";
import RemovedorClienteLocal from "../../removedores/local/removedorClienteLocal";

interface Cliente {
    id: string;
    nome: string;
    nomeSocial: string;
    cpf: string;
    dataEmissaoCpf: string;
    rg: string;
    dataEmissaoRg: string;
    genero: string;
    telefones: {
        ddd: string;
        numero: string;
    }[];
    numeroProdutosConsumidos: number;
    numeroServicosConsumidos: number;
}

interface State {
    clientes: Cliente[] | Object[] | any;
}

class Listagem10PioresClientesEmConsumo extends Component<{}, State> {

    constructor(props: {}) {
        super(props);
        this.state = {
            clientes: [],
        };
    }

    async componentDidMount() {
        const buscadorClientes = new BuscadorClientes();
        const clientes = await buscadorClientes.buscar();
        this.setState({ clientes });
    }

    public excluirRemoto(idCliente: string) {
        let removedor = new RemovedorCliente();
        removedor.remover({ id: idCliente });
    }

    public excluirLocal(id: string, e: any) {
        e.preventDefault();
        let removedorLocal = new RemovedorClienteLocal();
        let clientes = removedorLocal.remover(this.state.clientes, id);
        this.setState({
            clientes: clientes
        });
        this.excluirRemoto(id);
    }

    render() {
        const { clientes } = this.state;

        // Ordenar os clientes por total consumido
        const clientesOrdenados = clientes.sort((a, b) => {
            const totalA = a.numeroProdutosConsumidos + a.numeroServicosConsumidos;
            const totalB = b.numeroProdutosConsumidos + b.numeroServicosConsumidos;
            return totalA - totalB;
        });

        // Selecionar os top 10 clientes
        const top10Clientes = clientesOrdenados.slice(0, 10);

        return (
            <div>
                <h5><strong> Listagem dos 10 Clientes que Menos Consumiram Produtos e Serviços</strong></h5>
                <hr />

                {clientes.length === 0 ? (
                    <p>Não existem clientes cadastrados.</p>
                ) : (
                    <table className="striped">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>CPF</th>
                                <th>Total Consumido</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {top10Clientes.map(cliente => (
                                <tr key={cliente.id}>
                                    <td>{cliente.nome}</td>
                                    <td>{cliente.cpf}</td>
                                    <td>{cliente.numeroProdutosConsumidos + cliente.numeroServicosConsumidos}</td>
                                    <td>
                                        <button className="btn-small red" onClick={(e) => this.excluirLocal(cliente.id, e)}>Excluir</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        );
    }
}

export default Listagem10PioresClientesEmConsumo;