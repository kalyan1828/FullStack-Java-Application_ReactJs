package com.fullStackApplication.fullStack.exceptions;

public class UserNotFoundException extends RuntimeException {
	public UserNotFoundException(Long id) {
		super("Could not find the user "+ id);
	}

}
