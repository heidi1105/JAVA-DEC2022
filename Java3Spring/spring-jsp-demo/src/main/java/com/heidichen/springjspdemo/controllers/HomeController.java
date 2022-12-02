package com.heidichen.springjspdemo.controllers;

import java.util.ArrayList;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
	
	@RequestMapping("/home")
	public String index() {
		return "home.jsp";
	}
	
	@RequestMapping("/jstl")
	public String jstlDemo(Model model) {
		String name = "Heidi";
		Integer happiness = 10;
		String scriptText = "<script> alert('I am a hacker') </script> ";
		Boolean isHungry = false;
		model.addAttribute("jspName", name);
		model.addAttribute("happiness", happiness);
		model.addAttribute("scriptText", scriptText);
		model.addAttribute("isHungry", isHungry);
		
		// if-conditions
		if(happiness > 5) {
			System.out.println("I am happy");
		}
		
		// create arraylist for for-loop
		ArrayList<String> skills = new ArrayList<>();
		skills.add("breaking the code");
		skills.add("sleeping while coding");
		skills.add("Karaoke");
		model.addAttribute("skillList", skills);
		for(String eachSkill: skills) {
			System.out.println(eachSkill);
		}
		
		return "jstl.jsp";
	}
	
}












