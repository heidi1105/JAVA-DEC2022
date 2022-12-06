package com.heidichen.mvcdemo.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.heidichen.mvcdemo.models.Donation;
import com.heidichen.mvcdemo.services.DonationService;

@RestController
@RequestMapping("/api")
public class APIController {
	
	private final DonationService donationService;

	public APIController(DonationService donationService) {
		this.donationService = donationService;
	}
	
	// get all donations
	@GetMapping("/donations")
	public List<Donation> getAllDonations(){
		return donationService.allDonations();
	}
	
	
	// create donation
	@PostMapping("/donations")
	public Donation createDonation(
			@RequestParam("donationName") String donationName,
			@RequestParam("donor") String donor,
			@RequestParam("quantity") Integer quantity,
			@RequestParam("description") String description
			) {
		Donation newDonation = new Donation(donationName, donor, quantity, description);
		return donationService.addDonation(newDonation);
		
		
	}
	
	
}
