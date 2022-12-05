package com.heidichen.sessionformdemo.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class HomeController {
	// -----------SESSIONS-------------
	@GetMapping("/sessions/home")
	public String sessionHome(HttpSession session) {
		if(session.getAttribute("count") ==null) { // if session doesn't exist
			session.setAttribute("count", 0);	 // create count
		}else {
			Integer tempCount = (Integer) session.getAttribute("count"); // else, get the count
			session.setAttribute("count", tempCount+1); // increment when resetting the sesion
		}		
		return "/sessions/home.jsp";
	}
	
	@GetMapping("/sessions/display")
	public String displaySession() {
		return "/sessions/display.jsp";
	}
	
	// -----------SEARCH FORM (GET)-------------
	@GetMapping("/search/form")
	public String displaySearchForm() {
		return "/searchForm/searchForm.jsp";
	}
	
	@GetMapping("/search/result")
	public String displaySearchResult(@RequestParam("keyword")String keyword, Model model) {
		// logic to process the form
		model.addAttribute("keyword", keyword);
		return "/searchForm/searchResult.jsp";
	}
	
	// -----------REVIEW FORM (POST)-------------
	// Display the form
	@GetMapping("/review/form")
	public String displayReviewForm() {
		return "/reviewForm/form.jsp";
	}
	
	// Process the form (post)
	@PostMapping("/review/process")
	public String processReviewForm(
			@RequestParam("title") String title,
			@RequestParam("reviewer") String reviewer,
			@RequestParam("rating") Integer rating,
			@RequestParam("description") String description,
			HttpSession session
			) {
		session.setAttribute("title", title);
		session.setAttribute("reviewer", reviewer);
		session.setAttribute("rating", rating);
		session.setAttribute("description", description);
		
		return "redirect:/review/result";
	}
	
	// Display the result
	@GetMapping("/review/result")
	public String displayReviewResult() {
		return "/reviewForm/result.jsp";
	}
	
	
	
	
	
}





