package com.activity.register.app.controllers.exceptions;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ControledException extends Exception	 {

	private static final long serialVersionUID = 1L;

	String message;

	public ControledException(String message) {
		super(message);
		this.message = message;
	}

}
