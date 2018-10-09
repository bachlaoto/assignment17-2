package com.ifisolution.chesstournament.entity;
// Generated Oct 5, 2018 11:22:52 PM by Hibernate Tools 5.2.11.Final

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

import static javax.persistence.GenerationType.IDENTITY;

/**
 * TournamentOrganizers generated by hbm2java
 */
@Entity
@Table(name = "tournament_organizers", catalog = "chess_tournament")
@JsonIgnoreProperties({"tournamentses"})

public class TournamentOrganizers implements java.io.Serializable {

	private Integer organizerId;
    private ChessClubs chessClubs;
	private String organizerName;
	private String organizerDetails;
    @JsonIgnore
    private Set<Tournaments> tournamentses = new HashSet<Tournaments>(0);

	public TournamentOrganizers() {
	}

	public TournamentOrganizers(ChessClubs chessClubs, String organizerName, String organizerDetails) {
		this.chessClubs = chessClubs;
		this.organizerName = organizerName;
		this.organizerDetails = organizerDetails;
	}

	public TournamentOrganizers(ChessClubs chessClubs, String organizerName, String organizerDetails,
			Set<Tournaments> tournamentses) {
		this.chessClubs = chessClubs;
		this.organizerName = organizerName;
		this.organizerDetails = organizerDetails;
		this.tournamentses = tournamentses;
	}

	@Id
	@GeneratedValue(strategy = IDENTITY)

	@Column(name = "organizer_id", unique = true, nullable = false)
	public Integer getOrganizerId() {
		return this.organizerId;
	}

	public void setOrganizerId(Integer organizerId) {
		this.organizerId = organizerId;
	}

    @ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "club_id", nullable = false)
	public ChessClubs getChessClubs() {
		return this.chessClubs;
	}

	public void setChessClubs(ChessClubs chessClubs) {
		this.chessClubs = chessClubs;
	}

	@Column(name = "organizer_name", nullable = false)
	public String getOrganizerName() {
		return this.organizerName;
	}

	public void setOrganizerName(String organizerName) {
		this.organizerName = organizerName;
	}

	@Column(name = "organizer_details", nullable = false)
	public String getOrganizerDetails() {
		return this.organizerDetails;
	}

	public void setOrganizerDetails(String organizerDetails) {
		this.organizerDetails = organizerDetails;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "tournamentOrganizers")
	public Set<Tournaments> getTournamentses() {
		return this.tournamentses;
	}

	public void setTournamentses(Set<Tournaments> tournamentses) {
		this.tournamentses = tournamentses;
	}

}
