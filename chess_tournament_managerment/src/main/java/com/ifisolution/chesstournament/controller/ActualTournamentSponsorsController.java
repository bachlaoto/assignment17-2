/*
 * Created on 2018-10-06 ( Date ISO 2018-10-06 - Time 10:52:25 )
 * Generated by Telosys ( http://www.telosys.org/ ) version 3.0.0
 */
package com.ifisolution.chesstournament.controller;

import com.ifisolution.chesstournament.entity.ActualTournamentSponsors;
import com.ifisolution.chesstournament.service.ActualTournamentSponsorsService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 4200)
@RequestMapping(value = "/actualTournamentSponsors", produces = "application/hal+json")
public class ActualTournamentSponsorsController {

    private static final Logger LOGGER = LoggerFactory.getLogger(ActualTournamentSponsorsController.class);

    private static final String NOT_FOUND = "ActualTournamentSponsors not found";

    @Autowired
    private ActualTournamentSponsorsService actualTournamentSponsorsService;

    @RequestMapping(value = "/",
            produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<ActualTournamentSponsors> findAll() {
        List<ActualTournamentSponsors> list = actualTournamentSponsorsService.findAll();
        return list;
    }


    @GetMapping("{sponsorId}/{tournamentsId}")
    public ActualTournamentSponsors get(@PathVariable("sponsorId") Integer sponsorId, @PathVariable("tournamentsId") Integer tournamentsId) {
        final ActualTournamentSponsors actualTournamentSponsors = actualTournamentSponsorsService.getOne(sponsorId, tournamentsId);
        LOGGER.info("ActualTournamentSponsors found : {}", actualTournamentSponsors);
        return actualTournamentSponsors;
    }

    @PostMapping(consumes = "application/json")
    public ActualTournamentSponsors create(@RequestBody ActualTournamentSponsors actualTournamentSponsors) {
        LOGGER.info("ActualTournamentSponsors creation request : {}", actualTournamentSponsors);
        if (actualTournamentSponsorsService.exist(actualTournamentSponsors)) {
            LOGGER.info("ActualTournamentSponsors already exist ! : {}", actualTournamentSponsors);
            return null;
        } else {
            final ActualTournamentSponsors created = actualTournamentSponsorsService.create(actualTournamentSponsors);
            LOGGER.info("Created actualTournamentSponsors {}", created);
            return created;
        }
    }

    @PutMapping(consumes = "application/json")
    public ActualTournamentSponsors update(@RequestBody ActualTournamentSponsors actualTournamentSponsors) {
        return actualTournamentSponsorsService.update(actualTournamentSponsors);
    }

    @DeleteMapping("{sponsorId}/{tournamentsId}")
    public void delete(@PathVariable("sponsorId") Integer sponsorId, @PathVariable("tournamentsId") Integer tournamentsId) {
        LOGGER.info("ActualTournamentSponsors deletion request : {}", resolveIdForLogger(sponsorId, tournamentsId));
        if (actualTournamentSponsorsService.delete(sponsorId, tournamentsId)) {
            LOGGER.info("ActualTournamentSponsors succesfully deleted");
        } else {
            LOGGER.info(NOT_FOUND);
        }
    }

    private String resolveIdForLogger(Integer sponsorId, Integer tournamentsId) {
        final StringBuilder ids = new StringBuilder();
        ids.append(String.valueOf(sponsorId));
        ids.append("/");
        ids.append(String.valueOf(tournamentsId));
        return ids.toString();
    }

}


