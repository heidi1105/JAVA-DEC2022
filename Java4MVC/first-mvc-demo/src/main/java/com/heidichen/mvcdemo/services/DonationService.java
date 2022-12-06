package com.heidichen.mvcdemo.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.heidichen.mvcdemo.models.Donation;
import com.heidichen.mvcdemo.repositories.DonationRepository;

@Service
public class DonationService {
	
	// option 1
	private final DonationRepository donationRepo;
	
	public DonationService(DonationRepository donationRepo) {
		this.donationRepo = donationRepo;
	}
	
	// option 2 
	
	// get all donations
	public List<Donation> allDonations(){
		return donationRepo.findAll();
	}
	
	// create donation
	public Donation addDonation(Donation newDonation) {
		return donationRepo.save(newDonation);
	}
	
	
	
}
