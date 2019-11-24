package com.ustglobal.jpawithhibernetapp;

import java.util.ArrayList;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

import com.ustglobal.jpawithhibernet.manytomany.Course;
import com.ustglobal.jpawithhibernet.manytomany.Student;

public class TestManyToMany {
	public static void main(String[] args) { 
		EntityTransaction entityTransaction=null;
		EntityManager entityManager=null;

		Course c = new Course();
		c.setCid(1);
		c.setCname("mallu");

		Course c1 = new Course();
		c1.setCid(2);
		c1.setCname("abhi");

		ArrayList<Course> Courses = new ArrayList<Course>();

		Student s = new Student();
		s.setSid(3);
		s.setSname("ganga");
		s.setCourses(Courses);


		try {
			EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("TestPersistence" );
			entityManager =entityManagerFactory.createEntityManager();

			entityTransaction = entityManager.getTransaction();
			entityTransaction.begin();
			entityManager.persist(s);
			entityManager.persist(c);
			System.out.println("Record saved");
			entityTransaction.commit();
		}catch(Exception e){
			e.printStackTrace();
			//entityManager.clear();
			entityTransaction.rollback();
		}
	}
}
