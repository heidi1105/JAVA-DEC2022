package com.heidichen.springdemo.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/mapping")
public class APIController {

	// OPTION 1: RequestMapping (default: get)
	@RequestMapping("/option1") // localhost:8080/mapping/option1
	public String requestOption1() {
		return "RequestMapping option1";
	}
	
	// OPTION 2: RequestMapping long-form(default: get)
	@RequestMapping(value="/option2", method=RequestMethod.GET)
	public String requestOption2() {
		return "RequestMapping option2";
	}
	
	// OPTION 3 : GetMapping, PostMapping, PutMapping, DeleteMapping
	@GetMapping("/option3")
	public String requestOption3() {
		return "RequestMapping option3";
	}
	

	

}
