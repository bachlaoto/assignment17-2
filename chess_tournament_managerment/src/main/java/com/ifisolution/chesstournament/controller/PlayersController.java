/*
 * Created on 2018-10-05 ( Date ISO 2018-10-05 - Time 15:49:42 )
 * Generated by Telosys ( http://www.telosys.org/ ) version 3.0.0
*/
package com.ifisolution.chesstournament.controller;

import com.ifisolution.chesstournament.entity.Players;
import com.ifisolution.chesstournament.service.PlayersService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 4200)
@RequestMapping(value = "/players", produces = "application/hal+json")
public class PlayersController {

	private static final Logger LOGGER = LoggerFactory.getLogger(PlayersController.class);

	private static final String NOT_FOUND ="Players not found";

	@Autowired
	private PlayersService playersService;

//	@RequestMapping(value = "/",
//			produces = { MediaType.APPLICATION_JSON_VALUE })
//	public ResponseEntity findAll() {
//		BaseResponse<List<Players>> baseResponse = new BaseResponse<>();
//
//		List<Players> list = playersService.findAll();
//		//Set response data
//		baseResponse.setData(list);
//		//Prepare status data
//		Status status = new Status();
//		status.setCode(StatusData.SUCCESS.getCode());
//		status.setMessage(StatusData.SUCCESS.getMessage());
//		//Set all
//		baseResponse.setStatus(status);
//		baseResponse.setTimestamp(new Date());
//
//		return new ResponseEntity<>(baseResponse, HttpStatus.OK);
//	}


	@RequestMapping(value = "/",
			produces = { MediaType.APPLICATION_JSON_VALUE })
	public List<Players> findAll() {
		return playersService.findAll();
	}
	@GetMapping("{playerId}")
	public Players get(@PathVariable("playerId") Integer playerId) {
		final Players players = playersService.getOne(playerId);
		LOGGER.info("Players found : {}", players);
		return players;
	}

	@PostMapping(consumes = "application/json")
	public Players create(@RequestBody Players players) {
		LOGGER.info("Players creation request : {}", players);
		if (playersService.exist(players)) {
			LOGGER.info("Players already exist ! : {}", players);
			return null;
		} else {
			final Players created = playersService.create(players);
			LOGGER.info("Created players {}", created);
			return created;
		}
	}

	@PutMapping(consumes = "application/json")
	public Players update(@RequestBody Players players) {
		return playersService.update(players);
	}

	@DeleteMapping("{playerId}")
	public void delete(@PathVariable("playerId") Integer playerId) {
		LOGGER.info("Players deletion request : {}", resolveIdForLogger(playerId));
		if (playersService.delete(playerId)) {
			LOGGER.info("Players succesfully deleted");
		} else {
			LOGGER.info(NOT_FOUND);
		}
	}

	private String resolveIdForLogger(Integer playerId) {
		final StringBuilder ids = new StringBuilder();
		ids.append(String.valueOf(playerId));
		return ids.toString();
	}

}


