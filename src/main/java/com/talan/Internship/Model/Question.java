package com.talan.Internship.Model;
import java.util.ArrayList;


import javax.persistence.Entity;
		import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
		import javax.persistence.Table;

		

import lombok.Data;
		@Data
		@Entity
		@Table(name = "question")
		public class Question implements Comparable<Question> {

		   
		   
		    @Id
			@GeneratedValue(strategy = GenerationType.IDENTITY)
		    private Integer id;
			private String description;
			private String category;
			private boolean published;
			@Override
			public int compareTo(Question arg0) {
				// TODO Auto-generated method stub
				return 0;
			}}
			

			

