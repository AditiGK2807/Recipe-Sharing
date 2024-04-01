package com.recipe.controller;

//import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.recipe.model.User;
//import com.recipe.repository.UserRepository;
import com.recipe.service.UserService;

@RestController

public class UserController {

	@Autowired
	private UserService userService;
	
	@GetMapping("/api/users/profile")
	public User findUserByJwt(@RequestHeader("Authorization") String jwt) throws Exception {
		
		User user = userService.findUserByJwt(jwt);
		
		return user;
	}
	
//	-----------------------------------------------------------------------------------------------------------------
//	@Autowired
//	private UserRepository userRepository;
//	
//	@PostMapping("/users")
//	public User createUser(@RequestBody User user) throws Exception{
//		
//		User isExist = userRepository.findByEmail(user.getEmail());
//		if(isExist!=null) {
//			throw new Exception("User is exist with  " + user.getEmail());
//		}
//		User savedUser = userRepository.save(user);
//		return savedUser;
//	}
	
//	public User findByEmail(String email) throws Exception {
//		User user = userRepository.findByEmail(email);
//		if(user==null) {
//			throw new Exception("User not found with email " + email);
//		}
//		return user;
//	}
	
//	@DeleteMapping("/users/{userId}")
//	public String deleteUser(@PathVariable Long userId ) throws Exception{
//		userRepository.deleteById(userId);
//		return "User deleted Succesfully";
//	}
	
//	@GetMapping("/users")
//	public List<User> getAllUsers() throws Exception{
//		List<User> users = userRepository.findAll();
//		return users;
//	}
}
