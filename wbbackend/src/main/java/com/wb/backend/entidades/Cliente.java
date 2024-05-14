package com.wb.backend.entidades;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import org.springframework.hateoas.RepresentationModel;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Cliente extends RepresentationModel<Cliente> {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column
	private String nome;

	@Column
	private String nomeSocial;

	@Column
	private String cpf;

	@Column
	private String dataEmissaoCpf;

	@Column
	private String rg;

	@Column
	private String dataEmissaoRg;

	@Column
	private String genero;

	@OneToMany(orphanRemoval = true, cascade = CascadeType.ALL)
	private List<Telefone> telefones = new ArrayList<>();

	@OneToMany(orphanRemoval = true, mappedBy = "cliente", cascade = CascadeType.ALL)
	@JsonManagedReference
    private List<ServicosConsumidos> servicosConsumidos = new ArrayList<>();

	@OneToMany(orphanRemoval = true, mappedBy = "cliente", cascade = CascadeType.ALL)
	@JsonManagedReference
    private List<ProdutosConsumidos> produtosConsumidos = new ArrayList<>();

	// public void setServicos(List<ServicosConsumidos> servicos) {
    //     this.servicosConsumidos.clear(); // Limpa a lista existente
    //     this.servicosConsumidos.addAll(servicos); // Adiciona os novos serviços
    //     for (ServicosConsumidos servico : servicos) {
    //         servico.setCliente(this); // Define o cliente para cada serviço
    //     }
    // }
}