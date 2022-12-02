package com.heidichen.springdemo.controllers;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RoutesController {

	// localhost:8080/search?festival=christmas
	@RequestMapping("/search")
	public String searchFestival(@RequestParam("festival")String fest) {
		return "You searched for "+ fest;
	}
	
	// localhost:8080/pet?name="pepper"&age=14
	@RequestMapping("/pet")
	public String searchPet(
			@RequestParam(value="name" , required=false)String nameInMethod , 
			@RequestParam(value="age", required=false) Integer ageInMethod
			) {
		if(nameInMethod ==null) {
			return "A Random cat is here";
		}
		if(ageInMethod == null) {
			return "We don't know the age of "+ nameInMethod;
		}
		return nameInMethod + " is " + ageInMethod + " years old";
	}

	// localhost:8080/activity/karaoke
	@RequestMapping("/activity/{whatever}")
	public String activityPath(@PathVariable("whatever") String todo) {
		return "Activity: "+ todo;
	}
	
	@RequestMapping("/activity/{act1}/{act2}")
	public ArrayList<String> activityPath2(@PathVariable("act1") String act1, @PathVariable("act2") String act2) {
		ArrayList<String> activities = new ArrayList<>();
		activities.add(act2);
		activities.add(act1);
		return activities;
	}
	

	
}
