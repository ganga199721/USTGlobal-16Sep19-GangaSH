package com.ustglobal.lms.config;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.orm.jpa.LocalEntityManagerFactoryBean;


@Configuration
public class ORMConfig {//to create EntitityManager Factory
	@Bean
	public LocalEntityManagerFactoryBean getBean() {
		
		LocalEntityManagerFactoryBean bean = new LocalEntityManagerFactoryBean();
		bean.setPersistenceUnitName("library-unit");
		return bean;
	}
}
