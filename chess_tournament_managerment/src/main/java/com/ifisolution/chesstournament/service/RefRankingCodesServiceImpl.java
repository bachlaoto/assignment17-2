/*
 * Created on 2018-10-05 ( Date ISO 2018-10-05 - Time 15:49:42 )
 * Generated by Telosys ( http://www.telosys.org/ ) version 3.0.0
 */
package com.ifisolution.chesstournament.service;


import com.ifisolution.chesstournament.entity.RefRankingCodes;
import com.ifisolution.chesstournament.repository.RefRankingCodesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class RefRankingCodesServiceImpl implements RefRankingCodesService {

    @Autowired
    private RefRankingCodesRepository refRankingCodesRepository;

    @Override
    public RefRankingCodes getOne(Integer rankingCode) {
        return refRankingCodesRepository.findById(rankingCode).get();
    }

    @Override
    public Boolean delete(Integer rankingCode) {
        if (refRankingCodesRepository.getOne(rankingCode) != null) {
            refRankingCodesRepository.deleteById(rankingCode);
            return true;
        }
        return false;
    }

    @Override
    public RefRankingCodes create(RefRankingCodes refRankingCodes) {
        return refRankingCodesRepository.save(refRankingCodes);
    }

    @Override
    public RefRankingCodes update(RefRankingCodes refRankingCodesToUpdate) {
//        RefRankingCodes refRankingCodes = refRankingCodesRepository.getOne(refRankingCodesToUpdate.getRankingCode());
//
//        if (refRankingCodesToUpdate.getRankingDescription() != null) {
//
//        }
//        return refRankingCodesRepository.save(refRankingCodes);
        return refRankingCodesRepository.save(refRankingCodesToUpdate);
    }

    @Override
    public Boolean exist(RefRankingCodes refRankingCodes) {
        return refRankingCodesRepository.existsById(refRankingCodes.getRankingCode());
    }

    @Override
    public List<RefRankingCodes> findAll() {
        return refRankingCodesRepository.findAll();
    }

    @Override
    public Page<RefRankingCodes> findAll(Pageable pageable) {
        return refRankingCodesRepository.findAll(pageable);
    }
}





