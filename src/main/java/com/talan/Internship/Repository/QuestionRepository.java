package com.talan.Internship.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.talan.Internship.Model.Question;

public interface QuestionRepository  extends JpaRepository<Question, Integer> {
	 
	}
