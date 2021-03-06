/*
 * Created on 2018-10-05 ( Date ISO 2018-10-05 - Time 15:49:42 )
 * Generated by Telosys ( http://www.telosys.org/ ) version 3.0.0
*/
package com.ifisolution.chesstournament.service;


import com.ifisolution.chesstournament.entity.RefResultCodes;
import com.ifisolution.chesstournament.repository.RefResultCodesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class RefResultCodesServiceImpl implements RefResultCodesService {

	@Autowired
	private RefResultCodesRepository refResultCodesRepository;

	@Override
	public RefResultCodes getOne(Integer resultCode) {
		return refResultCodesRepository.findById(resultCode).get();
	}

	@Override
	public Boolean delete(Integer resultCode) {
		if (refResultCodesRepository.getOne(resultCode) != null) {
			refResultCodesRepository.deleteById(resultCode);
			return true;
		}
		return false;
	}

	@Override
	public RefResultCodes create(RefResultCodes refResultCodes) {
		return refResultCodesRepository.save(refResultCodes);
	}

	@Override
	public RefResultCodes update(RefResultCodes refResultCodesToUpdate) {
//						RefResultCodes refResultCodes = refResultCodesRepository.getOne(refResultCodesToUpdate.getResultCode());
//
//				if(refResultCodesToUpdate.getResultDescription() !=null) {
//
//		}
//				return refResultCodesRepository.save(refResultCodes);
		return refResultCodesRepository.save(refResultCodesToUpdate);
	}

	@Override
	public Boolean exist(RefResultCodes refResultCodes) {
						return refResultCodesRepository.existsById(refResultCodes.getResultCode());
									}

	@Override
	public List<RefResultCodes> findAll() {
		return refResultCodesRepository.findAll();
	}

	@Override
	public Page<RefResultCodes> findAll(Pageable pageable) {
		return refResultCodesRepository.findAll(pageable);
	}
}





