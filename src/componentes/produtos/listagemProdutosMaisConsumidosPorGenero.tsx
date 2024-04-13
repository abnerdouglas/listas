import React, { useState } from 'react';

type Produto = {
  id: number;
  nome: string;
  marca: string;
  preco: number;
  genero: string;
  quantidade: number;
};

const ListagemProdutosMaisConsumidosPorGenero = () => {
  const [produtos] = useState<Produto[]>([
    {
      id: 1,
      nome: 'Perfume',
      marca: 'Boticário',
      preco: 120.00,
      genero: 'Masculino',
      quantidade: 12
    },
    {
      id: 2,
      nome: 'Creme de Barbear',
      marca: 'Gilette',
      preco: 50.00,
      genero: 'Masculino',
      quantidade: 6
    },
    {
      id: 3,
      nome: 'Creme',
      marca: 'Natura',
      preco: 150.00,
      genero: 'Feminino',
      quantidade: 2
    }
  ]);

  const handleEditarProduto = (id: number) => {
    // Lógica para editar o produto com o ID fornecido
    console.log('Editar produto com ID:', id);
  };

  const handleExcluirProduto = (id: number) => {
    // Lógica para excluir o produto com o ID fornecido
    console.log('Excluir produto com ID:', id);
  };

  return (
    <div className="container">
      <h5><strong>Listagem dos Produtos MAIS Consumidos Por Gênero</strong></h5>
      <hr />
      {['Masculino', 'Feminino'].map((genero, index) => (
        <div key={index} style={{ marginTop: index === 1 ? 50 : 0 }}>
          <h6>Gênero {genero.charAt(0).toUpperCase() + genero.slice(1)}</h6>
          <table className="bordered striped centered highlight responsive-table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">Marca</th>
                <th scope="col">Preço(R$)</th>
                <th scope="col">Gênero</th>
                <th scope="col">Quantidade de Consumo</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              {produtos.map(produto => {
                if (produto.genero === genero) {
                  return (
                    <tr key={produto.id}>
                      <td>{produto.id}</td>
                      <td>{produto.nome}</td>
                      <td>{produto.marca}</td>
                      <td>{produto.preco}</td>
                      <td>{produto.genero}</td>
                      <td>{produto.quantidade}</td>
                      <td>
                        <button className="btn btn-small purple lighten-1" onClick={() => handleEditarProduto(produto.id)}>Editar</button>
                        <button className="btn btn-small red" onClick={() => handleExcluirProduto(produto.id)}>Excluir</button>
                      </td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default ListagemProdutosMaisConsumidosPorGenero;
