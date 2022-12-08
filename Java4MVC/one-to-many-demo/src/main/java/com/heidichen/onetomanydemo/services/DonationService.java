package com.heidichen.onetomanydemo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.heidichen.onetomanydemo.models.Donation;
import com.heidichen.onetomanydemo.repositories.DonationRepository;

@Service
public class DonationService {

	@Autowired
	private DonationRepository donationRepo;
	
	public Donation createDonation(Donation donation) {
		return donationRepo.save(donation);
	}
}
