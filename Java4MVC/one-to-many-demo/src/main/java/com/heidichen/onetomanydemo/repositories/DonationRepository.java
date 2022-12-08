package com.heidichen.onetomanydemo.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.heidichen.onetomanydemo.models.Donation;

@Repository
public interface DonationRepository extends CrudRepository<Donation, Long> {
	
	List<Donation> findAll();
}
