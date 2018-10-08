package com.ifisolution.chesstournament.entity;
// Generated Oct 5, 2018 11:22:52 PM by Hibernate Tools 5.2.11.Final

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.util.Objects;

/**
 * PlayerTournamentParticipationId generated by hbm2java
 */
@Embeddable
public class ActualTournamentSponsorsId implements java.io.Serializable {

    private int sponsorId;
    private int tournamentId;

    public ActualTournamentSponsorsId() {
    }

    public ActualTournamentSponsorsId(int sponsorId, int tournamentId) {
        this.sponsorId = sponsorId;
        this.tournamentId = tournamentId;
    }


    @Column(name = "sponsor_id", nullable = false)
    public int getSponsorId() {
        return sponsorId;
    }

    public void setSponsorId(int sponsorId) {
        this.sponsorId = sponsorId;
    }


    @Column(name = "tournament_id", nullable = false)
    public int getTournamentId() {
        return this.tournamentId;
    }

    public void setTournamentId(int tournamentId) {
        this.tournamentId = tournamentId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ActualTournamentSponsorsId that = (ActualTournamentSponsorsId) o;
        return sponsorId == that.sponsorId &&
                tournamentId == that.tournamentId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(sponsorId, tournamentId);
    }
}
