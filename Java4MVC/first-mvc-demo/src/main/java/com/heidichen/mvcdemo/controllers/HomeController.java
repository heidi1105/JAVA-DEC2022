package com.heidichen.mvcdemo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.heidichen.mvcdemo.models.Donation;
import com.heidichen.mvcdemo.services.DonationService;

@Controller
public class HomeController {

	@Autowired
	private DonationService donationService;
	
	@GetMapping("/donations")
	public String dashboardPage(Model model) {
		List<Donation> allDonations = donationService.allDonations();
		model.addAttribute("donationList", allDonations);
		return "dashboard.jsp";
	}
	
	@GetMapping("/donations/{id}")
	public String oneDonation(@PathVariable("id")Long id, Model model) {
		Donation donation = donationService.oneDonation(id);
		model.addAttribute("donation", donation);
		return "oneDonation.jsp";
	}
	
}
