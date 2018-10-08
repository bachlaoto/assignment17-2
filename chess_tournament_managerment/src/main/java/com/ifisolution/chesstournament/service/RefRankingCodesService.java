/*
 * Created on 2018-10-05 ( Date ISO 2018-10-05 - Time 15:49:42 )
 * Generated by Telosys ( http://www.telosys.org/ ) version 3.0.0
*/
package com.ifisolution.chesstournament.service;

import com.ifisolution.chesstournament.entity.RefRankingCodes;
import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface RefRankingCodesService {

	RefRankingCodes getOne(Integer rankingCode);

	List<RefRankingCodes> findAll();

	Page<RefRankingCodes> findAll(Pageable pageable);

	Boolean delete(Integer rankingCode);

	RefRankingCodes create(RefRankingCodes refRankingCodes);

	RefRankingCodes update(RefRankingCodes refRankingCodes);

	Boolean exist(RefRankingCodes refRankingCodes);

}

