package com.ustglobal.springcore.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.context.annotation.Scope;

import com.ustglobal.springcore.di.Cat;
import com.ustglobal.springcore.di.Dog;
import com.ustglobal.springcore.di.Hello;
import com.ustglobal.springcore.di.Pet;

@Configuration
@Import(PetConfigarationClass.class)
public class HelloConfigurationClass {

	@Bean(name="hello")		// acts like bean.xml
	@Scope("prototype")
	
	public Hello getHello() {		//factory class
		Hello hello = new Hello();
		hello.setMsg("hi hello bye bye");
		return hello;
	}

	/*
	 * @Bean(name= "dog") 
	 * public Dog getDog() 
	 * return new Dog(); 
	 * }
	 * 
	 * @Bean(name="cat") 
	 * public Cat getCat() {
	 *  return new Cat(); 
	 *  }
	 * 
	 * @Bean(name="pet") 
	 * public Pet getPet() {
	 *  Pet pet = new Pet();
	 * pet.setName("Bittuuuu"); //pet.setAnimal(getDog());
	 *  return pet; 
	 *  }
	 */

}
