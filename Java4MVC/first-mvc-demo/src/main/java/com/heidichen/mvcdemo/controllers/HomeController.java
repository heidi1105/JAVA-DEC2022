package com.heidichen.mvcdemo.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;

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

	// CREATE (DATA BINDING)
	// Display the form
	@GetMapping("/donations/new")
	public String displayNewDonationForm(
			@ModelAttribute("newDonation") Donation donation) {
		// ModelAttribute creates an empty object based on the datatype we defined
		// option 1: ModelAttribute
		// option 2: create an empty object and add it to Model model
//		Donation newDonation = new Donation();
//		model.addAttribute("newDonation", newDonation);
		return "newDonationForm.jsp";
	}
	
	// Process the form
	@PostMapping("/donations/new")
	public String processCreateForm(
			@Valid @ModelAttribute("newDonation") Donation donation, 
			BindingResult result
			) {
		if(result.hasErrors()) {
			// if it doesn't pass validation
			return "newDonationForm.jsp";
		}else {
			donationService.addDonation(donation);
			return "redirect:/donations";
		}
	}
	
	
	// EDIT form
	// Display the form
	@GetMapping("/donations/edit/{id}")
	public String displayUpdateForm(@PathVariable("id")Long id, Model model) {
		Donation donation = donationService.oneDonation(id);
		model.addAttribute("donation", donation);
		return "editDonationForm.jsp";
	}
	
	
	
	// process the form
	@PutMapping("/donations/edit/{id}")
	public String processUpdate(@Valid @ModelAttribute("donation") Donation donation, 
			BindingResult result, @PathVariable("id")Long id) {
		if(result.hasErrors()) {
			return "editDonationForm.jsp";
		}else {
			donationService.updateDonation(donation);
			return "redirect:/donations";
		}
	}
	
	
	
	
	// CREATE (JUST FOR REFERENCE! DO NOT USE -- RequestParam)
	// Display the form
	@GetMapping("/donations2/new")
	public String displayOldCreateForm() {
		return "newDonationToAmend.jsp";
	}
	
	// process the form
	@PostMapping("/donations2/new")
	public String processOldCreateForm(
			@RequestParam("donationName") String donationName,
			@RequestParam("quantity") Integer quantity,
			@RequestParam("donor") String donor,
			@RequestParam("description") String description
			) {
		Donation newDonation = new Donation();
		newDonation.setDonationName(donationName);
		newDonation.setQuantity(quantity);
		newDonation.setDonor(donor);
		newDonation.setDescription(description);
		donationService.addDonation(newDonation);
		return "redirect:/donations";
	}
	
	
	
	
	
	
	
}
