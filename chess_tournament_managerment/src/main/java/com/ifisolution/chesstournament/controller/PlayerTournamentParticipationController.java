/*
 * Created on 2018-10-05 ( Date ISO 2018-10-05 - Time 15:49:42 )
 * Generated by Telosys ( http://www.telosys.org/ ) version 3.0.0
*/
package com.ifisolution.chesstournament.controller;

import com.ifisolution.chesstournament.entity.PlayerTournamentParticipation;
import com.ifisolution.chesstournament.service.PlayerTournamentParticipationService;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.MediaType;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "/playerTournamentParticipation", produces = "application/hal+json")
public class PlayerTournamentParticipationController {

	private static final Logger LOGGER = LoggerFactory.getLogger(PlayerTournamentParticipationController.class);

	private static final String NOT_FOUND ="PlayerTournamentParticipation not found";

	@Autowired
	private PlayerTournamentParticipationService playerTournamentParticipationService;

	@RequestMapping(value = "/",
			produces = { MediaType.APPLICATION_JSON_VALUE })
	public List<PlayerTournamentParticipation> findAll() {
		List<PlayerTournamentParticipation> list = playerTournamentParticipationService.findAll();
		return list;
	}


	@GetMapping("{playerId}/{tournamentId}")
	public PlayerTournamentParticipation get(@PathVariable("playerId") Integer playerId, @PathVariable("tournamentId") Integer tournamentId) {
		final PlayerTournamentParticipation playerTournamentParticipation = playerTournamentParticipationService.getOne(playerId, tournamentId);
		LOGGER.info("PlayerTournamentParticipation found : {}", playerTournamentParticipation);
		return playerTournamentParticipation;
	}

	@PostMapping(consumes = "application/json")
	public PlayerTournamentParticipation create(@RequestBody PlayerTournamentParticipation playerTournamentParticipation) {
		LOGGER.info("PlayerTournamentParticipation creation request : {}", playerTournamentParticipation);
		if (playerTournamentParticipationService.exist(playerTournamentParticipation)) {
			LOGGER.info("PlayerTournamentParticipation already exist ! : {}", playerTournamentParticipation);
			return null;
		} else {
			final PlayerTournamentParticipation created = playerTournamentParticipationService.create(playerTournamentParticipation);
			LOGGER.info("Created playerTournamentParticipation {}", created);
			return created;
		}
	}

	@PutMapping(consumes = "application/json")
	public PlayerTournamentParticipation update(@RequestBody PlayerTournamentParticipation playerTournamentParticipation) {
		return playerTournamentParticipationService.update(playerTournamentParticipation);
	}

	@DeleteMapping("{playerId}/{tournamentId}")
	public void delete(@PathVariable("playerId") Integer playerId, @PathVariable("tournamentId") Integer tournamentId) {
		LOGGER.info("PlayerTournamentParticipation deletion request : {}", resolveIdForLogger(playerId, tournamentId));
		if (playerTournamentParticipationService.delete(playerId, tournamentId)) {
			LOGGER.info("PlayerTournamentParticipation succesfully deleted");
		} else {
			LOGGER.info(NOT_FOUND);
		}
	}

	private String resolveIdForLogger(Integer playerId, Integer tournamentId) {
		final StringBuilder ids = new StringBuilder();
		ids.append(String.valueOf(playerId));
		ids.append("/");
		ids.append(String.valueOf(tournamentId));
		return ids.toString();
	}

}


