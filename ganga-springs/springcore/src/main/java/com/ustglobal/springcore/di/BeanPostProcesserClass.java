package com.ustglobal.springcore.di;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.BeanPostProcessor;

public class BeanPostProcesserClass implements BeanPostProcessor {

	//override below two methods
	
@Override
public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {
	System.out.println("postProcessBeforeInitialization"+beanName);
	return BeanPostProcessor.super.postProcessBeforeInitialization(bean, beanName);
}
	@Override
		public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {
		System.out.println("postProcessAfterInitialization"+beanName);
			return BeanPostProcessor.super.postProcessAfterInitialization(bean, beanName);
		}
	
}
