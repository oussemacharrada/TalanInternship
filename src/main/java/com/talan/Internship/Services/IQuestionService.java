package com.talan.Internship.Services;

import java.util.List;

import com.talan.Internship.Model.Question;
import com.talan.Internship.responses.MessageResponse;

public interface IQuestionService {
	
	public MessageResponse save(Question question);
	public MessageResponse delete(Integer id);
	public MessageResponse update(Question question);
	public List<Question> findAll();
	public Question findById(Integer id );
	
	

	
	
	

}
