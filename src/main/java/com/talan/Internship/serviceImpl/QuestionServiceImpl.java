package com.talan.Internship.serviceImpl;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.talan.Internship.Model.Question;
import com.talan.Internship.Repository.QuestionRepository;
import com.talan.Internship.Services.IQuestionService;
import com.talan.Internship.responses.MessageResponse;

@Service
public class QuestionServiceImpl implements IQuestionService {

	@Autowired
	private QuestionRepository questionRepository;
	
	@Override
	public MessageResponse save(Question question) {
		questionRepository.save(question);
		return new MessageResponse(true, "succes", "Operation effectuée avec succes");
	}

	@Override
	public MessageResponse delete(Integer id) {

         questionRepository.deleteById(id);
         return new MessageResponse(true, "succes", "Operation effectuée avec succes");
	}

	@Override
	public MessageResponse update(Question question) {

        questionRepository.save(question);
		return new MessageResponse(true, "succes", "Operation effectuée avec succes");
	}

	@Override
	public List<Question> findAll() {
		
		return questionRepository.findAll().stream().sorted(Comparator.comparing(Question::getDescription)).collect(Collectors.toList());
	}

	@Override
	public Question findById(Integer id) {
		
		return questionRepository.findById(id).orElse(null);
	}
	
	
	


}