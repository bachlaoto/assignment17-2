package com.ifisolution.chesstournament.entity;
// Generated Oct 5, 2018 11:22:52 PM by Hibernate Tools 5.2.11.Final

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

import static javax.persistence.GenerationType.IDENTITY;

/**
 * RefResultCodes generated by hbm2java
 */
@Entity
@Table(name = "ref_result_codes", catalog = "chess_tournament")
@JsonIgnoreProperties({"matcheses"})

public class RefResultCodes implements java.io.Serializable {

	private Integer resultCode;
	private String resultDescription;
	private Set<Matches> matcheses = new HashSet<Matches>(0);

	public RefResultCodes() {
	}

	public RefResultCodes(String resultDescription) {
		this.resultDescription = resultDescription;
	}

	public RefResultCodes(String resultDescription, Set<Matches> matcheses) {
		this.resultDescription = resultDescription;
		this.matcheses = matcheses;
	}

	@Id
	@GeneratedValue(strategy = IDENTITY)

	@Column(name = "result_code", unique = true, nullable = false)
	public Integer getResultCode() {
		return this.resultCode;
	}

	public void setResultCode(Integer resultCode) {
		this.resultCode = resultCode;
	}

	@Column(name = "result_description", nullable = false)
	public String getResultDescription() {
		return this.resultDescription;
	}

	public void setResultDescription(String resultDescription) {
		this.resultDescription = resultDescription;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "refResultCodes")
	public Set<Matches> getMatcheses() {
		return this.matcheses;
	}

	public void setMatcheses(Set<Matches> matcheses) {
		this.matcheses = matcheses;
	}

}
